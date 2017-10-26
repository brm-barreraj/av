<?php
namespace ControllersAdmin;

use Models\contenidoxseccionModel as ContentSectionModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class ContentSection{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un registro
    public static function create($content,$section,$name,$order){
 
        try{
            $contentsection = ContentSectionModel::updateOrCreate(
                ['idContenido' => $content, 'idSeccion' => $section],
                ['nombre' => $name, 'orden' => $order]
            );
            $contentsection->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }
    }

    //función para eliminar un registro
    public static function delete(){

        try{

            $section = ContentSectionModel::find(self::$request["id"]);
            $section->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Se elimino';

        }catch (queryException $e){ self::$response["catch"]=$e; }
    }

}
?>