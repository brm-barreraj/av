<?php

//ini_set("display_errors", 1);
//error_reporting(E_ALL ^ E_DEPRECATED);

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
$router->match('GET', '/perfil', 'ControllersAdmin\Show@profile');

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
$router->match('POST', 'get-files', 'ControllersAdmin\File@get');


//Rutas crud menu
$router->match('GET', '/crear-menu', 'ControllersAdmin\Show@createMenu');
$router->match('POST', 'create-menu', 'ControllersAdmin\Menu@create');

$router->match('GET', '/editar-menu', 'ControllersAdmin\Show@updateMenu');
$router->match('POST', 'update-menu', 'ControllersAdmin\Menu@update');

$router->match('POST', 'delete-menu', 'ControllersAdmin\Menu@delete');

$router->match('GET', '/menus', 'ControllersAdmin\Show@menus');
$router->match('POST', 'tree', 'ControllersAdmin\Menu@createTree');


//Rutas crud modulo
$router->match('GET', '/crear-modulo', 'ControllersAdmin\Show@createModule');
$router->match('POST', 'create-module', 'ControllersAdmin\Module@create');

$router->match('GET', '/editar-modulo', 'ControllersAdmin\Show@updateModule');
$router->match('POST', 'update-module', 'ControllersAdmin\Module@update');

$router->match('GET', '/configurar-modulo', 'ControllersAdmin\Show@configurateModule');
$router->match('POST', 'configurate-module', 'ControllersAdmin\Module@update');

$router->match('POST', 'delete-module', 'ControllersAdmin\Module@delete');

$router->match('GET', '/modulos', 'ControllersAdmin\Show@modules');


//Rutas para plan
$router->match('POST', 'outstanding', 'ControllersAdmin\Plan@outstanding');


//Rutas crud contenido
$router->match('GET', '/crear-contenido', 'ControllersAdmin\Show@createContent');
$router->match('POST', 'create-content', 'ControllersAdmin\Content@create');

$router->match('GET', '/editar-contenido', 'ControllersAdmin\Show@updateContent');
$router->match('POST', 'update-content', 'ControllersAdmin\Content@update');

$router->match('POST', 'delete-content', 'ControllersAdmin\Content@delete');

$router->match('GET', '/contenidos', 'ControllersAdmin\Show@contents');


//Rutas crud sección
$router->match('GET', '/crear-seccion', 'ControllersAdmin\Show@createSection');
$router->match('POST', 'create-section', 'ControllersAdmin\Section@create');

$router->match('GET', '/editar-seccion', 'ControllersAdmin\Show@updateSection');
$router->match('POST', 'update-section', 'ControllersAdmin\Section@update');

$router->match('GET', '/configurar-seccion', 'ControllersAdmin\Show@configurateSection');
$router->match('POST', 'configurate-section', 'ControllersAdmin\Section@configurate');

$router->match('POST', 'delete-section', 'ControllersAdmin\Section@delete');

$router->match('GET', '/secciones', 'ControllersAdmin\Show@sections');

//Rutas crud components
$router->match('POST', 'create-component', 'ControllersAdmin\Component@create');
$router->match('POST', 'update-component', 'ControllersAdmin\Component@update');
$router->match('POST', 'delete-component', 'ControllersAdmin\Component@delete');

?>