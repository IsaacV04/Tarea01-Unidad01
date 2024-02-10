//Calculadora simple:
alert('Bienvenido a esta caculadora simple!!!\n\nPrecione aceptar');

const n1 = parseFloat(prompt('Ingrese el primer número a operar: '));
console.log(`Primer número: ${n1}`);
const n2 = parseFloat(prompt('Ingrese el segundo número a operar: '));
console.log(`Segundo número: ${n2}`);

const opcion = parseInt(prompt('Ingrese la operación que desea hacer:\n1. Suma.\n2. Resta.\n3. Multiplicación.\n4. División.'));

switch(opcion)
{
    case 1: const suma = n1 + n2;
    console.log(`La suma es: ${suma}`);
    alert(`La respuesta a la suma es: ${suma}`);
    break;
    case 2: const resta = n1 - n2;
    console.log(`La resta es: ${resta}`);
    alert(`La respuesta a la resta es: ${resta}`);
    break;
    case 3: const multiplicacion = n1 * n2;
    console.log(`La multiplicación es: ${multiplicacion}`);
    alert(`La respuesta a la multiplicación es: ${multiplicacion}`);
    break;
    case 4: const division = n1 / n2;
    console.log(`La división es: ${division}`);
    alert(`La respuesta a la división es: ${division}`);
    break;
    
 }