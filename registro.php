<?php

$usuario = $_POST["usuario"];
$correo = $_POST["correo"];
$contrasenya = $_POST["contrasenya"];

//Enviar correo confirmación
$asunto = "Registro de usuario";
$mensaje = "Bienvenido te has registrado correctamente . \n" ;
$mensaje .= "Tu nombre de usuario es: .$usuario . \n" ;
$mensaje .= " Y tu contraseña es:  . $contrasenya .\n" ;

if(mail($correo, $asunto, $mensaje)){
    
    echo "Correo enviado correctamente";
    
    }else{
    
    echo "No se ha podido enviar el mensaje";
}
   
?>