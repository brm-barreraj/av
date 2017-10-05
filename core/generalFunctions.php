<?php
function processData($allData){
    if (isset($allData['data']) && isset($allData['error']) && isset($allData['nameView']) && isset($allData['tr'])) {
        if (isset($_GET['tr']) && $_GET['tr'] == "json" && $allData['tr'] == "json") {
           echo json_encode(array("data" => $allData['data'],"error"=>$allData['error']));
        }else if (isset($allData['nameView']) && $allData['nameView'] != "") {
            foreach($allData['data'] as $dataKey => $dataValue){
                views()->assign($dataKey, $dataValue);
            }
            views()->display($allData['nameView'].".html");
        }
    }else{
        echo"Para utilizar la función processData es necesario tener las siguientes variables 'data, error, nameView'";
    }
}

function requestHash($action, $string) {
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $secret_key = 'r3q!uEstH4s!-!';
    $secret_iv = 'Brm';

    // hash
    $key = hash('sha256', $secret_key);
    
    // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
    $iv = substr(hash('sha256', $secret_iv), 0, 16);

    if( $action == 'encode' ) {
        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
        $output = base64_encode($output);
    }
    else if( $action == 'decode' ){
        $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
    }

    return $output;
}

function printVar( $variable, $title = "" ){
    echo "<fieldset>";
    echo "<legend>$title</legend>";
    highlight_string("<?php\n". var_export($variable, true) . ";\n?>");
    echo "</fieldset>";
}

?>