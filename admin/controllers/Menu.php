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

    //función para crear un usuario
    public static function create(){

        try{

            $menu = new MenuModel;
            $menu->idPadre=self::$request["father"];
            $menu->texto=self::$request["text"];
            $menu->urlIcono =self::$request["email"];
            $menu->tituloIcono =self::$request["name"];
            $menu->urlExterna =self::$request["lastname"];
            $menu->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        }
        echo json_encode(self::$response);

    }

    //función para eliminar un usuario
    public static function delete(){

        try{

            $user = MenuModel::find(self::$request["id"]);
            $user->estado="I";
            $user->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un usuario
    public static function update(){

        if(self::fieldExists("correo",self::$request["email"])) {
            self::$response["message"]='El correo ya existe';
        }else{

            try{

                $user = MenuModel::find(self::$request["id"]);
                $user->idPerfil=self::$request["idProfile"];
                $user->estado=self::$request["state"];
                $user->correo =self::$request["email"];
                $user->nombre =self::$request["name"];
                $user->apellido =self::$request["lastname"];
                $user->save();

                self::$response["boolean"]=true;
                self::$response["message"]='Los datos fueron actulizados';

            }catch (queryException $e){ self::$response["catch"]=$e; }

        }
        echo json_encode(self::$response);

    }

    //Retorna todos los usuarios
    public static function get(){
        $users = 
            MenuModel::join('admin_perfil', 'admin_usuario.idPerfil', '=', 'admin_perfil.id')
            ->select('admin_usuario.*', 'admin_perfil.nombre as perfil')
            ->get();
        $users=empty($users) ? $users : $users->toArray();
        return $users;   
    }


    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $user=MenuModel::where($field,$unique)->first();
        $user=empty($user) ? $user : $user->toArray();
        return $user;   
    }

    //Retorna un registro de la base de datos según el usuario o el correo
    public static function getByUserOrEmail($value){
        $user=MenuModel::where("usuario", $value )->orWhere("correo",$value)->first();
        $user=empty($user) ? $user : $user->toArray();
        return $user;   
    }


    //Retorna una repuesta positiva si existe el campo
    public static function fieldExists($field,$value){
        return (empty(MenuModel::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>