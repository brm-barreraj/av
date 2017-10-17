<?php

use Core\Request;
use Core\Seccion;
use Models\ModuloModel as Modulo;

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

    $router->match('GET','/',function($url) use ($router){

        $url = ($url=="")?"/":$url;
        Seccion::make($url);
        $seccion = Seccion::$data;

        // Se guarda la url en array
        $urlArray = explode("/",$url);
        Request::setUrl($urlArray);
        
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

    if(isset($_COOKIE["9cnrjMgSKYJCwzjw"])){
        $modules = json_decode(requestHash('decode', $_COOKIE["9cnrjMgSKYJCwzjw"]));

        // Rutas de los módulos
        if($modules){   
            foreach ($modules as $module) { 
                if(is_array($module)){
                    $router->mount('/module', function() use ($router, $module) {
                        $router->mount('/'.$module[0]->nombre, function() use ($router,$module) {
                            if(is_dir('./modules/'.$module[0]->nombre.'/routes.php'))
                                include './modules/'.$module[0]->nombre.'/routes.php';
                        });
                    });   
                }else{                    
                    $router->mount('/module', function() use ($router, $module) {
                        $router->mount('/'.$module->nombre, function() use ($router,$module) {
                            if(is_dir('./modules/'.$module->nombre.'/routes.php'))
                                include './modules/'.$module->nombre.'/routes.php';
                        });
                    }); 
                }
            }            
        }
    }
        
});    
    
include './app/routes.php';

// Run it!
$router->run();
