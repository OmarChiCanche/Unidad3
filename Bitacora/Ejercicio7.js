/*Optimizacion Folding,en el primer codigo se puede ver una operacion que le resta tiempo al
codigo evaluando en tiempo de compilacion el resultado de una constante, por lo tanto en el
segundo codigo se optimiza y realiza los calculos para asi la operacion sea mas rapida
debido a que el valor del temporal se puede calcular "3-5-6+4" dando un "-4"
*/ 
//Codigo no optimizado
var operacion,A=1;
operacion = 3-(5+6)-A*10+4;
console.log("Resultado = ",operacion)
//Codigo optimizado 
var operacion, A=1, B=10;
var temp = -4
operacion = temp-(A*B);
console.log("Resultado = ",operacion)