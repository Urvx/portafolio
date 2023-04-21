function suma(){
    var num1,num2,resultado;
    num1= document.getElementById("no").value;
    num2=document.getElementById("num").value;
    resultado=parseInt(num1)+parseInt(num2);   
    document.getElementById("result").innerHTML=resultado;
}
function resta(){
    var num1,num2,resultado;
    num1= document.getElementById("no").value;
    num2=document.getElementById("num").value;
    resultado=parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML=resultado;
}
function mult(){
    var num1,num2,resultado;
    num1= document.getElementById("no").value;
    num2=document.getElementById("num").value;
    resultado=parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML=resultado;
}
function div(){
    var num1,num2,resultado;
    num1= document.getElementById("no").value;
    num2=document.getElementById("num").value;
    resultado=parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML=resultado;
}
