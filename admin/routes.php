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
$router->match('POST', 'log-in', 'ControllersAdmin\Sesion@login');

$router->match('GET', '/crear-usuario', 'ControllersAdmin\UserShow@showCreateUser');
$router->match('POST', 'create-user', 'ControllersAdmin\UserFunction@createUser');

$router->match('GET', '/olvide-mis-datos', 'ControllersAdmin\UserShow@showForgetData');
$router->match('POST', 'forget-data', 'ControllersAdmin\UserFunction@forgetData');

$router->match('GET', '/editar-usuario', 'ControllersAdmin\UserShow@showUpdateUser');
$router->match('POST', 'update-user', 'ControllersAdmin\UserFunction@updateUser');

$router->match('GET', '/usuarios', 'ControllersAdmin\UserShow@showUsers');

$router->match('POST', 'create-temporary-data', 'ControllersAdmin\Sesion@createTemporaryData');

$router->match('POST', 'delete-user', 'ControllersAdmin\UserFunction@deleteUser');


?>