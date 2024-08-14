// Palabra reservada -> palabra que trae cierta funcionalidad.
const titulo = document.querySelector("h1");

// Texto -> cadena de caracteres
// "Hola soy texto"
// "Tengo 30 años"

// Numeros
// 123 -> no lleva comillas
// -1
// 0.4

// Booleanos -> datos de verdad
// true
// false

const nombre = "Gabriel";
const apellido = "Alberini";
const edad = 30;
const tenesAuto = false;

// Concatenar -> unir string con el signo +
const nombreCompleto = nombre + " " + apellido;

// Template String
// ctrl + alt + }
const nombreCompleto2 = `${nombre} ${apellido}`;

// Numeros
// Operadores aritméticos
// + - / *

// Operadores de comparación
// > < === !==

// Para las operaciones si o si se utilizan números
console.log(3 * 2);

// Esto no tiene sentido
// NaN -> Not a number
console.log(3 / "hola");

// Los operadores de comparación SIEMPRE nos dan un resultado booleano

console.log(10 > 3);

// === es una pregunta
// = es una afirmación, por ej:
// const nombre = "Juan"
console.log(0 === 0);

// Tenes que crear un programa que deje pasar solo a los mayores de edad.
// 1. Aprender que es un condicional
// 2. Saber la condición
// 3. Tomar decisiones

// Estructura de control: automatizar procesos.
// if -> si condicional

// sintaxis quiere decir: una forma estructurada de escribir algo

// const edadDelJoven = +prompt("Ingrese su edad:");

// if (edadDelJoven > 18) {
//   console.log("Puedes pasar, eres mayor de edad.");
// } else {
//   console.log("No puedes pasar, eres menor de edad.");
// }

// Haz un semáforo que evalue si esta verde entonces da el paso, si no que no de el paso

// 1. Saber la condición
// 2. Tomar decisiones

// color === "verde" -> da el paso
//                   -> no da el paso

const color = prompt("De que color esta el semáforo?");

if (color === "verde") {
  console.log("Puedes pasar.");
} else {
  console.log("No puedes pasar.");
}
