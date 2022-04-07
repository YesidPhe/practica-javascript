var notas = [
  { materia: "Matemáticas", puntaje: 68 },
  { materia: "Ciencias", puntaje: 67 },
  { materia: "Lenguaje", puntaje: 66 },
  { materia: "Sociales", puntaje: 66 },
  { materia: "Inglés", puntaje: 65 },
];
var totalNotas = 0;

function getNotas(materia, puntaje) {
  this.materia = materia;
  this.puntaje = puntaje;
}

function setNotas(materia, puntaje) {
  notas.push(new getNotas(materia, puntaje));
}

function calcularPonderado(notas) {
  for (let i = 0; i < notas.length; i++) {
    totalNotas = notas[i].puntaje + totalNotas;
  }

  const ponderado = totalNotas / notas.length;
  return ponderado;
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
