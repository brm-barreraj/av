<?php
namespace Core;
use Models\SeccionModel;
use Models\MenuModel;
use Models\ComponenteModel;
use Models\ArchivoModel;

use Illuminate\Database\Capsule\Manager as Capsule;

class Seccion{
    public static $data = null;
    private static $menu = null;
    public static $modules = null;
    public static $components = null;
    private static $archivesModules = null;
    private static $archivesSeccion = null;

    public static function show(){
        views()->assign("data",self::$components);
        views()->assign("archivesModules",self::$archivesModules);
        views()->assign("archivesSeccion",self::$archivesModules);
        views()->display("index.html");
    }

    private static function modules($results){
        self::$modules = array_filter($results, function($components) use ($results){
            if(count($results)>1){
                foreach ($components as $component) {
                    if($component->tipoComponente == 'modulo'){
                        return $component;
                    }
                }
            }else if(count($results)==1){
                if($components->tipoComponente == 'modulo'){
                    return $components;
                }
            }
        });
        // Guardar módulos
        setcookie("9cnrjMgSKYJCwzjw", requestHash('encode', json_encode(self::$modules)), time()+3600);


        foreach (self::$modules as $module) {
            if(count($results)>1){
                foreach ($module as $value) {
                    call_user_func(array("\Modules\\".$value->nombre.'\\'.ucwords($value->nombre).'Module', 'index'));
                    self::$archivesModules = ArchivoModel::orderBy('peso')
                        ->join('Modulo', 'modulo.id', '=', 'Archivo.idModulo')
                        ->select(
                            'Modulo.nombre as nombreModulo',
                            'Archivo.idModulo',
                            'Archivo.id',
                            'Archivo.peso',
                            'Archivo.posicion',
                            'Archivo.nombre as nombreArchivo',
                            'tipoArchivo'
                        )
                        ->where("idModulo",$value->id)
                        ->get()
                        ->toArray();

                }
            }else if(count($results)==1){
                call_user_func(array("\Modules\\".$module->nombre.'\\'.ucwords($module->nombre).'Module', 'index'));
                    self::$archivesModules = ArchivoModel::orderBy('peso')
                        ->join('Modulo', 'modulo.id', '=', 'Archivo.idModulo')
                        ->select(
                            'Modulo.nombre as nombreModulo',
                            'Archivo.idModulo',
                            'Archivo.id',
                            'Archivo.peso',
                            'Archivo.posicion',
                            'Archivo.nombre as nombreArchivo',
                            'tipoArchivo'
                        )
                        ->where("idModulo",$module->id)
                        ->get()
                        ->toArray();

            }
        }
    }

    public static function make($url){
    	$ruta = SeccionModel::where("ruta",$url)
            ->first();
        self::$data = (is_object($ruta) && count($ruta) > 0) ? (object) $ruta->toArray() : false;

        if(self::$data){
            self::$components = self::CallRaw('cursorOrden',[self::$data->id]);
            self::modules(self::$components);
            self::$archivesSeccion = ArchivoModel::orderBy('peso')
                ->join('Seccion', 'seccion.id', '=', 'Archivo.idSeccion')
                ->select(
                    'Archivo.idSeccion',
                    'Archivo.id',
                    'Archivo.peso',
                    'Archivo.posicion',
                    'Archivo.nombre as nombreArchivo',
                    'tipoArchivo'
                )
                ->where("idSeccion",self::$data->id)
                ->get()
                ->toArray();
        }
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

