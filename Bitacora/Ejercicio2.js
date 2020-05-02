/*
 Metodo de reduccion por ciclos, en el codigo no optimizado constantemente en cada ciclo
 comparamos el tamaño de los valores haciendo repetitiva cada vez que el ciclo se repita
 en el porceso optimzado se propone que el tamaño ya se defina desde antes para poder
 realizar el proceso en menos tiempo y sea menos los costos y asi los proceso mas eficientes
*/ 
//Codigo no optimizado
var values=[1,2,3,4,5];
          for (var i=0; i<values.length;i++){
                    process(values[i]);
          }

          var j=0;
          do {
                    process(values[j++]);
          }while (j < values.length);

          var k=0;
          while (k < values.length){
                    process (values[k++]);
          }
         
//Codigo optimizado
var values=[1,2,3,4,5];
var length = values.length;

for (var i=length;i--;){
          process(values[i]);
}

var j=length;
do {
          process(values[--j]);
}while (j);

var k=length;
while (k--){
          process (values[k]);
}