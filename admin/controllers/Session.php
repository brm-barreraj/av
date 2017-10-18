<?php
namespace ControllersAdmin;

use Models\sesionModel as SessionModel;
use Illuminate\Database\QueryException as queryException;

class Session{

    static private $response=array(),$request;

    function __construct(){
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear una sesión
    public static function create($data){

        try{

            $session = new SessionModel;
            $session->idUsuario=$data["idUser"];
            $session->datos=$data["data"];
            $session->tiempo =$data["time"];
            $session->dns =$data["dns"];
            $session->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }
        return(self::$response);

    }

    //función para eliminar una sesión
    public static function delete($idUser){

        try{

            $session=SessionModel::where("idUsuario",$idUser);
            $session->delete();
            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        return(self::$response);

    }

    //Función para eliminar las sesiones antiguas
    public static function deleteOldSessions($old) {
        $old = $old - 1200;
        $result = SessionModel::where('time', '<', $old)->delete();
        return $result;
    }

    //función para editar una sesión
    public static function update($idUser){

        try{

            $session = sessionModel::find($idUser);
            $session->tiempo = time();
            $session->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }
        
        return(self::$response);

    }

    //Retorna un campo o un registro completo, el campo de consulta debe ser unique
    public static function getByUnique($field,$value){
        $session=sessionModel::where($field,$value)->first();
        $session=empty($session) ? $session : $session->toArray();
        return $session;   
    }


    //Retorna una repuesta positiva si existe el campo
    public static function fieldExists($field,$value){
        return (empty(SessionModel::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>