// Helpers o Utils
function esPar(number) {
  return number % 2 === 0;
}

function calcularMedia(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// Calculadora de mediana 
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMedia([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

// Mediana general
const salariosCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (a, b) {
  return a - b;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * (90)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
  medianaGeneralCol,
  medianaTop10Col
});


// Mas info para los metodos map, filter y reduce
// https://www.youtube.com/watch?v=tP8JiVUiyDo&ab_channel=LaCocinadelC%C3%B3digo
