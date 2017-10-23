<?php
namespace ControllersAdmin;

use Models\planModel as PlanModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class Plan{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para destacar un modulo
    public static function outstanding(){

        try{

            $module = PlanModel::find(self::$request["id"]);
            $module->destacado=1;
            $module->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }
        
        echo json_encode(self::$response);

    }

}
?>