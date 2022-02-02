// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  matriz = Object.entries(objeto)
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.S
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 let letra = ''
 let objeto = {}
 for (i=0; i<string.length; i++){
   letra = string[i]
   if (objeto[letra] === undefined) { 
     objeto[letra] = 1
    }else {
      let current = objeto[letra]
      objeto[letra] = current +1
    }
 }
 return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayuscula = '';
  let minuscula = '';
  for (i = 0; i<s.length; i++){ 
     if(s[i] === s[i].toUpperCase()){ 
          mayuscula = mayuscula + s[i]; 
       }
   else {
          minuscula = minuscula + s[i];
        } 
   }       
  return (mayuscula + minuscula) 
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newStr = str.split(' ')
  let invertido =[]
  for (i=0; i<newStr.length; i++){
   invertido.push(newStr[i].split('').reverse().join(''))
  }
  return invertido.join(' ')
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroToString = String(numero)
  let length = numeroToString.length
  for (i=0; i<numeroToString.length; i++) {
    if(numeroToString[i] !== numeroToString[length-(i+1)])
    return 'No es capicua'
  }
  return 'Es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadena = ''
  nuevaCadena = cadena.replace(/a/g, '').replace(/b/g, '').replace(/c/g, '')
  return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let objetoPalabras = {}
  arr.forEach(element => {
    objetoPalabras[element] = element.length
  });
  const palabrasOrdenadas = Object.keys(objetoPalabras).sort(function(a,b){return objetoPalabras[a]-objetoPalabras[b]})
 return palabrasOrdenadas
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let unionArrays = [...arreglo1, ...arreglo2].sort()
  let interseccion = []
  for(i=0; i<unionArrays.length; i++) {
    if(unionArrays[i] === unionArrays[i+1]) {
      interseccion.push(unionArrays[i])
    }
  }
  return interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

