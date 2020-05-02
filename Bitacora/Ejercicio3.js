/*
En el codigo no optimizado cada nuevo objeto se declara a partir del array ocupando
memoria y de igual forma al momento de imprimir, en el metodo optmizado se pretende
que del array frutas se declare los objetos y se imprima el array completo
*/ 
//Codigo no optimizado
var frutas = new Array ();
frutas [0] = 'Fresa';
frutas [1] = 'Sandia';
frutas [2] = 'Manzana';
frutas [3] = 'Uva';
console.log (frutas[0]);
console.log (frutas[1]);
console.log (frutas[2]);
console.log (frutas[3]);
//Codigo optimizado
var frutas= [
    'Fresa',
    'Sandia',
    'Manzana',
    'Uva'
  ];
  console.log (frutas);