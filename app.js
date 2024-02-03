function Encriptar() {
  let txtArea = document.querySelector(".input-encriptar").value;
  let nuevoTxt = document.querySelector(".texto-mostrado");

  Validaciones();
}

function Validaciones() {
  let txtArea = document.querySelector(".input-encriptar").value;
  let nuevoTxt = document.querySelector(".texto-mostrado");

  if (txtArea.trim() === "") {
    alert("Por favor, ingresa texto antes de encriptar.");
  } else {
    Ocultar();
    Mostrar();
    Ajuste();
    nuevoTxt.innerHTML = txtArea;
  }
}

function DisplayEstilos(clase, estilo) {
  document.querySelector(clase).style.display = estilo;
  return;
}

function Ocultar() {
  DisplayEstilos(".imagen", "none");
  DisplayEstilos(".mensaje-titulo", "none");
  DisplayEstilos(".mensaje-subtitulo", "none");
  return;
}
function Mostrar() {
  DisplayEstilos(".texto-mostrado", "block");
  DisplayEstilos(".btn3", "block");
  return;
}

function Ajuste() {
  document.querySelector(".texto-mostrado").style.height = "auto";
}
