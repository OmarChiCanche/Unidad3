/* reutilizacion de expresiones comunes, en el primer codigo la suma de b+c se repite
por lo tanto en el segundo codigo como ya se ha calculado el valor, e sera el valor de a
*/ 
//Codigo no optimizado
var a,b,c,d,e,f;
a = b + c;
d = a - d;
e = a + c;
f = a - d;

console.log(a,d,e,f);
//Codigo optimizado 
var a,b,c,d,e,f;
a = b + c;
d = a - d;
e = a;
f = a - d;

console.log(a,d,e,f);