const cupones = [0, 25, 20, 10];

function getInitialPrice() {
  const inputPrice = document.getElementById("input-price");
  const initialPriceValue = Number(inputPrice.value);
  return initialPriceValue;
} //Obtiene el precio inicial

function getInitialDiscount() {
  const inputDiscount = document.getElementById("input-discount");
  const initialDiscountValue = Number(inputDiscount.value);
  return initialDiscountValue;
} //Obtiene el descuento inicial

function getCuponUsado() {
  const inputCupon = document.getElementById("cupones");
  const cuponValue = Number(inputCupon.value);
  return cuponValue;
} //Obtiene el cupon usado

function totalDiscount(cuponValue, initialDiscountValue) {
  const finalDiscountValue = cuponValue + initialDiscountValue;
  return finalDiscountValue;
} //Calcula el descuento total

function calcularPrecioFinal(price, finalDiscount) {
  const porcentajeDescuento = 100 - finalDiscount;
  const priceWithDiscount = (price * porcentajeDescuento) / 100;
  return priceWithDiscount;
} //Calcula el precio final con descuento

function totalSave(initialPrice, finalPrice) {
  const save = initialPrice - finalPrice;
  return save;
} //Calcula el ahorro total

// Escribir datos finales
function writeDiscount(finalDiscount) {
  const discount = document.getElementById("discount");
  discount.innerText = finalDiscount + "%";
} //Escribe el descuento total

function writeInitialPrice(initialPrice) {
  const price = document.getElementById("price");
  price.innerText = "$" + initialPrice;
} //Escribe el precio inicial

function writeSave(finalSave) {
  const ahorro = document.getElementById("save");
  ahorro.innerText = "$" + finalSave;
} //Escribe el ahorro total

function writeFinalPrice(finalPrice) {
  const resultPrice = document.getElementById("result-price");
  resultPrice.innerText = "$" + finalPrice;
}

function calcular() {
  const initialPrice = getInitialPrice();
  const initialDiscount = getInitialDiscount();
  const cupon = getCuponUsado();
  const finalDiscount = totalDiscount(cupon, initialDiscount);
  const finalPrice = calcularPrecioFinal(initialPrice, finalDiscount);
  const finalsave = totalSave(initialPrice, finalPrice);

  //Escribir resultados
  writeDiscount(finalDiscount);
  writeInitialPrice(initialPrice);
  writeSave(finalsave);
  writeFinalPrice(finalPrice);
}
