/*Optimizacion global, el primer codigo no tiene definido el orden de los operandos,
el segundo ya corrige esa parte y obtenemos un codigo mas eficiente en tiempo de ejecucion
y en el espacio de memoria.
*/ 
//Codigo no optimizado
var B,A,D,C;
B=2*A+(A=c*d);
Console.log("Valor = ",B);
//Codigo optimizado
var A,B,C,D,X;
A=C*D;
B=2*A;
X= A+B;
Console.log("Valor = ",X);