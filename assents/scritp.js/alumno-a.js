// criar 4 números aleatórios
const combinacion = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10)
];
console.log("numeros gerados:", combinacion);


// botão A
const botonA = document.getElementById("btn-parte-a");

// evento clique
botonA.addEventListener("click", function() {
  const display = document.getElementById("combinacion-display");

  // mostrar os dois primeiros números
  display.textContent = combinacion[0] + " - " + combinacion[1];
});