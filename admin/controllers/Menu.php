<?php
namespace ControllersAdmin;

use Models\menuModel as MenuModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class Menu{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un menu
    public static function create(){

        try{

            $menu = new MenuModel;
            $menu->idPadre=self::$request["father"];
            $menu->texto=self::$request["text"];
            $menu->enlace =self::$request["link"];
            $menu->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        }
        echo json_encode(self::$response);

    }

    //función para eliminar un menu
    public static function delete(){

        try{

            $menu = MenuModel::find(self::$request["id"]);
            $menu->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un menu
    public static function update(){

        try{

            $user = MenuModel::find(self::$request["id"]);
            $menu->idPadre=self::$request["father"];
            $menu->texto=self::$request["text"];
            $menu->enlace =self::$request["link"];
            $user->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }
    }

}
?>