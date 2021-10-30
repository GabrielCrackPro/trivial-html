const cuerpoPregunta = document.querySelector(".cuerpo-pregunta");
const contenedorBotones = document.querySelectorAll("#botones");
const banner = document.querySelector(".banner");

const preguntas = [
  {
    pregunta: "¿Para que se utiliza el elemento < a >?",
    respuestas: [
      "Para crear un enlace",
      "Para crear una imagen",
      "Para crear una imagen con un enlace",
      "Para crear una imagen con un enlace",
    ],
    respuestaCorrecta: "Para crear un enlace",
  },
  {
    pregunta: "¿Para que se utiliza el elemento < img >?",
    respuestas: [
      "Para crear una imagen",
      "Para crear un enlace",
      "Para crear una imagen con un enlace",
      "Para crear una imagen con un enlace",
    ],
    respuestaCorrecta: "Para crear una imagen",
  },
  {
    pregunta:
      "¿Que atributo es necesario en la etiqueta < img > para que funcione de manera correcta?",
    respuestas: ["src", "srcset", "alt", "heght", "width"],
    respuestaCorrecta: "src",
  },
  {
    pregunta:
      "¿Que atributo es necesario en la etiqueta < a > para que funcione de manera correcta?",
    respuestas: ["href", "src", "alt", "target"],
    respuestaCorrecta: "href",
  },
  {
    pregunta: "¿Que etiqueta se utiliza para dar estilos a un docuento html?",
    respuestas: ["<style>", "<css>", "<format>", "<st>"],
    respuestaCorrecta: "<style>",
  },
];
let puntos = 0;

function imprimirPreguntaYrespuesta() {
  const pregunta = preguntas[0];
  const respuestas = pregunta.respuestas;
  cuerpoPregunta.innerHTML = `
        <h1 class="text-center fw-bold main-color">${pregunta.pregunta}</h1>
        <ul class="lista-respuestas list-group text-center">
        ${respuestas
          .map(
            (respuesta) => `
                <li class="list-group-item main-color">
                <input type="radio" name="respuesta" value="${respuesta}">
                ${respuesta}
                </li>
                <hr>
            `
          )
          .join("")}
        </ul>
        <button onclick="verificarRespuesta()" class="btn main-color text-white"><i class="fas fa-check"></i> Verificar</button>
        <button onclick="eliminarRespuestaSeleccionada()" class="btn main-color text-white btn-eliminar-respuesta"><i class="fas fa-trash-alt"></i> Eliminar Selección</button>
    `;
}

function eliminarRespuestaSeleccionada() {
  const respuestas = document.querySelectorAll("input[type=radio]");
  respuestas.forEach((respuesta) => {
    respuesta.checked = false;
  });
}
function mostrarPuntos() {
  banner.innerHTML = `
  <div class="alert alert-success">
  <h2 class="text-center"><i class="fas fa-check-circle"></i> Has ganado ${puntos} puntos</h2>
  </div>
  `;
  banner.style.display = "block";
  setTimeout(() => {
    banner.style.display = "none";
  }, 1000);
}
imprimirPreguntaYrespuesta();
function verificarRespuesta() {
  const respuestaSeleccionada = document.querySelector(
    "input[type=radio]:checked"
  );
  if (respuestaSeleccionada) {
    const respuesta = respuestaSeleccionada.value;
    const respuestaCorrecta = preguntas[0].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
      banner.style.display = "block";
      banner.innerHTML = `
      <div class="alert alert-success">
      <h2 class="text-center"><i class="fas fa-check-circle"></i> Correcto</h2>
      </div>
      `;
      puntos++;
      preguntas.shift();
      setTimeout(() => {
        banner.style.display = "none";
        imprimirPreguntaYrespuesta();
      }, 1000);
    } else {
      banner.innerHTML = `
      <div class="alert alert-danger">
      <h2 class="text-center fw-bold"><i class="fas fa-times-circle"></i> Incorrecto</h2>
      <p class="text-center fw-bold">La respuesta correcta era ${respuestaCorrecta}</p>
      </div>
      `;
      banner.style.display = "block";
      setTimeout(() => {
        banner.style.display = "none";
        imprimirPreguntaYrespuesta();
      }, 1000);
      preguntas.shift();
      setTimeout(() => {
        banner.style.display = "none";
        imprimirPreguntaYrespuesta();
      }, 2000);
    }
  } else {
    banner.innerHTML = `
       <div class="alert alert-danger">
      <h2 class="text-center fw-bold"><i class="fas fa-times-circle"></i> Debes elegir una respuesta</h2>
      </div>
    `;
    banner.style.display = "block";
    setTimeout(() => {
      banner.style.display = "none";
    }, 1000);
  }
}
if (preguntas.length === 0) {
  mostrarPuntos();
}
