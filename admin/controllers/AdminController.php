<?php
namespace ControllersAdmin;

use Models\sesionModel as SesionModel;

class Seion {

	//Valida que el registro de la session este registrada
	public static function getSession($id) {
		$sessionUser = SesionModel::select("id")->where("idUsuario", "=", $id)->first();
		return $sessionUser["attributes"];
	}

	//Obtiene la key de la sesion y si no esta guardada se crea una nueva
	public static function getKey($id){
		$session_key = SesionModel::select("llave")->where('idUsuario', '=', $id)->first();
		if($session_key){
			return $session_key['attributes'];
		} else  {
			$random_key = hash('sha512', uniqid(mt_rand(1, mt_getrandmax()), true));
			return $random_key;
		}
	}

	//Bbtiene la data de la sesion guardada
	public static function getDataUser($id) {
		$dataUser = SesionModel::select("data")->where('idUsuario', '=', $id)->first();
		return $dataUser['attributes'];
	}

	//Inserta el registro de la sesion en la base de datos
	public static function insertSession($id, $data, $key) {
		$idUser = SesionModel::insertGetId(['idUsuario' => $id,
			'datos' => $data,
			'llave' => $key,
			'tiempo' => time(),
			'dns' => $_SERVER["SERVER_NAME"],
			]);
		return $data;
	}

	//Actualiza la sesion
	public static function updateSession($id) {
		SesionModel::where('idUsuario', $id)->update(['tiempo' => time()]);
		$data = SesionModel::select("data")->where('idUsuario', "=",$id)->first();
		return $data;
	}

	//Elimina la sesion
	public static function deleteSession($id) {
		$result = SesionModel::where('idUsuario', '=', $id)->delete();
		return $result;
	}

	//Eimina las sesiones antiguas
	public static function deleteOldSessions($old) {
		$old = $old - 1200;
		$result = SesionModel::where('tiempo', '<', $old)->delete();
		return $result;
	}
}
?>