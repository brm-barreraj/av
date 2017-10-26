<?php
namespace ControllersAdmin;

use Models\menuxseccionModel as MenuSectionModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class MenuSection{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un registro
    public static function create($menu,$section,$name,$order){
 
        try{
            $menusection = MenuSectionModel::updateOrCreate(
                ['idMenu' => $menu, 'idSeccion' => $section],
                ['nombre' => $name, 'orden' => $order]
            );
            $menusection->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';

        }catch (queryException $e){ self::$response["catch"]=$e; }
    }

    //función para eliminar un registro
    public static function delete($menu,$section){

        try{

            $menusection = MenuSectionModel::where('idMenu',$menu)->where('idSeccion',$section);
            $menusection->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Se elimino';

        }catch (queryException $e){ self::$response["catch"]=$e; }

    }

}
?>