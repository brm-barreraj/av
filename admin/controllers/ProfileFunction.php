<?php
namespace ControllersAdmin;

use Models\adminperfilModel as Profile;

class ProfileFunction{

    function __construct(){
    }

    public static function get(){
        return Profile::where("estado","A")->get()->toArray();
    }

}
?>