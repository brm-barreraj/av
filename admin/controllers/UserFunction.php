<?php
namespace ControllersAdmin;

use Models\adminusuarioModel as User;
use Core\Request as Request;
use Core\Mail as Mail;
use Illuminate\Database\QueryException as queryException;

class UserFunction{

    function __construct(argument){
        $request= Request::post();
        $reponse=array();
        $response["boolean"]=false;
        $response["message"]='Intentalo de nuevo';        
    }

    public static function forgetData(){

       $dataUser=User::where("usuario", $request["userOrEmail"])->orWhere("correo", $request["userOrEmail"])->toArray();
       if (is_empty($dataUser)) {

            $response["boolean"]=false;
            $response["message"]='No coinciden estos datos, dejanos tu numero de celular y te contactamos';
            echo json_encode($response);
            return $response;
                 
       }else{

           printVar($dataUser);

           $password=self::generatePassword(10);

           $to=$dataUser->correo;
           $subject="Datos de cuenta avantel";
           $from="contacto@avantel.co";
           $template="forget-data-email";
           $data["email"]=$dataUser->correo;
           $data["user"]=$dataUser->usuario;
           $data["password"]=$password;
           $dataUpdate["password"]=sha1($password);
           
           self::registerOrUpdate($dataUpdate);

           Mail::sendMail($to,$subject,$from,$template,$data);

       }

    }

    public static function login(){

        $equalUser=self::equalField("usuario",$request["user"]);
        $equalPassword=self::equalField("contrasena",sha1($request["password"]));

        if (!$equalUser) {
            $response["boolean"]=false;
            $response["message"]='El usuario no existe';
            echo json_encode($response);
            return $response;
        }else if($equalPassword) {
            $response["boolean"]=false;
            $response["message"]='La contraseña no coincide';
            echo json_encode($response);
            return $response;
        }else{
            $response["boolean"]=true;
            $response["message"]='Datos correctos';
            echo json_encode($response);
            return $response;    
        }

    }

    public static function registerOrUpdate($data){

        $data=(is_empty($data)) ? $request : $data;

        $equalUser=self::equalField("usuario",$data["user"]);
        $equalEmail=self::equalField("correo",$data["email"]);

        if ($equalUser) {
            $response["boolean"]=false;
            $response["message"]='El usuario ya existe';
            echo json_encode($response);
            return $response;
        }else if($equalEmail) {
            $response["boolean"]=false;
            $response["message"]='El correo ya existe';
            echo json_encode($response);
            return $response;
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

            }catch (queryException $e){ return self::elqouentCatch(); }

        }

    }

    private static function generatePassword($chars){

        $data = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz*!$%&=?¿^*_-.;><';
        return substr(str_shuffle($data), 0, $chars);

    }
    private static function elqouentCatch(){
        $response["boolean"]=false;
        $response["message"]='Intentalo de nuevo';
        echo json_encode($response);
        return $response;
    }

    private static function equalField($field,$value){
        return (empty(User::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>