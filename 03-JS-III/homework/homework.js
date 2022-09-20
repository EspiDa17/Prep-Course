// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:

    //for
    /* var cont = 0;
    for (var i=1 ; i<11 ; i++){
      cont = cont + i;
    }
    return (cont) */

    //while
    var cont = 0;
    var i = 0;
    while(i < 11){
      cont += i;
      i++
    }
    return cont
}




function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:

  //for
  /* var pares = [];
  for (var i=0 ; i<array.length ; i++){
    if(array[i] % 2 === 0){
      pares.push(array[i]);
    }
  }
  return(pares); */

  //for...of
  var pares = [];
  for(numero of array){
    if((numero % 2) === 0){
      pares.push(numero);
    }
  }
  return(pares);
}




function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

  //for
  /* var numCuadrado = [];
  for (var i=0 ; i<array.length ; i++){
    numCuadrado.push((array[i])**2);
  }
  return (numCuadrado); */

  //.map
  var numCuadrado = array.map(function(valor){
    return valor**2;
  })
  return (numCuadrado);
}




function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  //for
  /* var result = 0;
  for(var i=0 ; i<array.length ; i++){
    result = result + (array[i]);
  }
  return(result) */

  //.reduce
  var total = array.reduce(function(acomulador, valor){
    return acomulador + valor
  })
  return total
}





function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  //Forma 1:
  /* var digitos = Array.from(String(num))
  return(digitos.length) */

  //Forma 2:
  return num.toString().length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
