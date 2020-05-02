/*Optimizacion de mirilla, en el primer codigo no tiene un flujo eficiente en ciclo y su rutina
y tiene expresiones comunes, en el segundo codigo se aplica un cotinue para el flujo del programa
y elimina las expresiones comunes definiendo variables.
*/ 
//Codigo no optimizado
for (x=1; x<10;x++)
{
    if(x==5)continue;
    console.log(x);
}
//Codigo no optimizado
var x;
var a = 1, b = 10, c = 5;
for (x= a; x<b;x++)
{
    if(x==c)continue;
    console.log(x);
}