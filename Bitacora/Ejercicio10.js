/*Optimizacion de Costos, en el primer codigo podemos apreciar que se imprimiria uno por uno
cada numero hasta llegar al 100 y esto requiere tiempo y genera un costo, por lo tanto
se optimiza el codigo siendo lo mas ideal un ciclo para que imprima del 1 al 100,
teniendo asi, una serie de repeticiones.
*/ 
//Codigo no optimizado
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
// ... así hasta llegar a 100
//Codigo optimizado
var cont;
for ( cont=1; cont<=100; cont++) {
    console.log(cont);
  }