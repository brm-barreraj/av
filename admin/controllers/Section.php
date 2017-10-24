<?php
namespace ControllersAdmin;

use Models\contenidoModel as SectionModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class Section{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un contenido
    public static function create(){

        if(self::fieldExists("ruta",self::$request["route"])) {
            self::$response["message"]='La ruta ya existe';
        }else{

            try{

                $section = new SectionModel;
                $section->ruta =self::$request["route"];
                $section->descripcion =self::$request["description"];
                $section->estado =self::$request["state"];
                $section->save();

                self::$response["boolean"]=true;
                self::$response["message"]='Registro exitoso';

            }catch (queryException $e){ self::$response["catch"]=$e; }

        }


        echo json_encode(self::$response);

    }

    //función para eliminar un contenido
    public static function delete(){

        try{

            $section = SectionModel::find(self::$request["id"]);
            $section->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un contenido
    public static function update(){

        try{

            $section = SectionModel::find(self::$request["id"]);
            $section->contenido =self::$request["section"];
            $section->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //Retorna todos los contenidos
    public static function get(){
        $sections = SectionModel::get();
        $sections=(count($sections)==0) ? NULL : $sections->toArray();
        return $sections;   
    }

    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $section=SectionModel::where($field,$unique)->first();
        $section=(count($section)==0) ? NULL : $section->toArray();
        return $section;   
    }

    //Retorna una repuesta positiva si existe el campo
    public static function fieldExists($field,$value){
        return (empty(SectionModel::where($field, $value)->pluck($field)->toArray())) ? false:true;
    }
}
?>