<?php
namespace ControllersAdmin;
use ControllersAdmin\ProfileFunction as Profile;
use ControllersAdmin\UserFunction as User;
use Core\Request as Request;

class UserShow{

    static private $request;

    function __construct(){
        self::$request=Request::get();
    }

    function showLogin(){
        views()->display('admin/log-in.html');
    }

    function showCreateUser(){
        views()->assign("profiles",Profile::get());
        views()->display('admin/create-user.html');
    }

    function showForgetData(){
        views()->display('admin/forget-data.html');
    }

    function showUpdateUser(){
        views()->assign("profiles",Profile::get());
        views()->assign("user",User::getByUnique("usuario",self::$request["user"]));
        views()->display('admin/update-user.html');
    }

    function showUsers(){
        views()->assign("users",User::get());
        views()->display('admin/users.html');
    }
}
?>