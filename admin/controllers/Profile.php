<?php
namespace ControllersAdmin;

use Models\adminperfilModel as Profile;

class Profile{

    function __construct(){
    }

    public static function get(){
        return Profile::where("estado","A")->get()->toArray();
    }

}
?>