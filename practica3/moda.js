let lista = [];

let listaCount = {};

function reiniciar() {
  lista = [];
  listaCount = {};

  document.getElementById("result-number").innerText =
    "Ejemplo: 2, 2, 1, 4, 3, 5, 2, 2, 2, 1, 3, 1";
  document.getElementById("result-moda").innerText = "Ejemplo: 2 se repite 5 veces.";
}

function agregarNumero() {
  const inputNumer = document.getElementById("number");
  const number = Number(inputNumer.value);
  lista.push(number);

  const writeNumber = document.getElementById("result-number");
  writeNumber.innerText = lista.join(", ");
}

function calcularModa() {
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(function (a, b) {
    return a[1] - b[1];
  }); //convierte el objeto en un array

  const moda = listaArray[listaArray.length - 1];

   const writeModa = document.getElementById("result-moda");
   writeModa.innerText = `${moda[0]}, se repite ${moda[1]} veces.`;
}

// function moda(arr) {
//   return arr
//     .sort(
//       (a, b) =>
//         arr.filter((value) => value === a).length - arr.filter((value) => value === b).length
//     )
//     .pop();
// }
// FORMA CORTA
