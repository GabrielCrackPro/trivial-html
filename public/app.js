const cuerpoPregunta = document.querySelector(".cuerpo-pregunta");
const contenedorBotones = document.querySelectorAll("#botones");

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
    `;
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
      alert("Correcto");
      puntos++;
      preguntas.shift();
      imprimirPreguntaYrespuesta();
    } else {
      alert("Incorrecto");
      preguntas.shift();
      imprimirPreguntaYrespuesta();
    }
  } else {
    alert("Selecciona una respuesta");
  }
}
if (preguntas.length === 0) {
  mostrarPuntos();
}
function mostrarPuntos() {
  alert(`Felicidades, has ganado ${puntos} puntos`);
}
