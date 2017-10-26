<?php
namespace ControllersAdmin;

use Models\archivoModel as FileModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class File{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';        
    }

    //función para crear un archivo multimedia
    public static function create(){
        if (!empty($_FILES)) {
            try{
                $directorySeparator = DIRECTORY_SEPARATOR;
                $storeFolder = '_data';  
                $fileType=explode("/", $_FILES['file']['type']);
                $fileType=$fileType[1];
                $fileName="file-".self::getconsecutive().".".$fileType;
                $temporalFile = $_FILES['file']['tmp_name']; 
                $targetPath = dirname( __FILE__ ) . $directorySeparator. $storeFolder . $directorySeparator;
                $targetFile =  $targetPath.$fileName; 

                move_uploaded_file($temporalFile,$targetFile);

                $multimedia = new FileModel;
                $multimedia->consecutivo=self::getconsecutive();
                $multimedia->nombreArchivo=$fileName;
                $multimedia->subtitulo=substr($_FILES['file']['name'],0,10);
                $multimedia->descripcion =substr($_FILES['file']['name'],0,10);
                $multimedia->textoAlternativo =substr($_FILES['file']['name'],0,10);
                $multimedia->alineamiento ="C";
                $multimedia->tipo =$fileType;
                $multimedia->save();
                
                self::$response["boolean"]=true;
                self::$response["message"]='Imagen guardada';
                self::$response["size"]=getimagesize($targetFile);
                self::$response["url"]="/av/admin/controllers/_data/".$fileName;
                ;

            }catch (queryException $e){ self::$response["catch"]=$e; }
        }
        echo json_encode(self::$response);

    }

    //función para eliminar un archivo multimedia
    public static function delete(){

        try{

            $file = FileModel::where("nombreArchivo",self::$request["name"]);
            $file->delete();
            unlink('admin'.DIRECTORY_SEPARATOR.'controllers'.DIRECTORY_SEPARATOR.'_data'.DIRECTORY_SEPARATOR.self::$request["name"]);

            self::$response["boolean"]=true;
            self::$response["message"]='El archivo fue eliminado';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un archivo multimedia
    public static function update(){

        try{

            $file = FileModel::find(self::$request["id"]);
            $file->subtitulo=self::$request["subtitle"];
            $file->descripcion =self::$request["description"];
            $file->textoAlternativo =self::$request["alternativetext"];
            $file->alineamiento =self::$request["alignment"];

            $file->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //Retorna todos los archivos multimedia
    public static function get(){
        $files = FileModel::get()->whereIn('tipo',['jpg','png','jpeg','gif','svg']);
        $files=empty($files) ? $files : $files->toArray();
        return $files;   
    }

    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $file=FileModel::where($field,$unique)->first();
        $file=empty($file) ? $file : $file->toArray();
        return $file;   
    }

    //Retorna el consecutivo de la tabla para nombrar un archivo
    private static function getconsecutive(){
        $consecutive=FileModel::orderBy('consecutivo', 'DESC')->pluck("consecutivo")->first();
        $consecutive=($consecutive<=0) ? 0 : $consecutive+1;
        return $consecutive;
    }

}
?>