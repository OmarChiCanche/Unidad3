/*
Optimizacion de codigo muerto, en la primera parte hay codigo que funciona pero no tiene
algun uso, asi como codigo que se ha comentado y no le sirve al programa
*/ 
//Codigo no optimizado
let lista = [12,2,3,7,8,13,19];
let frutas = ["limon","sandia", "melon", "guanabana"];

for (let i=0; i<lista.length; i++){
    console.log (Math.pow(lista[i],2));
}
let verduras = ["chayote","tomate", "zanahoria", "papa"];
/*function mostrarMensaje1() {
    alert('Bienvenido al curso JavaScript de aprenderaprogramar.com')
    }
    
    function mostrarMensaje2() {
    alert('Ha hecho click sobre el párrafo inferior')
    }*/

for (let i=0; i<frutas.length; i++){
    console.log (frutas[i]);
}
//Codigo optimizado 
let lista = [12,2,3,7,8,13,19];
let frutas = ["limon","sandia", "melon", "guanabana"];

for (let i=0; i<lista.length; i++){
    console.log (Math.pow(lista[i],2));
}

for (let i=0; i<frutas.length; i++){
    console.log (frutas[i]);
}