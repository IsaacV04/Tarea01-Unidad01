//Suma de dos números:
alert('Bienvenido a la suma de números!!\n\nPrecione aceptar');

const n1 = prompt('Ingrese el primer número a sumar: ');
console.log('número ingresado: '+n1);
const n2 = prompt('Ingrese el segundo número: ');
console.log('número ingresado: '+n2);
const s = parseInt(n1) + parseInt(n2);
console.log('La suma es: '+s);

alert('La suma de los números '+ n1+ ' y '+ n2+ ' es: '+ s)