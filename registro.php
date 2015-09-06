<?php
//Obtiene los datos del formulario
$usuario = $_POST["usuario"];
$correo = $_POST["correo"];
$contrasenya = $_POST["contrasenya"];


$asunto = "Registro de usuario";
$mensaje = "Bienvenido te has registrado correctamente . \n" ;
$mensaje .= "Tu nombre de usuario es: .$usuario . \n" ;
$mensaje .= " Y tu contraseña es:  . $contrasenya .\n" ;

//Envia correo confirmación
if(mail($correo, $asunto, $mensaje)){
    
    echo "Correo enviado correctamente";
    
    }else{
    
    echo "No se ha podido enviar el mensaje";
}
   
?>
