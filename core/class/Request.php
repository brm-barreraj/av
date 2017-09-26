<?php
namespace Core;
 
class Request{
    static $url = array();
    static $post = array();
    static $get = array();
    
    public static function get(){
        return self::$get;
    }
    
    public static function post(){
        return self::$post;
    }
    
    public static function url(){
        return self::$url;
    }
    
    public static function setUrl($data){
       self::$url = $data;
    }
    
    public static function setPost($data){
       self::$post = $data;
       unset($_POST);
    }
    
    public static function setGet($data){
       self::$get = ($data != null) ? $data : array() ;
       unset($_GET);
    }
}
 ?>
