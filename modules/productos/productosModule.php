<?php
namespace Modules\productos;
use Models\ProductoModel as Producto;

class ProductosModule{
	static function index(){		
		views()->assign("productos", Producto::join('seccion', 'producto.idSeccion', '=', 'seccion.id')
				->select(
					"producto.id",
					"producto.idSeccion",
					"producto.nombre",
					"producto.precio",
					"producto.imagenes",
					"producto.descripcion",
					"producto.destacado",
					"seccion.titulo",
					"seccion.ruta"					
				)
				->get()
				->toArray()
		);
	}
}
