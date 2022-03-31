//Código del cuadrado
console.group("Cuadrados"); //Agrupa las funciones de una misma clase

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + "cm²");

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y la base mide " + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("Altura del triángulo es " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es " + areaTriangulo + "cm²");

console.groupEnd();

//Código del circulo
console.group("Círculos");

// Rradio
const radioCirculo = 5;
console.log("El radio del círculo es " + radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El valor de PI es " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es " + perimetroCirculo + "cm");

// Área
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es " + areaCirculo + "cm²");

console.groupEnd();