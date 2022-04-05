const lista1 = [100, 200, 300, 500];

function calcularMedia(lista) {
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(
    function (valorAcumulado, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
  
}

//Para reduce
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce