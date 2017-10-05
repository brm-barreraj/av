<?php
namespace ControllersAdmin;

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

    function showEditProfile(){
        views()->display('admin/edit-profile.html');

    }
    
}
?>