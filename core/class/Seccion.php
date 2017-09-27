<?php
namespace Core;
use Models\SeccionModel;
use Models\MenuModel;
use Models\ComponenteModel;
use Modules;
class Seccion{
    static public $data = null;
    private $menu = null;
    
    public static function show(){
        self::plantilla();
        self::menus();
        self::header();
        self::contenido();
        self::footer();
        views()->display("index.html");
    }
    
    public static function plantilla(){
        views()->assign("nombrePlantilla",lcfirst(self::$data->nombrePlantilla));
    }
    
    public static function header(){
        $menuHeader = array();
        views()->assign("menuHeader",$menuHeader);
    }
    
    public static function menus(){
        $idPlantilla = self::$data->idPlantilla;
        $this->menu = MenuModel::where('idPlantilla',$idPlantilla)->get();
        $this->menu = (is_object($menu) && count($menu) > 0) ? (object) $menu->toArray() : array();
    }
    
    public static function contenido(){
        Modules\LoginMiAvantelModule::index();
        $componentes = ComponenteModel::
            leftJoin('modulo', 'modulo.id', '=', 'componente.idModulo')
            ->get();
        $componentes = (is_object($componentes) && count($componentes) > 0) ? (object) $componentes->toArray() : array();
        views()->assign("componentes",$componentes);
    }
    
    public static function footer(){
        $menufooter = array();
        views()->assign("menufooter",$menufooter);
    }
    
    public static function make($url){
        $ruta = SeccionModel::
            join('plantilla', 'plantilla.id', '=', 'seccion.idPlantilla')
            ->where("ruta",$url)
            ->first();
        self::$data = (is_object($ruta) && count($ruta) > 0) ? (object) $ruta->toArray() : false;
    }
}
 ?>
