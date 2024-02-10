//Resta de dos números:
alert('Bienvenido a la resta de números!!\n\nPrecione aceptar');

const n1 = prompt('Ingrese el primer número a restar: ');
console.log('número ingresado: '+n1);
const n2 = prompt('Ingrese el segundo número: ');
console.log('número ingresado: '+n2);
const r = parseInt(n1) - parseInt(n2);
console.log('La resta es: '+r);

alert('La resta de los números '+ n1+ ' y '+ n2+ ' es: '+ r)