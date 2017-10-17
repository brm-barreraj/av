<?php

ini_set("display_errors", 1);
error_reporting(E_ALL);

// Custom 404 Handler
$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo '404, route not found!';
});

// Define rutas sesión
$router->match('GET', '/iniciar-sesion', 'ControllersAdmin\Show@login');
$router->match('POST', 'log-in', 'ControllersAdmin\Sesion@login');

$router->match('GET', '/olvide-mis-datos', 'ControllersAdmin\Show@forgetData');
$router->match('POST', 'forget-data', 'ControllersAdmin\Sesion@forgetData');

$router->match('POST', 'create-temporary-data', 'ControllersAdmin\Sesion@createTemporaryData');

// Define rutas usuario
$router->match('GET', '/crear-usuario', 'ControllersAdmin\Show@createUser');
$router->match('POST', 'create-user', 'ControllersAdmin\User@create');

$router->match('GET', '/editar-usuario', 'ControllersAdmin\Show@updateUser');
$router->match('POST', 'update-user', 'ControllersAdmin\User@update');

$router->match('POST', 'delete-user', 'ControllersAdmin\User@delete');

$router->match('GET', '/usuarios', 'ControllersAdmin\Show@users');


// Define rutas archivos
$router->match('GET', '/crear-archivo', 'ControllersAdmin\Show@createFile');
$router->match('POST', 'create-file', 'ControllersAdmin\File@create');

$router->match('GET', '/editar-archivo', 'ControllersAdmin\Show@updateFile');
$router->match('POST', 'update-file', 'ControllersAdmin\File@update');

$router->match('POST', 'delete-file', 'ControllersAdmin\File@delete');

$router->match('GET', '/archivos', 'ControllersAdmin\Show@files');

?>