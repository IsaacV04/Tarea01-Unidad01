//El combustible:
alert('Bienvenido!!!\n\nPrecione aceptar');

const kilometros = parseFloat(prompt('Ingrese los kilometros recorridos: '));
console.log(`Kilometros recorridos: ${kilometros}`);
const litros = parseFloat(prompt('Ingrese los litros consumidos: '));
console.log(`Litros consumidos: ${litros}`);

const litroxKm = litros / kilometros;
console.log(`Kilometro por litro: ${litroxKm}`);
alert(`Kilometro recorrido por litro de combustible: ${litroxKm}`);