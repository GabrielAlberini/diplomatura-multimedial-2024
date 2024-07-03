// Declaraciones
let boton = document.querySelector("button");
console.log(boton);

// Métodos
// Funciones
const cambiarDeModo = () => {
  let body = document.body;
  if (body.classList.contains("modo-oscuro")) {
    body.classList.remove("modo-oscuro");
  } else {
    body.classList.add("modo-oscuro");
  }
};

boton.addEventListener("click", cambiarDeModo);
