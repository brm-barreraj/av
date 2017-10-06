<?php
	$router->before('GET', 'user', 'Modules\algo\AlgoModule@pruebaGet');
	$router->post('user', 'Modules\algo\AlgoModule@pruebaPost');