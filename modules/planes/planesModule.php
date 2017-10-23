<?php
namespace Modules\planes;
use Core\Request as Request;
use Models\PlanModel as Plan;

class PlanesModule{
	static function index(){
		$tipoPlan = Request::url()[count(Request::url())-1];
		views()->assign("planes", Plan::where('tipoPlan',$tipoPlan)
			->where('plan.estado','A')
			->join('seccion', 'plan.idSeccion', '=', 'seccion.id')
			->select(
				"plan.id",
				"plan.idSeccion",
				"plan.nombre",
				"plan.descripcion",
				"plan.precio",
				"plan.datos",
				"plan.descDatos",
				"plan.voz",
				"plan.descVoz",
				"plan.mensajes",
				"plan.descMensajes",
				"plan.destacado",
				"plan.tipoPlan",
				"plan.vigencia",
				"seccion.titulo",
				"seccion.ruta"					
			)
			->get()
			->toArray()
		);
	}

	static function preview(){
		views()->assign("planes", Plan::where('plan.estado','A')
				->join('seccion', 'plan.idSeccion', '=', 'seccion.id')
				->select(
					"plan.id",
					"plan.idSeccion",
					"plan.nombre",
					"plan.descripcion",
					"plan.precio",
					"plan.datos",
					"plan.descDatos",
					"plan.voz",
					"plan.descVoz",
					"plan.mensajes",
					"plan.descMensajes",
					"plan.destacado",
					"plan.tipoPlan",
					"plan.vigencia",
					"seccion.titulo",
					"seccion.ruta"					
				)
				->get()
				->toArray()
		);
	}
}
