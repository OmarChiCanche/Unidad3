/*
*/ 
//Codigo no optimizado
var values=[1,2,3,4,5];
//FOR
          for (var i=0; i<values.length;i++){
                    process(values[i]);
          }
//DO-WHILE
          var j=0;
          do {
                    process(values[j++]);
          }while (j < values.length);
//WHILE
          var k=0;
          while (k < values.length){
                    process (values[k++]);
          }
//Codigo optimizado