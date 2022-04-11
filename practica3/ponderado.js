var notas = [];
var totalNotas = 0;

function getMateria() {
  const input1 = document.getElementById("materia");
  const input1Value = input1.value;

  document.getElementById("materia").value = "";
  return input1Value;
}

function getPuntaje() {
  const input2 = document.getElementById("puntaje");
  const input2Value = Number(input2.value);

  document.getElementById("puntaje").value = "";
  return input2Value;
}

function writeAll() {
  const writeMateria = document.getElementById("result-materia");
  writeMateria.innerHTML = notas[notas.length - 1].materia;

  const writePuntaje = document.getElementById("result-puntaje");
  writePuntaje.innerHTML = notas[notas.length - 1].puntaje;
}

function agregarNotas() {
  const materia = getMateria();
  const puntaje = getPuntaje();

  notas.push({ materia: materia, puntaje: puntaje });

  writeAll();
}

function reiniciar() {
  notas = [];
  totalNotas = 0;

  document.getElementById("result-materia").innerHTML = "Ejemplo: Ciencias";
  document.getElementById("result-puntaje").innerHTML = "Ejemplo: 67";
}

function calcularPonderado() {
  for (let i = 0; i < notas.length; i++) {
    totalNotas = notas[i].puntaje + totalNotas;
  }

  const ponderado = totalNotas / notas.length;
  const writePonderado = document.getElementById("result-ponderado");
  writePonderado.innerHTML = ponderado;
}

//Otra forma de hacerlo:
/**
 * const notes = [
 * {
 *  course: "Educación Física",
 *  note: 10,
 *  credit: 2,
 * }
 * {
 *  course: "Programación",
 *  note: 8,
 *  credit: 5,
 * },
 * {
 *  course: "Finanzas personales",
 *  note: 7,
 *  credit: 5,
 * },
 * ];
 *
 * const notesWithCredit = notes.map(function (noteObject) {
 *  return noteObject.note * noteObject.credit;
 * });
 *
 * const sumOfNotesWithCredit = notesWithCredit.reduce(
 *  function (sum = 0, newVal) {
 *   return sum + newVal;
 *  }
 * );
 *
 * const credits = notes.map(function (noteObject) {
 *  return noteObject.credit;
 * });
 *
 * const sumOfCredits = credits.reduce(
 *  function (sum = 0, newVal) {
 *   return sum + newVal;
 * });
 *
 * const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
 */
