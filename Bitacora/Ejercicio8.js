/*Optimizacion global, con respecto a expresiones, ciclos; en el primer codigo
variables constantes que al definirlas podrian darle al codigo un mejor rendimiento,
se procede a agregar variables y asignarles un valor para hacer mas rapido su calculo.
*/ 
//Codigo no optimizado
let number = 10;
if (number >=10 && number <=100)
{console.log("El numero esta en el rango de 10 a 100\n")}
else
{console.log("El numero no esta en el rango de 10 a 100\n");}

let n = 0;
while (n <= 12){
   console.log(n); 
    n = n + 2;
}
let money =1;
for (let counter = 0; counter < 52; counter++)
{
    money +=counter;
}
console.log("\n"+money);
//Codigo optimizado
let number = 10;
var a = 10, b = 100;
if (number >=b && number <=b)
{console.log("El numero esta en el rango de 10 a 100\n")}
else
{console.log("El numero no esta en el rango de 10 a 100\n");}

let n = 0;
var c = 12;
var d = 2;
while (n <= c){
   console.log(n); 
    n  +=d;
}
let money =1;
for (let counter = 0; counter < 52; counter++)
{
    money +=counter;
}
console.log("\n"+money);