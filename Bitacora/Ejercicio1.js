/*Eliminacion de expresiones comunes en el codigo no optimizado
se puede ver que algunas operaciones se repiten constantemente,
por lo tanto se optimizan las expresiones y se utilizan para que sea mas eficiente
agregando variables que ayuden.
*/ 
//Codigo no optimizado
var i, j;
var a, b, c, d, k, x, y, z, t;
var  A1;
for(j=0; j<ITER; j++)
{
   for(i=0; i<N; i++){
       a = x * y * z * A[i];
       b = x * z * t;
       c = t * A1[i];
       d = k * A1[i];
       A1[i] = z * x * A[i];
       }
}
//Codigo optimizado
var i, j;
var a, b, c, d, k, x, y, z, t;
var A1;
for(j=0; j<ITER; j++)
{
    for(i=0; i<N; i++){
        var tmp1, tmp2, tmp3;
        tmp1 = x * z;
        tmp2 = A1[i];
        tmp3 = tmp1 * tmp2;
        a = tmp3 * y;
        b = tmp1 * t;
        c = t * tmp2;
        d = k * tmp2;
        A1[i] = tmp3;
        }
}