<?php
namespace ControllersAdmin;

use Models\contenidoModel as ContentModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class content{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un contenido
    public static function create(){

        try{

            $content = new ContentModel;
            $content->nombre =self::$request["name"];
            $content->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para eliminar un contenido
    public static function delete(){

        try{

            $content = ContentModel::find(self::$request["id"]);
            $content->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un contenido
    public static function update(){

        try{

            $content = ContentModel::find(self::$request["id"]);
            $content->nombre =self::$request["name"];
            $content->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //Retorna todos los contenidos
    public static function get(){
        $contents = ContentModel::get();
        $contents=(count($contents)==0) ? NULL : $contents->toArray();
        return $contents;   
    }

    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $content=ContentModel::where($field,$unique)->first();
        $content=(count($content)==0) ? NULL : $content->toArray();
        return $content;   
    }

    //Retorna una repuesta positiva si existe el campo
    public static function fieldExists($field,$value){
        return (empty(ContentModel::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>