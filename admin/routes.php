<?php

ini_set("display_errors", 1);
error_reporting(E_ALL ^ E_DEPRECATED);

// Custom 404 Handler
$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo '404, route not found!';
});

//Rutas sesión
$router->match('GET', '/iniciar-sesion', 'ControllersAdmin\Show@login');
$router->match('GET', '/cerrar-sesion', 'ControllersAdmin\Sign@logOut');
$router->match('POST', 'log-in', 'ControllersAdmin\Sign@logIn');



$router->match('GET', '/olvide-mis-datos', 'ControllersAdmin\Show@forgetData');
$router->match('POST', 'forget-data', 'ControllersAdmin\Sign@forgetData');

//Rutas crud usuario
$router->match('GET', '/crear-usuario', 'ControllersAdmin\Show@createUser');
$router->match('POST', 'create-user', 'ControllersAdmin\User@create');

$router->match('GET', '/editar-usuario', 'ControllersAdmin\Show@updateUser');
$router->match('POST', 'update-user', 'ControllersAdmin\User@update');

$router->match('POST', 'delete-user', 'ControllersAdmin\User@delete');

$router->match('GET', '/usuarios', 'ControllersAdmin\Show@users');


//Rutas crud archivo
$router->match('GET', '/crear-archivo', 'ControllersAdmin\Show@createFile');
$router->match('POST', 'create-file', 'ControllersAdmin\File@create');

$router->match('GET', '/editar-archivo', 'ControllersAdmin\Show@updateFile');
$router->match('POST', 'update-file', 'ControllersAdmin\File@update');

$router->match('POST', 'delete-file', 'ControllersAdmin\File@delete');

$router->match('GET', '/archivos', 'ControllersAdmin\Show@files');


//Rutas crud menu
$router->match('GET', '/crear-menu', 'ControllersAdmin\Show@createMenu');
$router->match('POST', 'create-menu', 'ControllersAdmin\Menu@create');

$router->match('GET', '/editar-menu', 'ControllersAdmin\Show@updateMenu');
$router->match('POST', 'update-menu', 'ControllersAdmin\Menu@update');

$router->match('POST', 'delete-menu', 'ControllersAdmin\Menu@delete');

$router->match('GET', '/menus', 'ControllersAdmin\Show@menus');


?>