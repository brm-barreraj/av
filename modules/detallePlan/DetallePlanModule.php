<?php
namespace Modules\detallePlan;
use Models\PlanModel as Plan;
use Core\Seccion;

class DetallePlanModule{
	static function index(){
		$plan = Plan::where('idSeccion',Seccion::$data->id)->get()->first();
		views()->assign("plan",$plan);
	}
}
