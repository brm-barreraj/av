<?php
namespace ControllersAdmin;

use Models\moduloModel as ModuleModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class Module{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un modulo
    public static function create(){

        try{

            $module = new ModuleModel;
            $module->nombre=self::$request["name"];
            $module->estado=self::$request["state"];
            $module->administrable =self::$request["administrable"];
            $module->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para eliminar un modulo
    public static function delete(){

        try{

            $module = ModuleModel::find(self::$request["id"]);
            $module->estado="I";
            $module->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un modulo
    public static function update(){

        try{

            $module = ModuleModel::find(self::$request["id"]);
            $module->nombre=self::$request["name"];
            $module->estado=self::$request["state"];
            $module->administrable =self::$request["administrable"];
            $module->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }
        
        echo json_encode(self::$response);

    }

    //Retorna todos los modulos
    public static function get(){
        $modules = ModuleModel::get();
        $modules=empty($modules) ? $modules : $modules->toArray();
        return $modules;   
    }

    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $module=ModuleModel::where($field,$unique)->first();
        $module=empty($module) ? $module : $module->toArray();
        return $module;   
    }
}
?>