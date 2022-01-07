// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {  //resuelto
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {   //resuelto
  // Devuelve el último elemento de un array
  // Tu código:
  
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {   //resuelto
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {   //resuelto
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 // console.log("Tamaño del Array ",array.length)

  for(let j=0; j <= array.length -1 ;j++){

  //  console.log(array[j])
    array[j]=1+array[j];
   
  }
  
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {   //resuelto
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {   //resuelto
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {   //resuelto
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  let frase= palabras.join(" ");
  
  return frase;
}


function arrayContiene(array, elemento) {    //resuelto
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

    let existe = false
  for(let i=0;i<array.length-1;i++){

      if(array[i]===elemento){
        existe = true
      }
  }
  return existe;
}


function agregarNumeros(numeros) {     //resuelto
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let suma=0
  let valor=0
  for(let j=0;j<numeros.length;j++){

    valor=numeros[j];
    suma=suma+valor;
  }
  return suma;

}


function promedioResultadosTest(resultadosTest) {     //resuelto
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let puntaje =0
  let elementos=0
  let a =0
  elementos = resultadosTest.length;  //cantidad de puntajes o cuantos puntajes tomaron

  for(let i=0;i<elementos;i++){

    a = resultadosTest[i];  //acumulador
    puntaje = a + puntaje; //suma de puntajes


  }
  return puntaje/elementos // promedio
}


function numeroMasGrande(numeros) {      //resuelto
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let numeroMayor=0
  for(let j=0;j<numeros.length;j++){

    if(numeroMayor<numeros[j]){
      
        numeroMayor= numeros[j];
    }

  }
  return numeroMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if(arguments.length<1) return 0

  let d=1
  for(u=0;u<arguments.length;u++){
    d=d*arguments[u];
  }
  return d;
}


function cuentoElementos(arreglo){     //resuelto
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let mayor=0;

  for(let o=0;o<arreglo.length;o++){
    if(arreglo[o]>18){
      mayor = mayor + 1;
    }

  }
  return mayor

}


function diaDeLaSemana(numeroDeDia) {   //resuelto
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if(numeroDeDia == 1 || numeroDeDia ==7){

    return "Es fin de semana"
  }

   return "Es dia Laboral"
  
} 


function empiezaConNueve(n) {   //resuelto
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  if(n.toString().slice(0,1)==9){
    return true

  }else{
    return false

  }
  
}


function todosIguales(arreglo) {  //resuelto
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
let igual=true

  for (let index = 0; index < arreglo.length; index++) {
    for(let j=0;j< arreglo.length;j++){

      if(arreglo[index]!=arreglo[j]){

        igual=false
      }

    }
    
  }
  return igual
  
} 


function mesesDelAño(array) {    //resuelto
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let nuevoArray=[]
  for(i=0;i<array.length;i++){
    if(array[i]==="Enero"){
      nuevoArray.push("Enero")

    }else if (array[i]==="Marzo"){
      nuevoArray.push("Marzo")

    }else if(array[i]==="Noviembre"){
      nuevoArray.push("Noviembre")

    }

  }
   
  if (nuevoArray.length==3){
    return nuevoArray

  }else{
    return "No se encontraron los meses pedidos"
  }


}


function mayorACien(array) {    //resuelto
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let mayorCien=[]

  for(let i=0;i<array.length;i++){

    if(array[i]>100){
      mayorCien.push(array[i])

    }
  }
  return mayorCien;


}


function breakStatement(numero) {   //resuelto
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
let arrayNum=[]
let suma = numero;
  for(let i=0; i<10;i++ ){
      suma=suma+2
      
      if(suma==i){
        return "Se interrumpió la ejecución"
         break;

      }else {
        arrayNum.push(suma);
      }
     
  } return arrayNum;
  
}


function continueStatement(numero) {  //resuelto
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arrayNum=[]
let suma = numero;
  for(let i=0; i<10;i++ ){
      
      if(i===5){
        continue

      }else {
        suma=suma+2
        arrayNum.push(suma);
      }
     
  } return arrayNum;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
