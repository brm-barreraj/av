<?php
namespace ControllersAdmin;
use Admin\UserFunction as User;

class UserShow{

    //Display pages
    function showLogin(){
        views()->display('admin/login.html');

    }

    function showRegister(){
        views()->display('admin/register.html');

    }

    function showForgetData(){
        views()->display('admin/forget-data.html');

    }

    function showUpdateUser(){
        views()->display('admin/update-user.html');

    }
    
}
?>