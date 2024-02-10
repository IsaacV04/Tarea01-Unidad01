//Cálculo del promedio:
alert('Bienvenido!!\nVamos a calcular promedios\n\nPrecione aceptar');

const n1 = prompt('Ingrese la primer "nota": ');
console.log(`Nota 1: ${n1}`);
const n2 = prompt('Ingrese la segunda "nota": ');
console.log(`Nota 2: ${n2}`);
const n3 = prompt('Ingrese la tercera "nota": ');
console.log(`Nota 3: ${n3}`);

const promedio = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/3;
console.log(`El promedio es: ${promedio}`);
alert(`El promedio es: ${promedio}`);