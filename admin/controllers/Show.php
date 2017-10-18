<?php
namespace ControllersAdmin;
use ControllersAdmin\Profile as Profile;
use ControllersAdmin\User as User;
use ControllersAdmin\File as File;
use ControllersAdmin\Sign as Sign;
use ControllersAdmin\Module as Module;
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

    function modules(){
        views()->assign("modules",Module::get());
        views()->display('admin/module/modules.html');
    }

}
?>