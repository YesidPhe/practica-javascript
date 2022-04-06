let mediana;
const lista = [200, 100, 500, 300, 100000, 250];

function esPar(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMedia(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// function ordenarLista(lista) {
//   for (let i = 0; i < lista.length; i++) {
//     for (let j = 0; j < lista.length; j++) {
//       if (lista[i] < lista[j]) {
//         let aux = lista[i];
//         lista[i] = lista[j];
//         lista[j] = aux;
//       }
//     }
//   }
//   return lista;
// }

function calcularMediana(lista) {
  // lista = ordenarLista(lista);
  lista = lista.sort(function (a, b) {
    return a - b;
  });
  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMedia([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = lista[mitadLista];
    return mediana;
  }
}


//Documentacion de arr.sort()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort