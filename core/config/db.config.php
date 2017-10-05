<?php
use Illuminate\Database\Capsule\Manager as Capsule;
//Creamos un nuevo objeto de tipo Capsule
$capsule = new Capsule;
//Indicamos en el siguiente array los datos de configuración de la BD
$capsule->addConnection([
 'driver' =>'mysql',
 'host' => '127.0.0.1',
 'database' => 'avantel',
 'username' => 'root',
 'password' => '',
 'charset' => 'utf8',
 'collation' => 'utf8_unicode_ci',
 'prefix' => 'av_'
]);
 
$capsule->setAsGlobal();

//Y finalmente, iniciamos Eloquent
$capsule->bootEloquent();

