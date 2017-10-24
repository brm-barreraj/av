<?php
namespace ControllersAdmin;

use Models\menuModel as MenuModel;
use Core\Request as Request;
use Illuminate\Database\QueryException as queryException;

class Menu{

    static private $response=array(),$request;

    function __construct(){
        self::$request=Request::post();
        self::$response["boolean"]=false;
        self::$response["message"]='Intentalo de nuevo';        
        self::$response["catch"]='';       
    }

    //función para crear un menu
    public static function create(){


        try{

            $menu = new MenuModel;
            $menu->texto=self::$request["text"];
            $menu->idPadre=self::$request["fhater"];
            $menu->enlace =self::$request["link"];
            $menu->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Registro exitoso';
            self::$response["id"]=$menu->id;

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para eliminar un menu
    public static function delete(){

        try{

            $menu = MenuModel::find(self::$request["id"]);
            $menu->delete();

            self::$response["boolean"]=true;
            self::$response["message"]='Se elimino el menu';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);

    }

    //función para editar un menu
    public static function update(){

        try{

            $menu = MenuModel::find(self::$request["id"]);
            $menu->texto=self::$request["text"];
            $menu->enlace =self::$request["link"];
            $menu->orden =self::$request["order"];
            $menu->save();

            self::$response["boolean"]=true;
            self::$response["message"]='Los datos fueron actulizados';

        }catch (queryException $e){ self::$response["catch"]=$e; }

        echo json_encode(self::$response);
        
    }

    /*public static function createTree(){
        $father=self::getByUnique("id",self::$request["id"]);

        $tree  = "[{";
        $tree .= "description: '".$father['texto']."',";
        $tree .= "children: [";
        $tree .= self::tree(self::$request["id"]);
        $tree .= "]}]";
        header('Content-Type: application/json');
        echo json_encode($tree);
    }

    private static function tree($idFather){
        $sons=self::getSons($idFather);
        $tree="";
        if(!empty( $sons ))
        {
            foreach ($sons as $key => $value) {
                $tree .= "{description: '".$value["texto"]."',";
                if (self::getSons($value["id"])!=NULL) {
                    $tree .= "children: [";
                    $tree .= self::tree($value["id"]);
                    $tree .= "]},";
                }else{
                    $tree .= "children: []},";
                }
         
            }
        }

        return substr($tree, 0, -1);
    }*/

    public static function createTree(){
        
        $father=self::getByUnique("id",self::$request["id"]);

        $tree = array();
        $tree[] =array(
            'description' => $father['texto'],
            'children' => self::tree(self::$request["id"])
        );

        header('Content-Type: application/json');
        echo json_encode($tree);
    }

    private static function tree($idFather){
        $tree= array();
        if(!empty( self::getSons($idFather) ))
        {
            foreach (self::getSons($idFather) as $key => $value) {
                $tree[] =array(
                    'description' => self::createItem($value["id"],$value["texto"],$value["enlace"],$value["orden"]),
                    'children' => self::tree($value["id"]) 
                );
            }
        }
        return $tree;
    }

    private static function createItem($id,$text,$link,$order){
        $item="";
        $item.="<form action='#' method='post' id='item-".$id."'>";
        $item.="<input type='hidden' name='id' value='".$id."'>";
        $item.="<input type='text' name='text' value='".$text."'>";
        $item.="<input type='text' name='link' value='".$link."'>";
        $item.="<input type='text' name='order' value='".$order."'>";
        $item.="<button data-id='".$id."' class='update-item'>Editar</button>";
        $item.="<button data-id='".$id."' class='delete-item'>Eliminar</button>";
        $item.="</form>";
        return $item;
    }

    //Retorna los registros padres, que es el nombre de cada menu
    public static function getFathers(){
        $fhaters = MenuModel::where("idPadre",NULL)->get();
        $fhaters=(count($fhaters)==0) ? NULL : $fhaters->toArray();
        return $fhaters;   
    }

    //Retorna los registros hijos, que son los items de cada menu
    public static function getSons($idFather){
        $sons = MenuModel::where("idPadre",$idFather)->orderBy("orden","ASC")->get();
        $sons=(count($sons)==0) ? NULL : $sons->toArray();
        return $sons;   
    }

    //Retorna un campo o un registro completo, según un campo que tenga atributo unique en la base de datos
    public static function getByUnique($field,$unique){
        $menu=MenuModel::where($field,$unique)->first();
        $menu=(count($menu)==0) ? NULL : $menu->toArray();
        return $menu;   
    }
}
?>