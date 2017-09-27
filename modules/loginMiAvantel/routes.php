<?php
$router->before('GET', 'user', 'Modules\LoginMiAvantelModule@pruebaGet');
$router->post('user', 'Modules\LoginMiAvantelModule@pruebaPost');