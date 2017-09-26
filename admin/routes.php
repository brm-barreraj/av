<?php
// Custom 404 Handler
$router->set404(function () {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo '404, route not found!';
});

// Define routes
$router->match('GET', 'asd', function() {
    views()->assign("name", "prueba admin");
    views()->display('admin/index.html');
});
?>