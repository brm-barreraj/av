<?php
namespace Modules\algo;
use Core\Request as Request;

class AlgoModule{
    // Ejemplo controller web
    function index(){
        echo json_encode(array("asd"=>"asd"));
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