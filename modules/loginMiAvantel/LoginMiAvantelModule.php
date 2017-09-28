<?php
namespace Modules\loginMiAvantel;
use Core\Request as Request;

class LoginMiAvantelModule{
    // Ejemplo controller web
    function index(){
        views()->assign("lmam_titulo","Login Mi avantel");
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