<?php
namespace ControllersAdmin;

use Models\adminusuarioModel as User;
use Core\Request as Request;
use Core\Mail as Mail;
use Illuminate\Database\QueryException as queryException;

class UserFunction{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
    }

    public static function forgetData(){

        //Envía un correo con los datos de recuperación si el usuario o correo por post existe
        if ( self::equalField("usuario",self::$request["userOrEmail"]) || self::equalField("correo",self::$request["userOrEmail"]) ) {

            $password=self::generatePassword(10);
            $user=User::where("usuario", self::$request["userOrEmail"] )->orWhere("correo", self::$request["userOrEmail"] )->first();
            $user=empty($user) ? $user : $user->toArray();
            
            if( User::where('id',$user["id"])->update(['contrasena' => sha1($password)]) && self::sendMailFogertData($user,$password) ){
                $response["boolean"]=true;
                $response["message"]='Te hemos enviado un correo con los datos de tu cuenta';
                echo json_encode($response);
            }else{
                echo json_encode($response);
            }

        //No existen el usuario o correo ingresado por el usuario
        }else{
            $response["message"]='No coinciden estos datos, dejanos tu numero de celular y te contactamos';
            echo json_encode($response);
        }
    }

    public static function login(){
        
       $user=User::where("usuario", self::$request["userOrEmail"] )->orWhere("correo", self::$request["userOrEmail"] )->first();
       $user=empty($user) ? $user : $user->toArray();

        //Retorna una repuesta negativa si no existe el usuario o correo
        if ( !self::equalField("usuario",self::$request["userOrEmail"]) && !self::equalField("correo",self::$request["userOrEmail"]) ) {
            $response["message"]='El usuario o correo no existe';
            echo json_encode($response);
        //Retorna una repuesta negativa si la contraseña no es correcta
        }else if( $user['contrasena']!=sha1(self::$request["password"]) ) {
            $response["message"]='La contraseña no coincide';
            echo json_encode($response);

        //Autoiza el ingreso del usuario
        }else{
            $response["boolean"]=true;
            $response["message"]='Datos correctos';
            echo json_encode($response);
        }

    }
    
    //función para editar un usuario
    public static function updateUser(){

        if(self::equalField("correo",self::$request["email"])) {
            $response["message"]='El correo ya existe';
            echo json_encode($response);
        }else{

            try{

                $user = User::find(self::$request["id"]);
                $user->idPerfil=self::$request["idProfile"];
                $user->estado=self::$request["state"];
                $user->correo =self::$request["email"];
                $user->nombre =self::$request["name"];
                $user->apellido =self::$request["lastname"];
                $user->save();

                $response["boolean"]=true;
                $response["message"]='Los datos fueron actulizados';
                echo json_encode($response);
                return $response;

            }catch (queryException $e){ echo json_encode($response); }

        }

    }


    public static function createUser(){

        $equalUser=self::equalField("usuario",$data["user"]);
        $equalEmail=self::equalField("correo",$data["email"]);

        if ($equalUser) {
            $response["message"]='El usuario ya existe';
            echo json_encode($response);
        }else if($equalEmail) {
            $response["message"]='El correo ya existe';
            echo json_encode($response);
        }else{

            try{

                $user = User::firstOrNew(array('id' => $data["idUser"]));;
                $user->idPerfil=2;
                $user->estado="A";
                $user->usuario =$data["user"];
                $user->correo =$data["email"];
                $user->nombre =$data["name"];
                $user->apellido =$data["lastname"];
                $user->contrasena = sha1($data["password"]);
                $user->save();

                $response["boolean"]=true;
                $response["message"]='Registro exitoso';
                echo json_encode($response);
                return $response;

            }catch (queryException $e){ echo json_encode($response); }

        }

    }

    //Configuración del el email apra recordar los datos y luego en la clas Mail se envía
    private static function sendMailFogertData($user,$password){
        $to=$user["correo"];
        $subject="Datos de cuenta avantel";
        $from="contacto@brm.com.co";
        $template="forget-data-email";
        $data["email"]=$user["correo"];
        $data["user"]=$user["usuario"];
        $data["password"]=$password;
        return Mail::sendMail($to,$subject,$from,$template,$data);
    }

    //Retorna una contraseña tan larga como al deseé
    private static function generatePassword($chars){
        $data = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz*!$%&=?¿^*_-.;><';
        return substr(str_shuffle($data), 0, $chars);
    }

    //Retorna una repuesta positiva si existe el campo
    private static function equalField($field,$value){
        return (empty(User::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>