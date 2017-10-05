<?php
namespace Core;
use Models\SeccionModel;
use Models\MenuModel;
use Models\ComponenteModel;
use Illuminate\Database\Capsule\Manager as Capsule;

class Seccion{
    public static $data = null;
    private static $menu = null;
    public static $modules = null;
    public static $components = null;


    public static function show(){
        views()->assign("data",self::$components);
        
        views()->display("index.html");
    }

    private static function modules($results){
        self::$modules = array_filter($results, function($components){
            foreach ($components as $component) {
                if($component->tipoComponente == 'modulo'){
                    return $component;
                }
            }
        });
        // Guardar módulos
        setcookie("9cnrjMgSKYJCwzjw", requestHash('encode', json_encode(self::$modules)), time()+3600);

        foreach (self::$modules as $module) {
            foreach ($module as $value) {
                call_user_func(array("\Modules\\".$value->nombre.'\\'.ucwords($value->nombre).'Module', 'index'));
            }
        }
    }

    public static function make($url){

    	$ruta = SeccionModel::where("ruta",$url)
            ->first();
        self::$data = (is_object($ruta) && count($ruta) > 0) ? (object) $ruta->toArray() : false;
        self::$components = self::CallRaw('cursorOrden',[self::$data->id]); 
        self::modules(self::$components);
    }

    //Llama procedimiento almacenado
    private static function CallRaw($procName, $parameters = null, $isExecute = false){
        $syntax = '';
        for ($i = 0; $i < count($parameters); $i++) {
            $syntax .= (!empty($syntax) ? ',' : '') . '?';
        }
        $syntax = 'CALL ' . $procName . '(' . $syntax . ');';

        $pdo = Capsule::connection()->getPdo();
        $pdo->setAttribute(\PDO::ATTR_EMULATE_PREPARES, true);
        $stmt = $pdo->prepare($syntax,[\PDO::ATTR_CURSOR=>\PDO::CURSOR_SCROLL]);
        for ($i = 0; $i < count($parameters); $i++) {
            $stmt->bindValue((1 + $i), $parameters[$i]);
        }
        $exec = $stmt->execute();
        if (!$exec) return $pdo->errorInfo();
        if ($isExecute) return $exec;

        $results = [];
        do {
            try {
                $results[] = $stmt->fetchAll(\PDO::FETCH_OBJ);
            } catch (\Exception $ex) {

            }
        } while ($stmt->nextRowset());


        if (1 === count($results)) return $results[0];
        return $results;
    }
}

