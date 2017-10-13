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
        Seccion::show();
        //printVar(Seccion::$data);
        
        // /echo $plan;
        echo"get Plan";
    }
}
?>