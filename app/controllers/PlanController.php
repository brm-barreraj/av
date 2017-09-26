<?php
namespace Controllers;
use Models\PlanModel as PlanModel;
use Core\Request as Request;
use Core\Seccion;

class PlanController{
    // Ejemplo controller web
    function index(){
        $planes = PlanModel::get()->toArray();
        printVar($planes);
    }
    
    function get(){
        $data = Request::url();
        $plan = $data[1];
        printVar($plan);
        //printVar(Seccion::$data);
        
        //echo $id;
        echo"get Plan";
    }
}
?>