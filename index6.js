function iniciar(){
    var boton=document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }
    function nuevoitem(){
    var clave=document.getElementById('clave').value;
    var valor=document.getElementById('texto').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('clave').value='';
    document.getElementById('texto').value='';
    }
    function mostrar(){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
    }
    }
    window.addEventListener('load', iniciar, false);
    function elimina()
    {
    
        if(confirm('Está Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }

    var total;
    function califica()
    {var total=0;
    	for (var x=1;x<=4;x++)
    	{
        var res=0;
        var nom="r"+x;
        var resul=document.getElementsByName(nom);
        for(var i=0;i<resul.length;i++)
        {
            if(resul[i].checked==true)
                res=parseInt(resul[i].value);
        }
        total=total+res;
        document.getElementById("total").innerHTML="Puntos obtenidos: "+total+" Puntos";
        }
        if(total==20)
        	document.getElementById("comentario").innerHTML="!Muy bien¡";
        else
        	if(total==15)
        	document.getElementById("comentario").innerHTML="Regular...";
        else
        	if(total<=15)
        	document.getElementById("comentario").innerHTML="Qué pena";
    }

	function generar(){
		//Crear un objeto o instancia jsPDF
		var doc=new jsPDF();
        var total=0;
    	for (var x=1;x<=4;x++)
    	{
        var res=0;
        var nom="r"+x;
        var resul=document.getElementsByName(nom);
        for(var i=0;i<resul.length;i++)
        {
            if(resul[i].checked==true)
                res=parseInt(resul[i].value);
        }
        total=total+res;
        }

		//Definir el tamaño de la letra
		doc.setFontSize(40);
		//Color del texto
		doc.setTextColor(9,7,121);
		doc.text(40,20,"Resultados");
		doc.setTextColor(17,122,209);//Color en formaro RGB
		doc.setFontSize(30);
		doc.text(50,35,"Veamos que tal te fue...");//Ubicación
		doc.setTextColor(0,0,0);//Color en formaro RGB
		doc.setFontSize(20);
        if(total==20){
		doc.text(20,50,"20 puntos.Excelente. \r Genial amigo(a).Es un placer contar con alguien como tu");
        doc.text(20,70,"Manda este PDF con tu nombre de usuario y la fecha a alguno de los encargados de la página para ser parte del club");
        }
        else
            if(total==15){
		    doc.text(20,50,"15 puntos.Muy bien. \r Nada mal amigo(a).");
            doc.text(20,70,"Manda este PDF con tu nombre de usuario y la fecha a alguno de los encargados de la página para ser parte del club");
            }
        else
            if(total==10)
		    doc.text(20,50,"10 puntos.Regular. \r Necesitas un poco más para formar parte de el pequeño club de la página.");
        else
		doc.text(20,50,"5 puntos o menos.\r Si quieres formar parte del club, necesitas demostrar mejor cuanto sabes de los juegos :3.");

		var string=doc.output('datauristring');

		$('iframe').attr('src', string);
	}
    
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})