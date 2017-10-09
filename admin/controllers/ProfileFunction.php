<?php
namespace ControllersAdmin;

use Models\adminperfilModel as Profile;
use Illuminate\Database\QueryException as queryException;

class ProfileFunction{

    function __construct(){
    }

    public static function get(){

        return Profile::get()->toArray();
    }

}
?>