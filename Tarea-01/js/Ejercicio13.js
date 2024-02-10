//Cambio de moneda:
alert('Bienvenido!!!\nVamos a cambiar la moneda\n\nPrecione aceptar');

const dolares = parseFloat(prompt('Ingrese la cantidad en dolares que desee cambiar; '));
console.log(`Cantidad: ${dolares}`);

const lempiras = dolares * 24.73;
console.log(`Conversión: ${lempiras}`);
alert(`Su dinero en lempiras es: ${lempiras}`);