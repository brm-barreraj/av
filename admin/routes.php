<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

// Custom 404 Handler
$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo '404, route not found!';
});

// Define routes
$router->match('GET', '/iniciar-sesion', 'ControllersAdmin\UserController@showLogin');
$router->match('POST', 'login', 'ControllersAdmin\UserController@login');

$router->match('GET', '/registro', 'ControllersAdmin\UserController@showRegister');
$router->match('POST', 'register', 'ControllersAdmin\UserController@register');

$router->match('GET', '/olvide-mis-datos', 'ControllersAdmin\UserController@showForgetData');
$router->match('POST', 'forgetData', 'ControllersAdmin\UserController@forgetData');

$router->match('GET', '/editar-perfil', 'ControllersAdmin\UserController@showEditProfile');
$router->match('POST', 'editProfile', 'ControllersAdmin\UserController@editProfile');


?>