//Área de un triángulo:
alert('Bienvenido a la calculadora de área de triángulos!!\n\nPrecione aceptar');

const b = prompt('Ingrese la base de su triángulo: ');
console.log('La base es: '+b);
const h = prompt('Ingrese la altura de su triángulo: ');
console.log('La altura es: '+h);

const a = parseInt(b)*parseInt(h)/2;
console.log('El área es: '+a);

alert('El área del triángulo es: ' + a);