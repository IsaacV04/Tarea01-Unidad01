//La compra:
alert('Bienvenido!!!\n\nPrecione aceptar');

const precio = parseFloat(prompt("Ingrese el precio del producto: "));
console.log(`Precio: ${precio}`);

const iva = precio * 0.12;
console.log(`El total del iva: ${iva}`);

const precioTotal = iva + precio;
console.log(`El precio total: ${precioTotal}`);
alert(`El precio total es de: ${precioTotal}`);