<?php
namespace Core;
 
class Mail{
  function __construct(argument){
    $reponse=array();
    $response["boolean"]=false;
    $response["message"]='Intentalo de nuevo';       
  }

  public static function sendMail($to,$subject,$from,$template,$data){
    
  // To send HTML mail, the Content-type header must be set
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   
  // Create email headers
  $headers .= 'From: '.$from."\r\n".
              'Reply-To: '.$from."\r\n" .
              'X-Mailer: PHP/' . phpversion();

  views()->assing("data",$data);

   $message = views()->fetch('admin/$template.html');
   
  // Sending email
  if(mail($to, $subject, $message, $headers)){

    $reponse=array();
    $response["boolean"]=true;
    $response["message"]='Intentalo de nuevo'; 
    echo json_encode($response);
    return $response;
  } else{
     echo json_encode($response);
     return $response;
  }

  }
}
 ?>
