<?php

use Core\Request;
use Core\Seccion;



// Create Router instance
$router = new \Bramus\Router\Router();
    
$router->mount('/admin', function() use ($router) {
    include './admin/routes.php';
});

/*
function rutas($r1,$r2=null,$r3=null,$r4=null){

    if ($r2 !=null && $r3 != null && $r4 != null) {
        $rutas=array($r1."/".$r2."/".$r3."/(.*)",$r1."/".$r2."/".$r3."/".$r4);
    }elseif ($r2 !=null && $r3 != null) {
        $rutas=array($r1."/".$r2."/(.*)",$r1."/".$r2."/".$r3);
    }elseif ($r2 !=null) {
        $rutas=array($r1."/(.*)",$r1."/".$r2);
    }else{
        $rutas=array($r1);
    }
    
    $ruta = SeccionModel::whereIn("ruta",$rutas)->first();
    $ruta = (is_object($ruta) && count($ruta) > 0) ? $ruta->toArray() : false;
    
    if (isset($ruta['controlador']) && $ruta['controlador'] != "" && isset($ruta['accion']) && $ruta['accion'] != "") {
        $dataInput = array();
        //$dataInput
        Input::setData($dataInput);
        //Controllers\$ruta['controlador']->$ruta['accion'];
        $controlador = "Controllers\\".ucwords($ruta['controlador'])."Controller";
        $accion = $ruta['accion'];
        $method = $controlador."@".$accion;
        $object = new $controlador();
        $object->$accion();
    }
    printVar($ruta);
}
$router->match('GET', '(.*)/(.*)/(.*)', function($r1, $r2, $r3) { 
    rutas($r1,$r2,$r3);
});

$router->match('GET', '(.*)/(.*)', function($r1, $r2) { 
    rutas($r1,$r2);
});

$router->match('GET', '(.*)', function($r1) { 
    rutas($r1);
});
*/

$router->match('GET', '(.*)', function($url) { 
    Seccion::make($url);
    $seccion = Seccion::$data;
     
    // Se guarda la url en array
    $urlArray = explode("/",$url);
    Request::setUrl($urlArray);
    // Se guarda el arreglo de POST
    Request::setPost($_POST);
    // Se guarda el arreglo de GET
    Request::setGet($_GET);

    if (isset($seccion->controlador) && $seccion->controlador != "" && isset($seccion->accion) && $seccion->accion != "") {
        $controlador = "Controllers\\".ucwords($seccion->controlador)."Controller";
        $accion = $seccion->accion;
        $object = new $controlador();
        $object->$accion();
    }else{
        Seccion::show();
    }
    
});    
    

// Include Modules
$router->mount('/module', function() use ($router) {
    $router->mount('/productos', function() use ($router) {
        $router->match('GET', 'user', function(){
            echo"Sirvios";
        });
    });
});


include './app/routes.php';

// Run it!
$router->run();
?>