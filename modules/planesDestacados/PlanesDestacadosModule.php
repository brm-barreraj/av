<?php
namespace Modules\planesDestacados;
use Models\PlanModel as Plan;

class PlanesDestacadosModule{
	static function index(){
		$destacados = Plan::where('destacado',1)
			->join('seccion', 'plan.idSeccion', '=', 'seccion.id')
			->get()
			->toArray();
		views()->assign("destacados",$destacados);
	}

}
