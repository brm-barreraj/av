<?php
namespace ControllersAdmin;

use ControllersAdmin\UserFunction as User;
use Core\Request as Request;
use Core\Mail as Mail;

class Sesion{

    static private $user=array(),$response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]=''; 
    }

    public static function login(){
        
       $user=User::getByUserOrEmail(self::$request["user-or-email"]);

        if ( !User::fieldExists("usuario",self::$request["user-or-email"]) && !User::fieldExists("correo",self::$request["user-or-email"]) ) {
            //Retorna una repuesta negativa si no existe el usuario o correo
            self::$response["message"]='El usuario o correo no existe';
        }else if( $user['contrasena']!=sha1(self::$request["password"]) ) {
            //Retorna una repuesta negativa si la contraseña no es correcta
            self::$response["message"]='La contraseña no coincide';
        }else{
            //Autoiza el ingreso del usuario
            self::$response["boolean"]=true;
            self::$response["message"]='Datos correctos';
        }
        echo json_encode(self::$response);
    }

    public static function forgetData(){

        //Envía un correo con los datos de recuperación si el usuario o correo por post existe
        if ( self::fieldExists("usuario",self::$request["user-or-email"]) || self::fieldExists("correo",self::$request["user-or-email"]) ) {

            $password=self::generatePassword(10);
            $user=User::getByUserOrEmail($request["user-or-email"]);
            
            if( User::where('id',$user["id"])->update(['contrasena' => sha1($password)]) && self::sendMailFogertData($user,$password) ){
                self::$response["boolean"]=true;
                self::$response["message"]='Te hemos enviado un correo con los datos de tu cuenta';
                self::$response["password"]=$password;
            }
            

        //No existen el usuario o correo ingresado por el usuario
        }else{
            self::$response["message"]='No coinciden estos datos, dejanos tu numero de celular y te contactamos';
        }
       echo json_encode($response);
    }

    public static function createTemporaryData(){
        self::removeCookies();
        foreach (self::$request as $key => $value) {
            setcookie($key,$value);
        }
        printVar($_SERVER['HTTP_COOKIE'],"HTTP_COOKIE");
        printVar($_COOKIE["id"],"cokie");
    }

    private static function removeCookies(){
        if (isset($_SERVER['HTTP_COOKIE'])) {
            $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
            foreach($cookies as $cookie) {
                $parts = explode('=', $cookie);
                $name = trim($parts[0]);
                setcookie($name, '', time()-1000);
                setcookie($name, '', time()-1000, '/');
            }
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
    
}
?>