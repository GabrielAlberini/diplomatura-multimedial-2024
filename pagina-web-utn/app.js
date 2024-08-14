// Ver que elementos necesitamos
const card = document.querySelector(".card")
const boton = document.querySelector("#boton")

// Darle el poder de recibir un click al boton
boton.addEventListener("click", () => {
  // Pensar que vamos a hacer cuando recibamos el click
  if(card.classList.contains("ocultar")) {
      card.classList.remove("ocultar")
  } else {
    card.classList.add("ocultar")
  }
})
