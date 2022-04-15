// Obtener datos ingresados
function getMonto() {
  const inputMonto = document.getElementById("monto").value;

  return Number(inputMonto);
}

function getInteres() {
  const inputInteres = document.getElementById("interes").value;

  return Number(inputInteres);
}

function getTiempo() {
  const inputTiempo = document.getElementById("tiempo-años").value; // Años
  const inputTiempoMeses = document.getElementById("tiempo-meses").value; // Meses

  if (inputTiempo != "" && inputTiempoMeses != "") {
    const tiempoMeses = Number(inputTiempo) * 12 + Number(inputTiempoMeses);

    return tiempoMeses;
  } else if (inputTiempo == "") {
    const tiempoMeses = Number(inputTiempoMeses);

    return tiempoMeses;
  } else {
    const tiempoMeses = Number(inputTiempo) * 12;

    return tiempoMeses;
  }
}

// Calcular
function calcularInteresMensual() {
  const interesMensual = getMonto() * (getInteres() / 100);

  return interesMensual;
}

function calcularInteresTotal() {
  const interesTotal = calcularInteresMensual() * getTiempo();

  return interesTotal;
}

function calcularCuotas() {
  const cuotas = getMonto() / getTiempo();

  return cuotas;
}

function calcularCuotaTotal() {
  const cuotaTotal = calcularCuotas() + calcularInteresMensual();

  return cuotaTotal;
}

function calcularPagoTotal() {
  const pagoTotal = calcularCuotaTotal() * getTiempo();

  return pagoTotal;
}

//Escribir resultados
function writeMonto() {
  document.getElementById("prestamo-total").innerText = new Intl.NumberFormat(
    "es-CO",
    { style: "currency", currency: "COP" }
  ).format(getMonto());
}

function writeInteres() {
  document.getElementById("result-interes").innerText = getInteres() + "%";
}

function writeTiempo() {
  document.getElementById("result-tiempo").innerText = getTiempo() + " meses";
}

function writeInteresMensual() {
  document.getElementById("result-interes-mensual").innerText =
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(calcularInteresMensual());
}

function writeInteresTotal() {
  document.getElementById("result-interes-total-monto").innerText =
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(calcularInteresTotal());
}

function writeCuotas() {
  document.getElementById("result-cuotas").innerText = new Intl.NumberFormat(
    "es-CO",
    {
      style: "currency",
      currency: "COP",
    }
  ).format(calcularCuotas());
}

function writeCuotaTotal() {
  document.getElementById("result-cuota-total").innerText =
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(calcularCuotaTotal());
}

function writePagoTotal() {
  document.getElementById("result-pago-total").innerText =
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(calcularPagoTotal());
}

function calcular() {
  writeMonto();
  writeInteres();
  writeTiempo();
  writeInteresMensual();
  writeInteresTotal();
  writeCuotas();
  writeCuotaTotal();
  writePagoTotal();
}
