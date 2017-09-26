<?php
namespace ControllersAdmin;
use Models\UserModel as User;
use Models\CellphoneUserModel as CellphoneUser;
use Models\PackageUserModel as PackageUser;


class UserController{
    // EJemplo controller web
    function getInfoUser($idUser){
        $cellphoneUser = CellphoneUser::get()->toArray();
        $packageUser = PackageUser::get()->toArray();
        
        $dataResponse = array(
            "cellphoneUser" => $cellphoneUser,
            "packageUser" => $packageUser
        );
        $error = 0;
        
        processData(array(
            "data" => $dataResponse,
            "error" => $error,
            "nameView" => "index"
        ));
    }
    
    // EJemplo controller mobile
    
    function validUser($email){
        echo"prueba".$id;
        $user = User::where('email',$email)->first();
        print_r($user->toArray());
    }
}
?>