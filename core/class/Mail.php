<?php
namespace Core;
 
class Mail{
  
  function __construct(){
  }

  public static function sendMail($to,$subject,$from,$template,$data){
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
     
    // Create email headers
    $headers .= 'From: '.$from."\r\n".
                'X-Mailer: PHP/' . phpversion();

    views()->assign("data",$data);
    $message = views()->fetch('admin/'.$template.'.html');
     
    // Sending email
    return mail($to, $subject, $message, $headers);

  }
}
?>
