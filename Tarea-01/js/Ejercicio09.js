//Celsius a Fahrenheit:
alert('Bienvenido al convertido de grados celcius a fahrenheit!!\n\nPrecione aceptar');

const C = prompt('Ingrese los grados celcius: ');
console.log(`Grados celcius: ${C}°`)

const F = (parseFloat(C) * 9/5) + 32;

console.log(`Grados fahrenheit: ${F}°`);
alert(`La temperatura en fahrenheit es de: ${F}°`);