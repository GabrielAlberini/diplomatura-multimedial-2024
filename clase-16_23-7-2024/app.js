const titulo = document.querySelector("h1");

// TIPOS DE DATOS

// Texto
const nombre = "Gabriel";
const edad = "30";

// Números
const anioDeNacimiento = 1994;

// Booleanos
const carnetDeConducir = false;
const multas = true;

// Palabras reservadas
// const -> voy a crear una cajita para guardar...
// true / false -> indico que algo es v o f
// function -> voy a crear una función
// document -> estoy observando el HTML

// Mi nombre es Gabriel Alberini

const name = prompt("Ingrese su nombre");
const lastname = prompt("Ingrese su apellido");

console.log(name);
console.log(lastname);

// Concatenación
const saludo = "Hola" + " " + name + " " + lastname + ".";

// Concatenación usando los templates string
// ctrl + alt + }
// backsticks
const saludo2 = `Hola ${name} ${lastname}`;

titulo.textContent = saludo2;

// -----------------------------------------------------------------------------

// Operadores aritméticos
// + - * / %

const num1 = 2;
const num2 = 12;

const suma = num1 + num2;
console.log(suma);

const resta = num1 - num2;
console.log(resta);

const division = num1 / num2;
console.log(division);

const multiplicacion = num1 * num2;
console.log(multiplicacion);

// Operadores de comparación
// Siempre dan un resultado booleano
// booleano -> true o false

// > mayor que
// < menor que
// === igual que
// !== diferente que

// > mayor que
console.log(1 > 1); // el 1 es mayor al 1? -> false

// < menor que
console.log(4 < 10); // el 4 es menor que 10? -> true

// === igual que
console.log(1 === "1"); // el 1 número es igual al 1 texto? -> false

// !== diferente que
console.log(0 !== 1); // el 0 es diferente al 1? -> true
