//Verificación de par o impar:
alert('Bienvenido!!\nVerifiquemos si el numero que ingreses es par o impar\n\nPrecione aceptar');

const numero = prompt('Ingrese un número: ');
console.log(`Numero: ${numero}`);

if (numero % 2 === 0) {
    alert(`El numero ${numero} es par`);
}

else {
    alert(`El numero ${numero} es impar`) ;
}

