var lista = [];

function agregarNumero() {
  const inputNumer = document.getElementById("number");
  const number = Number(inputNumer.value);
  lista.push(number);

  const writeNumber = document.getElementById("result-number");
  writeNumber.innerText = lista.join(' + ');
}

function calcularPromedio() {
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

  const writePromedio = document.getElementById("result-promedio");
  writePromedio.innerText = promedioLista;
  
}

//Para reduce
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce