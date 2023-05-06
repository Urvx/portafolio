function rfc(){
    var dato, dato2,dato3,dato4,res,res2,res4,res3,dato5,days;
    dato=document.getElementById("nombre").value;
    res=dato.substring(0,1);

    dato2=document.getElementById("ap").value;
    res2=dato2.substring(0,2);

    dato3=document.getElementById("am").value;
    res3=dato3.substring(0,1);

    dato4=document.getElementById("year").value;
    res4=dato4.substring(2,4);

    dato5=document.getElementById("mes").value;

    days=document.getElementById("day").value;

    val=res2+res3+res+res4+dato5+days;

    var vel=val.toUpperCase();
    document.getElementById("resultado").value=vel;
}
function rd(){
    var dato, dato2,dato3,dato4,res,res2,res4,res3,dato5,dato6;
    dato=document.getElementById("nombre").value;
    res=dato.substring(0,1);

    dato2=document.getElementById("ap").value;
    res2=dato2.substring(0,2);

    dato3=document.getElementById("am").value;
    res3=dato3.substring(0,1);

    dato4=document.getElementById("year").value;
    res4=dato4.substring(2,4);

    dato5=document.getElementById("mes").value;

    document.getElementById("resultado").value=dato5;
}