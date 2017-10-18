<?php
namespace Core;
 
class Secure{

  static private $salt,$key;

  function __construct(){
    self::$salt="aXZ?6PjrCk%vr^DV*ac4VW&Q7Tbe^dBpT+KmX7XLMEfC%g!eG5";
    self::$key="Gvjy**8@b9zA53*$rWgLb+Mr7=x#9?MZW^yz43r3Q?ZQCCNJvf";
  }

    public static function encrypt($data) {

        $encryptKey = substr(hash('sha256', self::$salt.self::$key.self::$salt), 0, 32);

        $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
        $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
        $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $encryptKey, $data, MCRYPT_MODE_ECB, $iv));

        return $encrypted;

    }

     public static function decrypt($data) {

      $decryptKey = substr(hash('sha256', self::$salt.self::$key.self::$salt), 0, 32);

      $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB);
      $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
      $decrypted = mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $decryptKey, base64_decode($data), MCRYPT_MODE_ECB, $iv);
      $decrypted = rtrim($decrypted, "\0");

      return $decrypted;

    }

}
?>
