// Pregunta 23
function suma(a, b) {
  return a + b;
}

let resultado = suma(10, 5);
console.log("Resultado de la suma:", resultado);

// Pregunta 24
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}

let resultadoValidado = sumaValidada(10, "5"); 
console.log("Resultado con validación:", resultadoValidado); 

// Pregunta 25
function validateInteger(n) {
  return Number.isInteger(n);
}

console.log("¿Es entero 10.5?:", validateInteger(10.5));
console.log("¿Es entero 8?:", validateInteger(8));       

// Pregunta 26: 
function sumaConEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }

  if (!validateInteger(a)) {
    alert("El primer número no es entero. Se redondeará.");
    a = Math.round(a);
  }

  if (!validateInteger(b)) {
    alert("El segundo número no es entero. Se redondeará.");
    b = Math.round(b);
  }

  return a + b;
}

let resultadoEntero = sumaConEnteros(10.7, 5.2);
console.log("Resultado suma con enteros:", resultadoEntero); 

// Pregunta 27
function corregirYValidarEntero(n) {
  if (!validateInteger(n)) {
    alert("El número no es entero. Se redondeará.");
    return Math.round(n);
  }
  return n;
}

function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }

  a = corregirYValidarEntero(a);
  b = corregirYValidarEntero(b);

  return a + b;
}

let resultadoFinal = sumaFinal(4.9, 7.3); 
console.log("Resultado final con validaciones separadas:", resultadoFinal);
