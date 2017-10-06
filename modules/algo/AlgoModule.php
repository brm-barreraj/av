<?php
namespace Modules\algo;
use Core\Request as Request;

class AlgoModule{
    // Ejemplo controller web
    static function index(){
        views()->assign("algo_titulo","Algo module");
    }

    function pruebaGet(){
    	$data = Request::get();
    	printVar($data);
    }

    function pruebaPost(){
    	$data = Request::post();
    	printVar($data);
    }
    
}
?>