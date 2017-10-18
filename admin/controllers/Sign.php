<?php
namespace ControllersAdmin;

use ControllersAdmin\User as User;
use ControllersAdmin\Session as Session;
use Core\Request as Request;
use Core\Mail as Mail;
use Core\Secure as Secure;

class Sign{

    static private $user=array(),$response=array(),$request,$sessionName;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';    
        self::$sessionName='user';    
    }

    public static function logIn(){
        
       $user=User::getByUserOrEmail(self::$request["user-or-email"]);

        if ( !User::fieldExists("usuario",self::$request["user-or-email"]) && !User::fieldExists("correo",self::$request["user-or-email"]) ) {
            //Retorna una repuesta negativa si no existe el usuario o correo
            self::$response["message"]='El usuario o correo no existe';
        }else if( $user['contrasena']!=sha1(self::$request["password"]) ) {
            //Retorna una repuesta negativa si la contraseña no es correcta
            self::$response["message"]='La contraseña no coincide';
        }else{
            //Autoiza el ingreso del usuario
            self::createSession($user['id']);
            self::$response["boolean"]=true;
            self::$response["message"]='Datos correctos';
        }
        echo json_encode(self::$response);
    }

    public static function logOut(){
        $idUser=self::getUserIdLoggedIn();
        if ( $idUser!="" ) { Session::delete($idUser); }
        self::removeCookies();
        session_start();
        session_destroy();
    }

    public static function isLogged(){
        return session_id() === '' ? FALSE : TRUE;
    }

    //Crea una session nueva
    private static function createSession($idUser) {
        //Configuración para la sesión
        $secure=(self::getProtocol() == "https://") ? true : false;
        $summary = Secure::encrypt(rand()."~".$_SERVER['SERVER_NAME'].'~'.$idUser);

        //Si no existe registro en la base de datos entonces se crea
        if (!Session::fieldExists("id",$idUser)) {
            $data["idUser"]=$idUser;
            $data["data"]=$summary;
            $data["time"]=time();
            $data["dns"]=$_SERVER['SERVER_NAME'];
            Session::create($data);
        }

        //Configuración para iniciar la sesión
        self::startSession(self::$sessionName, true);

        //Cookie encriptada con el id del usuario 
        setcookie(self::$sessionName, $summary, time() + 3600, '/');

    }

    //Configuracion inicial para las sesiones
    private static function startSession($name, $secure) {
        
        $httponly = true;
        $session_hash = "sha512";
        if(in_array($session_hash, hash_algos())){
            ini_set('session.hash_public static function', $session_hash);
        }

        ini_set('session.hash_bits_per_character', 5);
        ini_set('session.user_only_cookies', 1);

        $cookieParams = session_get_cookie_params();
        session_set_cookie_params(
            $cookieParams["lifetime"],
            $cookieParams["path"],
            $cookieParams["domain"],
            $secure,
            $httponly);

        session_name($name);
        session_start();
        session_regenerate_id(true);
    }

    //Función que retorna el id del usuario logueado
    private static function getUserIdLoggedIn() {
        $data=explode("~", Secure::decrypt( $_COOKIE[self::$sessionName] ) );
        return $data[2];
    }

    //Obtiene el protocolo de red que se esta utilizando
    private static function getProtocol() {
        if(isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&  $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')  return $protocol = 'https://'; else return $protocol = 'http://';
    }


    public static function forgetData(){

        //Envía un correo con los datos de recuperación si el usuario o correo por post existe
        if ( self::fieldExists("usuario",self::$request["user-or-email"]) || self::fieldExists("correo",self::$request["user-or-email"]) ) {

            $password=self::randomString(10);
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

    private static function removeCookies(){

        foreach ($_COOKIE as $key => $value) {
            unset($value);
            unset($_COOKIE[$key]);
            setcookie($key, "", time() - 3200,'/');
        }

       if (isset($_SERVER['HTTP_COOKIE'])) {
            $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
            foreach($cookies as $cookie) {
                $parts = explode('=', $cookie);
                $name = trim($parts[0]);
                setcookie($name, '', time()-3200);
                setcookie($name, '', time()-3200, '/');
            }
        }
    }

    //Configuración del el email para recordar los datos y luego en la clase Mail se envía
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
    private static function generateKey(){
        return hash('sha512', uniqid(mt_rand(1, mt_getrandmax()), true));
    }
    //Retorna una cadena tan larga como la deseé
    private static function  randomString($chars){
        $data = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz*!$%&=?¿^*_-.;><';
        return substr(str_shuffle($data), 0, $chars);
    } 


    
}
?>