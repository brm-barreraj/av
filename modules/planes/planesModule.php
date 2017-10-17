<?php
namespace Modules\planes;
use Core\Request as Request;
use Models\PlanModel as Plan;

class PlanesModule{
	static function index(){
		$tipoPlan = Request::url()[count(Request::url())-1];
		views()->assign("planes", Plan::where('tipoPlan',$tipoPlan)
				->join('seccion', 'plan.idSeccion', '=', 'seccion.id')
				->get()
				->toArray()
		);
	}
}
