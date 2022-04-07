const lista = [2, 2, 1, 4, 3, 5, 2, 2, 2, 1, 3, 1];

const listaCount = {};

function calcularModa(lista) {
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
  return moda;
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
