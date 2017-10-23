<?php
namespace ControllersAdmin;

use Models\usuarioModel as UserModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class User{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un usuario
    public static function create(){

        if (self::fieldExists("usuario",self::$request["user"])) {
            self::$response["message"]='El usuario ya existe';
        }else if(self::fieldExists("correo",self::$request["email"])) {
            self::$response["message"]='El correo ya existe';
        }else{

            try{

                $user = new UserModel;
                $user->idPerfil=self::$request["profile"];
                $user->estado=self::$request["state"];
                $user->usuario =self::$request["user"];
                $user->correo =self::$request["email"];
                $user->nombre =self::$request["name"];
                $user->apellido =self::$request["lastname"];
                $user->contrasena = sha1(self::$request["password"]);
                $user->save();

                self::$response["boolean"]=true;
                self::$response["message"]='Registro exitoso';

            }catch (queryException $e){ self::$response["catch"]=$e; }

        }
        echo json_encode(self::$response);

    }

    //función para eliminar un usuario
    public static function delete(){

        try{

            $user = UserModel::find(self::$request["id"]);
            $user->estado="I";
            $user->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un usuario
    public static function update(){

        try{

            $user = UserModel::find(self::$request["id"]);
            $user->idPerfil=self::$request["profile"];
            $user->estado=self::$request["state"];
            $user->correo =self::$request["email"];
            $user->nombre =self::$request["name"];
            $user->apellido =self::$request["lastname"];
            $user->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //Retorna todos los usuarios
    public static function get(){
        $users = 
            UserModel::join('perfil', 'usuario.idPerfil', '=', 'perfil.id')
            ->select('usuario.*', 'perfil.nombre as perfil')
            ->get();
        $users=empty($users) ? $users : $users->toArray();
        return $users;   
    }


    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $user=UserModel::where($field,$unique)->first();
        $user=empty($user) ? $user : $user->toArray();
        return $user;   
    }

    //Retorna un registro de la base de datos según el usuario o el correo
    public static function getByUserOrEmail($value){
        $user=UserModel::where("usuario", $value )->orWhere("correo",$value)->first();
        $user=empty($user) ? $user : $user->toArray();
        return $user;   
    }


    //Retorna una repuesta positiva si existe el campo
    public static function fieldExists($field,$value){
        return (empty(UserModel::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>