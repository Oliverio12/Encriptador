function encriptar() {
  let txtArea = document.querySelector(".input-encriptar").value;
  let nuevoTxt = document.querySelector(".texto-mostrado");
  const upperLower = /^[a-z0-9 ]+$/;
  if (txtArea.trim() === "" || !upperLower.test(txtArea)) {
    mostrarNotificacion("Por favor, ingresa texto antes de encriptar o No ingrese Mayusculas o acentos", "error");
  } else {
    ocultar();
    mostrar();

    txtArea = txtArea.replace(/e/g, "enter")
                     .replace(/i/g, "imes")
                     .replace(/a/g, "ai")
                     .replace(/o/g, "ober")
                     .replace(/u/g, "ufat");

    nuevoTxt.innerHTML = txtArea;
  }
}


  
function desencriptar() {
  let txtArea = document.querySelector(".texto-mostrado").innerHTML;
  let nuevoTxt = document.querySelector(".texto-mostrado");

  txtArea = txtArea.replace(/enter/g, "e")
                   .replace(/imes/g, "i")
                   .replace(/ai/g, "a")
                   .replace(/ober/g, "o")
                   .replace(/ufat/g, "u");

  nuevoTxt.innerHTML = txtArea;
}


function copiarAlPortapapeles() {
  let elemento = document.querySelector(".texto-mostrado");

  let areaTemporal = document.createElement('textarea');
  areaTemporal.value = elemento.textContent;

  document.body.appendChild(areaTemporal);

  areaTemporal.select();
  document.execCommand('copy');

  document.body.removeChild(areaTemporal);

  mostrarNotificacion("Texto copiado al portapapeles.", "success");
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


function displayEstilos(clase, estilo) {
  document.querySelector(clase).style.display = estilo;
  return;
}

function ocultar() {
  displayEstilos(".imagen", "none");
  displayEstilos(".mensaje-titulo", "none");
  displayEstilos(".mensaje-subtitulo", "none");
  return;
}

function mostrar() {
  displayEstilos(".texto-mostrado", "block");
  displayEstilos(".btn3", "block");
  return;
}
