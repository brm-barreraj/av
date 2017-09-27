<?php

use Core\Request;
use Core\Seccion;



// Create Router instance
$router = new \Bramus\Router\Router();
    
$router->mount('/admin', function() use ($router) {
    include './admin/routes.php';
});
/*
$router->mount('(.*)', function() use ($router){
    echo"asd";
    $router->mount('/modules', function() use ($router){
        echo"asd";
        $router->get('/algo', function(){
            echo"Servicios";
        });
    });

});
*/


// Include Modules
/*$router->mount('/module', function() use ($router) {
    $nameModule = 'loginMiAvantel';
    $router->mount('/'.$nameModule, function() use ($router,$nameModule) {
        include './modules/'.$nameModule.'/routes.php';
    });
});
*/

$router->mount('(.*)', function() use ($router) {
    // Se guarda el arreglo de POST
    Request::setPost($_POST);
    // Se guarda el arreglo de GET
    Request::setGet($_GET);

    $router->match('GET','/',function($url){
        Seccion::make($url);
        $seccion = Seccion::$data;
        
        // Se guarda la url en array
        $urlArray = explode("/",$url);
        Request::setUrl($urlArray);
        
        //Sección administrable
        if (isset(Seccion::$data) && Seccion::$data) {
            if (isset($seccion->controlador) && $seccion->controlador != "" && isset($seccion->accion) && $seccion->accion != "") {
                $controlador = "Controllers\\".ucwords($seccion->controlador)."Controller";
                $accion = $seccion->accion;
                $object = new $controlador();
                $object->$accion();
            }else{
                //Sección administrable
                Seccion::show();
            }
        }
    });
    // Rutas de los módulos
    $router->mount('/module', function() use ($router) {
        $nameModule = 'loginMiAvantel';
        $router->mount('/'.$nameModule, function() use ($router,$nameModule) {
            include './modules/'.$nameModule.'/routes.php';
        });
    });
        
});    
    

include './app/routes.php';

// Run it!
$router->run();
?>