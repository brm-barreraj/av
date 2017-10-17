<?php
	namespace ControllersAdmin;

	class ManageSession {

		//Configuracion inicial para las sessiones
		public static function start_session($session_name, $secure) {
			$httponly = true;

			$session_hash = "sha512";

			if(in_array($session_hash, hash_algos())){
				ini_set('session.hash_public static function', $session_hash);
			}

			ini_set('session.hash_bits_per_character', 5);
			ini_set('session.user_only_cookies', 1);

			$cookieParams = session_get_cookie_params();

			session_set_cookie_params(
				$cookieParams["lifetime"],
				$cookieParams["path"],
				$cookieParams["domain"],
				$secure,
				$httponly);

			session_name($session_name);

			session_start();

			session_regenerate_id(true);
		}

		//Encripta los datos de la session
		public static function encriptSession($data, $key) {
			$salt = 'cH!swe!retReGu7W6bEDRup7usuDUh9THeDhs642CHeGE*ewr4n39=E@rAsp7c-Ph@pH';
			$key = substr(hash('sha256', $salt.$key.$salt), 0, 32);

			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
			$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
			$encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $key, $data, MCRYPT_MODE_ECB, $iv));

			return $encrypted;
		}

		//Desencripta los datos de la session
		public static function decryptSession($data, $key) {
			$salt = 'cH!swe!retReGu7W6bEDRup7usuDUh9THeDhs642CHeGE*ewr4n39=E@rAsp7c-Ph@pH';
			$key = substr(hash('sha256', $salt.$key.$salt), 0, 32);

			$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
			$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
			$decrypted = mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $key, base64_decode($data), MCRYPT_MODE_ECB, $iv);
			$decrypted = rtrim($decrypted, "\0");

			return $decrypted;
		}

		//Devuelve la key para encriptar y desencriptar
		public static function callProtected() {
			$protected = '$f1nd3s3m0n4c00k13';
			return $protected;
		}

		//Obtiene el protocolo de red que se esta utilizando
		public static function site_protocol() {
			if(isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&  $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')  return $protocol = 'https://'; else return $protocol = 'http://';
		}

		//Guarda el registro de la session
		public static function write($id, $data) {
			$key = admController::getKey($id);
			$data = manageSession::encriptSession($data, $key);
			$result = admController::insertSession($id, $data, $key);

			return $result;
		}

		//Lee los datos de la session encriptada
		public static function read($id) {
			$data = admController::getDataUser($id);
			$key = admController::getKey($id);
			//printVar($data,'data getdatauser ');
			//printVar($key,'key');
			$data = manageSession::decryptSession($data,$key);
			//printVar($data,'data decryted ');
			return $data;
		}

		//Termina la session
		public static function destroy($id) {
			$result = admController::deleteSession($id);
			foreach ($_COOKIE as $key => $value) {
				unset($value);
				$_COOKIE[$key]="";
				setcookie($key, null, time() - 3600,'/');
			}
		}

		//Crea una session nueva
		public static function createSession($user_id) {
			$protected = ManageSession::callProtected();
			$protocol = ManageSession::site_protocol();
			if($protocol == "https://"){
				$secure=true; 
				$httponly=true;
			}else{
				$secure=false;
				$httponly=true;
			}

			$data = $user_id."~".$_SERVER['SERVER_NAME'].'~32489';
			//printVar($data,'datos a user id ~ SERVERNAME ~ 32489');
			$userSession = admController::getSession($user_id);
			if($userSession["id"] == "") {
				$createSession = ManageSession::write($user_id, $data, $_SERVER['SERVER_NAME']);
			} else {
				$createSession = $data;
			}
			$createCookieU = ManageSession::start_session('ywd_usu', true);
			$cookieData = ManageSession::encriptSession($user_id, $protected);

			/*Se crea cookie de usuario*/
			setcookie('ywd_fr',$cookieData, time() + 1200, '/');
			setcookie('ywd_usu', $createSession, time() + 1200, '/');
		}

		//Reinicia la session 
		public static function restartSession() {
			$protected = ManageSession::callProtected();
			$idUser = ManageSession::decryptSession($_COOKIE['ywd_fr'],$protected);
			$dataSession = admController::updateSession($idUser);
			admController::deleteOldSessions(time());
			$cookieData = ManageSession::encriptSession($idUser, $protected);
			setcookie('ywd_fr',$cookieData, time() + 1200, '/');
			setcookie('ywd_usu', $dataSession, time() + 1200, '/');
		}
	}
?>