//  Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
};

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//  Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//  Código del circulo
console.group("Circulos");

// Diámetro
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

// Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(parseFloat(value));
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(parseFloat(value));
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const lado1 = inputLado1.value;
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("InputTrianguloBase");
  const base = inputBase.value;

  const perimetro = perimetroTriangulo(parseFloat(lado1), parseFloat(lado2), parseFloat(base));
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const base = inputBase.value;
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const altura = inputAltura.value;

  const area = areaTriangulo(parseFloat(altura), parseFloat(base));
  alert(area);
}

// Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(parseFloat(value));
  alert(perimetro)
}

function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(parseFloat(value));
  alert(area)
}