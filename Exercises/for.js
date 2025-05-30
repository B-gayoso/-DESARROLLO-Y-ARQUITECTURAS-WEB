// Pregunta 19
let palabras = ["sol", "luna", "estrella", "cielo", "nube"];

for (let i = 0; i < palabras.length; i++) {
  alert("Palabra: " + palabras[i]);
}

// Pregunta 20
for (let i = 0; i < palabras.length; i++) {
  let palabraCapitalizada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  alert("Palabra con mayúscula: " + palabraCapitalizada);
}

// Pregunta 21: 
let sentence = "";

for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert("Frase completa: " + sentence.trim());

// Pregunta 22
let numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log("Array final:", numeros);
