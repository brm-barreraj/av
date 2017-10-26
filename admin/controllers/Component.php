<?php
namespace ControllersAdmin;

use Core\Request as Request;
use ControllersAdmin\ModuleSection as ModuleSection;
use ControllersAdmin\ContentSection as ContentSection;
use ControllersAdmin\MenuSection as MenuSection;

class Component{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un seccion
    public static function create(){
        
        foreach (self::$request['data'] as $key => $value) {
            
            $object=explode("&", $value);
            $type=$object[0];
            $component=$object[1];
            $name=$object[2];
            $section=$object[3];
            $order=$key;

            switch ($type) {
                case 'menu':
                    MenuSection::create($component,$section,$name,$order);
                break;
                case 'content':
                    ContentSection::create($component,$section,$name,$order);
                break;
                case 'module':
                    ModuleSection::create($component,$section,$name,$order);
                break;
            }
        }
    }

    //función para eliminar un seccion
    public static function delete(){
        foreach (self::$request['data'] as $key => $value) {
            
            $object=explode("&", $value);
            $type=$object[0];
            $component=$object[1];
            $section=$object[3];

            switch ($type) {
                case 'menu':
                    MenuSection::delete($component,$section);
                break;
                case 'content':
                    ContentSection::delete($component,$section);
                break;
                case 'module':
                    ModuleSection::delete($component,$section);
                break;
            }
        }
    }

}
?>