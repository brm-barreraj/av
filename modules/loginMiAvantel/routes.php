<?php
$router->before('GET', 'user', 'Modules\loginMiAvantel\LoginMiAvantelModule@pruebaGet');
$router->post('user', 'Modules\loginMiAvantel\LoginMiAvantelModule@pruebaPost');