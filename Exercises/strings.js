// Ejercicio 4:
let textoLargo = "programacion";
let textoMayuscula = textoLargo.toUpperCase();
console.log("Texto en mayúscula:", textoMayuscula);

// Ejercicio 5:
let textoOriginal = "desarrollador";
let primerosCinco = textoOriginal.substring(0, 5);
console.log("Primeros 5 caracteres:", primerosCinco);

// Ejercicio 6:
let textoFinal = "Bianca";
let ultimosTres = textoFinal.substring(textoFinal.length - 3);
console.log("Últimos 3 caracteres:", ultimosTres);

// Ejercicio 7:
let textoMixto = "cOMPUTADORA";
let capitalizado = textoMixto.substring(0, 1).toUpperCase() + textoMixto.substring(1).toLowerCase();
console.log("Texto con capitalización:", capitalizado);

// Ejercicio 8:
let textoConEspacio = "Hola mundoJS";
let posicionEspacio = textoConEspacio.indexOf(" ");
console.log("Posición del primer espacio:", posicionEspacio);

// Ejercicio 9:
let fraseLarga = "desarrollador frontend";
let espacio = fraseLarga.indexOf(" ");
let palabraUno = fraseLarga.substring(0, espacio);
let palabraDos = fraseLarga.substring(espacio + 1);
let resultadoFormateado = 
  palabraUno.substring(0, 1).toUpperCase() + palabraUno.substring(1).toLowerCase() + " " +
  palabraDos.substring(0, 1).toUpperCase() + palabraDos.substring(1).toLowerCase();
console.log("Frase capitalizada:", resultadoFormateado);
