<?php
namespace ControllersAdmin;
use ControllersAdmin\Profile as Profile;
use ControllersAdmin\User as User;
use ControllersAdmin\File as File;
use ControllersAdmin\Sign as Sign;
use Core\Request as Request;

class Show{

    static private $request;

    function __construct(){
        self::$request=Request::get();
    }

    function login(){
        views()->display('admin/log-in.html');
    }

    function forgetData(){
        views()->display('admin/forget-data.html');
    }


    function createUser(){
        views()->assign("profiles",Profile::get());
        views()->display('admin/create-user.html');
    }

    function updateUser(){
        views()->assign("profiles",Profile::get());
        views()->assign("user",User::getByUnique("usuario",self::$request["user"]));
        views()->display('admin/update-user.html');
    }

    function users(){
        views()->assign("users",User::get());
        views()->display('admin/users.html');
    }

    function createFile(){
        views()->display('admin/create-file.html');
    }

    function updateFile(){
        views()->assign("file",File::getByUnique("id",self::$request["id"]));
        views()->display('admin/update-file.html');
    }

    function files(){
        views()->assign("files",File::get());
        views()->display('admin/files.html');
    }

}
?>