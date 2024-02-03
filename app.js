function Encriptar() {
  let txtArea = document.querySelector(".input-encriptar").value;
  let nuevoTxt = document.querySelector(".texto-mostrado");

  Validaciones();
}

function Validaciones() {
  let txtArea = document.querySelector(".input-encriptar").value;
  let nuevoTxt = document.querySelector(".texto-mostrado");

  if (txtArea.trim() === "") {
    mostrarNotificacion("Por favor, ingresa texto antes de encriptar.", "error");
  } else {
    Ocultar();
    Mostrar();
    Ajuste();
    nuevoTxt.innerHTML = txtArea;
  }
}

function mostrarNotificacion(mensaje, tipo) {
  const notificationContainer = document.getElementById("notification-container");

  const notification = document.createElement("div");
  notification.className = `notification ${tipo}`;
  notification.textContent = mensaje;

  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("hide");
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
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
