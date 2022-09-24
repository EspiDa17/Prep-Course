// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //Metodo 1:
  /* var nuevoNombre = [];
  for(var i=0 ; i<nombre.length ; i++){
    if(i == 0){
      nuevoNombre.push(nombre[0].toUpperCase());
    }
    else{
      nuevoNombre.push(nombre[i])
    }
  }
  var nom = nuevoNombre.join('');
  return nom.toString(); */

  //Metodo 2:
  return nombre[0].toUpperCase() + nombre.slice(1)

  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //Metodo 1:
  var suma = 0;
  for(var i=0 ; i<numeros.length ; i++){
    suma = suma + numeros[i];
  }
  cb(suma)

  //Metodo 2:
  /* numeros.reduce(function(suma, ,)
  } */

}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //Metodo 1:
  /* array.forEach(function(valor){
    return cb(valor)
  }) */

  //Metodo 2:
  for(var i=0 ; i<array.length ; i++){
    cb(array[i])
  }
}




function map(arr, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //Metodo 1:
  var newArray = [];
  for(var i=0 ; i<arr.length ; i++){
    newArray[i] = cb(arr[i])
  }
  return newArray

  //Metodo 2:
  /* var newArray = arr.map(function(valor){
    return cb(valor)
  })
  return newArray */

  //Metodo 3:
  /* var newArray = arr.map(cb);
  return newArray; */

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //Metodo mio:
  /* var newArray1 = [];
  for(var i=0 ; i<array.length ; i++){
    var newArray = array[i].split();
    if(newArray[0] != a){
      newArray1.push(array[i]);
    }
  }
  return newArray1 */

  //Metodo 2:
  var newArray = [];
  for(var valor of array){
    if(valor[0] === 'a'){
      newArray.push(valor)
    }
  }
  return newArray
}
// revis

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};