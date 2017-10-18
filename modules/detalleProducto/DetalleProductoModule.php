<?php 
namespace Modules\detalleProducto;
use Models\ProductoModel as Producto;
use Core\Seccion;
use Models\CaracteristicasPlanProductoModel as CaracteristicasPlanProducto;

class DetalleProductoModule{
	static function index(){
		$producto = Producto::where('idSeccion',Seccion::$data->id)->get()->first();
		$caracteristicas = CaracteristicasPlanProducto::where('idProducto',$producto->id)->get();
		views()->assign(compact(['producto','caracteristicas']));
	}
}