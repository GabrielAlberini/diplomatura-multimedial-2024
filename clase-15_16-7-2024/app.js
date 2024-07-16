// 1 - ver que necesitamos y llamar esas herramientas en js
// input
const input = document.querySelector("input");

// boton
const button = document.querySelector("button");

// text
const text = document.querySelector("p");

// 2 - definir que queremos hacer y CUANDO
button.addEventListener("click", () => {
  const textInput = input.value;
  text.textContent = "El usuario busco sobre: " + textInput;

  // 3 - que tiene que pasar luego
  input.value = "";
});
