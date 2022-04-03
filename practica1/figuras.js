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

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("figura__cuadrado-form__input"); //Obtenemos el HTML
  const value = input.value; //Obtenemos el valor del HTML

  const perimetro = perimetroCuadrado(value); //Obtenemos el perímetro
  alert(`El perímetro del cuadrado es ${perimetro}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("figura__cuadrado-form__input");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(`El perímetro del cuadrado es ${area}`);
}

//Triángulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById(
    "figura__triangulo-form__input-lado-1"
  );
  const input2 = document.getElementById(
    "figura__triangulo-form__input-lado-2"
  );
  const input3 = document.getElementById(
    "figura__triangulo-form__input-base"
  );
  const lado1 = Number(input1.value);
  const lado2 = Number(input2.value);
  const base = Number(input3.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(`El perímetro del triángulo es ${perimetro}`);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById(
    "figura__triangulo-form__input-altura"
  );
  const input2 = document.getElementById(
    "figura__triangulo-form__input-base"
  );
  const altura = input1.value;
  const base = input2.value;

  const area = areaTriangulo(base, altura);
  alert(`El área del triángulo es ${area}`);
}

//Círculo
function calcularPerimetroCirculo() {
  const input = document.getElementById("figura__circulo-form__input-radio");
  const radio = input.value;

  const perimetro = perimetroCirculo(radio);
  alert(`El perímetro del círculo es ${perimetro}`);
}

function calcularAreaCirculo() {
  const input = document.getElementById("figura__circulo-form__input-radio");
  const radio = input.value;

  const area = areaCirculo(radio);
  alert(`El área del círculo es ${area}`);
}

//Practica terminada
