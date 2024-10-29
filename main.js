// defino las variables
const suma = require ('./operaciones/suma');
const resta = require ('./operaciones/resta');
const multiplicacion = require ('./operaciones/multiplicacion');
const division = require ('./operaciones/division');
const potencia = require ('./operaciones/potencia');
const raizCuadrada = require ('./operaciones/raizCuadrada');

let a = 10;
let b = 10;
let base = 10;
let exponente = 2;
let num = 4;

let resultado_suma = suma(a,b);
let resultado_resta = resta(a,b);
let resultado_multiplicacion = multiplicacion(a,b);
let resultado_division = division(a,b);
let resultado_potencia = potencia(base, exponente);
let resultado_raizCuadrada = raizCuadrada(num);

console.log(`El resultado de sumar ${a} + ${b} es ${resultado_suma}`);
console.log(`El resultado de resta ${a} - ${b} es ${resultado_resta}`);
console.log(`El resultado de multiplicacion ${a} * ${b} es ${resultado_multiplicacion}`);
console.log(`El resultado de division ${a} / ${b} es ${resultado_division}`);
console.log(`El resultado de la potencia de ${base} por ${exponente} es ${resultado_potencia}`);
console.log(`El resultado de la raiz cuadrada de ${num} es ${resultado_raizCuadrada}`);