//JQUERY

$(document).ready(function(){   //Comienzo JQuery
    
// Hace aumente el tamaño del párrafo, al pasar el ratón por el footer.
    
    $("footer").hover(function(){
        $(this).css("fontSize", 20)    
    });
    
        
}); //Fin

//JAVASCRIPT

//Muestra la hora completa
function startTime(){ 
    
today=new Date(); 
h=today.getHours(); 
m=today.getMinutes();
s=today.getSeconds();
m=checkTime(m); s=checkTime(s);
    
    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;

    t=setTimeout('startTime()',500);

} 

//si solo tiene una cifra añade un cero delante
function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }return i;
}
    //Ejecuta ambas funciones una vez se ha cargado por completo la página.
    window.onload=function(){
        startTime();
        fecha();
                        
} 
    


//Muestra el dia mes y año en el que estamos
function fecha(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f = new Date();
    var d = f.getDate();
    var m = meses[f.getMonth()];
    var a = f.getFullYear();

    document.getElementById('fecha').innerHTML = d + " de " + m  + " de " + a ;
    
}

