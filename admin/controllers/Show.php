<?php
namespace ControllersAdmin;
use ControllersAdmin\Profile as Profile;
use ControllersAdmin\User as User;
use ControllersAdmin\File as File;
use ControllersAdmin\Sign as Sign;
use ControllersAdmin\Module as Module;
use ControllersAdmin\Content as Content;
use Core\Request as Request;

class Show{

    static private $request;

    function __construct(){
        self::$request=Request::get();
    }

    function login(){
        views()->display('admin/sign/log-in.html');
    }

    function forgetData(){
        views()->display('admin/sign/forget-data.html');
    }

    function createUser(){
        views()->assign("profiles",Profile::get());
        views()->display('admin/user/create-user.html');
    }

    function profile(){
        views()->display('admin/user/profile.html');
    }

    function updateUser(){
        views()->assign("profiles",Profile::get());
        views()->assign("user",User::getByUnique("usuario",self::$request["user"]));
        views()->display('admin/user/update-user.html');
    }

    function users(){
        views()->assign("users",User::get());
        views()->display('admin/user/users.html');
    }

    function createFile(){
        views()->display('admin/file/create-file.html');
    }

    function updateFile(){
        views()->assign("file",File::getByUnique("id",self::$request["id"]));
        views()->display('admin/file/update-file.html');
    }

    function files(){
        views()->assign("files",File::get());
        views()->display('admin/file/files.html');
    }


    function createModule(){

        //Se leen las carpetas que esta en el directorio de modulos, esto para evitar que se creen modulos que no existen
        $dirs = array_filter(glob('modules/*'), 'is_dir');
        $modules=array();
        foreach ($dirs as $key => $value) {
            $value=explode("/", $value);
            array_push($modules, $value[1]);
        }
        views()->assign("modules",$modules);
        views()->display('admin/module/create-module.html');
    }

    function updateModule(){
        views()->assign("module",Module::getByUnique("id",self::$request["id"]));
        views()->display('admin/module/update-module.html');
    }

    function configurateModule(){
        
        //para cada uno de los modulos exitira un html para su repectiva configuración
        //se ejecuta la función preview del modulo
        call_user_func( array( "\Modules\\".self::$request["name"]."\\".self::$request['name'].'Module' , 'preview' ) );

        views()->assign("module",self::$request["name"]);
        views()->display('admin/module/configurate-module.html');
    }

    function modules(){
        views()->assign("modules",Module::get());
        views()->display('admin/module/modules.html');
    }


    function createMenu(){
        views()->display('admin/menu/create-menu.html');
    }

    function updateMenu(){
        views()->assign("fhather",self::$request["id"]);
        views()->display('admin/menu/update-menu.html');
    }

    function menus(){
        views()->assign("menus",Menu::getFathers());
        views()->display('admin/menu/menus.html');
    }

    function sons(){
        views()->assign("sons",Menu::getSons());
        views()->display('admin/menu/sons.html');
    }


    function createContent(){
        views()->display('admin/content/create-content.html');
    }

    function updateContent(){
        views()->assign("content",Content::getByUnique("id",self::$request["id"]));
        views()->display('admin/content/update-content.html');
    }

    function contents(){
        views()->assign("contents",Content::get());
        views()->display('admin/content/contents.html');
    }



}
?>