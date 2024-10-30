//  activo el prompt
var prompt = require('prompt-sync')();

// consulto datos
let a = prompt("Ingrese el primer valor: ")
let b = prompt("Ingrese el segundo valor: ")
let operacion = prompt("Ingrese la operación (sumar, restar, multiplicar, dividir, potencia, raiz): ")

// defino las variables
const suma = require ('./operaciones/suma');
const resta = require ('./operaciones/resta');
const multiplicacion = require ('./operaciones/multiplicacion');
const division = require ('./operaciones/division');
const potencia = require ('./operaciones/potencia');
const raizCuadrada = require ('./operaciones/raizCuadrada');

// calculadora
if (operacion.toLowerCase() === "sumar")  {
    resultado_suma = suma(a,b);
    console.log(`El resultado de sumar ${a} + ${b} es ${resultado_suma}`);
}  else if (operacion.toLowerCase() === "restar")  {
    resultado_resta = resta(a,b);
console.log(`El resultado de resta ${a} - ${b} es ${resultado_resta}`);
}  else if (operacion.toLowerCase() === "multiplicacion")  {
    resultado_multiplicacion = multiplicacion(a,b);
        console.log(`El resultado de multiplicacion ${a} * ${b} es ${resultado_multiplicacion}`);
}  else if (operacion.toLowerCase() === "division")  {
    resultado_division = division(a,b);
    console.log(`El resultado de division ${a} / ${b} es ${resultado_division}`);
}  else if (operacion.toLowerCase() === "potencia")  {
    resultado_potencia = potencia(a, b);
    console.log(`El resultado de la potencia de ${a} por ${b} es ${resultado_potencia}`);
}  else if (operacion.toLowerCase() === "raiz")  {
    resultado_raizCuadrada = raizCuadrada(a);
    console.log(`El resultado de la raiz cuadrada de ${a} es ${resultado_raizCuadrada}`);
} else {
    console.log('ERROR 404 NOT FOUND')
}
