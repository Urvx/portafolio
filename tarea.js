function suma(){
    var num1,num2,resultado;
    num1= prompt("Escribe un número","");
    num2=prompt("eScribe otro número","");
    resultado=parseInt(num1)+parseInt(num2);
    alert("La suma es "+resultado);
}
function resta(){
    var num1,num2,resultado;
    num1= prompt("Escribe un número","");
    num2=prompt("Escribe otro número","");
    resultado=parseInt(num1)-parseInt(num2);
    alert("La resta es "+resultado);
}
function mult(){
    var num1,num2,resultado;
    num1= prompt("Escribe un número","");
    num2=prompt("Escribe otro número","");
    resultado=parseInt(num1)*parseInt(num2);
    alert("La multiplicación es "+resultado);
}
function div(){
    var num1,num2,resultado;
    num1= prompt("Escribe un número","");
    num2=prompt("Escribe otro número","");
    resultado=parseInt(num1)/parseInt(num2);
    alert("La divisón es "+resultado);
}
function signo(){
    var num;
    num= prompt("Escribe un número","");
    if (parseInt(num)>0)
        alert("Es positivo");
    else
        alert("Es negativo");
}