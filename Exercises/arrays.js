// Ejercicio 10:
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5:", meses[4]);    
console.log("Mes 11:", meses[10]);   
// Ejercicio 11:
let mesesOrdenados = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
mesesOrdenados.sort();
console.log("Meses ordenados alfabéticamente:", mesesOrdenados);

// Ejercicio 12:
meses.unshift("Comienzo de año");
meses.push("Fin de año");
console.log("Meses con elementos agregados:", meses);

// Ejercicio 13:
meses.shift();  
meses.pop();    
console.log("Meses después de eliminar extremos:", meses);

// Ejercicio 14:
meses.reverse();
console.log("Meses en orden invertido:", meses);

// Ejercicio 15:
let mesesString = meses.join(" - ");
console.log("Meses como string:", mesesString);

// Ejercicio 16:
let mesesOriginal = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let copiaMeses = mesesOriginal.slice(4, 11);
console.log("Meses de Mayo a Noviembre:", copiaMeses);