function cumple(){
    var fecha=document.getElementById("fecha").value;
    var hoy = new Date();
    var mes = hoy.getMonth() + 1;
    document.getElementById("comentario").innerHTML="Cumpleaños el: "+ fecha;
    if(fecha=mes){
        document.getElementById("comentario").innerHTML="Felicidades, tienes descuento";
    }
}