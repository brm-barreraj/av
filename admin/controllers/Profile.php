<?php
namespace ControllersAdmin;

use Models\perfilModel as ProfileModel;

class Profile{

    function __construct(){
    }

    public static function get(){
        return ProfileModel::where("estado","A")->get()->toArray();
    }

}
?>