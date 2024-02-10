//Multiplicación y División:
alert('Bienvenido a la multiplicación y división de números!!\n\nPrecione aceptar');

const n1 = prompt('Ingrese el primer número a operar: ');
console.log('número ingresado: '+n1);
const n2 = prompt('Ingrese el segundo número: ');
console.log('número ingresado: '+n2);
const m = parseInt(n1) * parseInt(n2);
const d = parseInt(n1) / parseInt(n2);
console.log('La multiplicación es: '+m);
console.log('La división es: '+d);

alert('La multiplicación de los números '+ n1+ ' y '+ n2+ ' es: '+ m + '\nLa división de los números '+ n1+ ' y '+ n2+ ' es: '+ d);