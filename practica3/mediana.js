let mediana;
let lista = [];

function reiniciar() {
  notas = [];
  totalNotas = 0;

  document.getElementById("result-number").innerText = "Ejemplo: 12, 13, 14";
  document.getElementById("result-mediana").innerText = "Ejemplo: 13";
}

function agregarNumero() {
  const inputNumer = document.getElementById("number");
  const number = Number(inputNumer.value);
  lista.push(number);

  const writeNumber = document.getElementById("result-number");
  writeNumber.innerText = lista.join(", ");
}

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

function calcularMediana() {
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

    const writeMediana = document.getElementById("result-mediana");
    writeMediana.innerText = mediana;
  } else {
    mediana = lista[mitadLista];
    const writeMediana = document.getElementById("result-mediana");
    writeMediana.innerText = mediana;
  }
}

//Documentacion de arr.sort()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
