<?php
namespace Modules\detallePlan;
use Models\PlanModel as Plan;
use Core\Seccion;
use Models\CaracteristicasPlanProductoModel as CaracteristicasPlanProducto;

class DetallePlanModule{
	static function index(){
		$plan = Plan::where('idSeccion',Seccion::$data->id)->get()->first();
		$caracteristicas = CaracteristicasPlanProducto::where('idPlan',$plan->id)->get();
		views()->assign(compact(['plan','caracteristicas']));
	}

	static function preview(){
		$plan = Plan::get()->first();
		$caracteristicas = CaracteristicasPlanProducto::where('idPlan',$plan->id)->get();
		views()->assign(compact(['plan','caracteristicas']));
	}
}
