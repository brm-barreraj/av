<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

// Custom 404 Handler
$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo '404, route not found!';
});

// Define routes
$router->match('GET', '/iniciar-sesion', 'ControllersAdmin\UserShow@showLogin');
$router->match('POST', 'login', 'ControllersAdmin\UserFunction@login');

$router->match('GET', '/registro', 'ControllersAdmin\UserShow@showRegister');
$router->match('POST', 'register', 'ControllersAdmin\UserFunction@register');

$router->match('GET', '/olvide-mis-datos', 'ControllersAdmin\UserShow@showForgetData');
$router->match('POST', 'forgetData', 'ControllersAdmin\UserFunction@forgetData');

$router->match('GET', '/editar-perfil', 'ControllersAdmin\UserShow@showEditProfile');
$router->match('POST', 'editProfile', 'ControllersAdmin\UserFunction@editProfile');


?>