//Código del cuadrado
console.group("Cuadrados"); //Agrupa las funciones de una misma clase

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del circulo
console.group("Círculos");


// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return PI * (radio * radio);
}

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(params) {
  const input = document.getElementById("cuadrado-form__input");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(`El perímetro del cuadrado es ${perimetro}`);
}

function calcularAreaCuadrado(params) {
  const input = document.getElementById("cuadrado-form__input");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(`El perímetro del cuadrado es ${area}`);
}