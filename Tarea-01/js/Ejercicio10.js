//Área de un círculo:
alert('Bienvenido!!\nVamos a calcular el área de un circulo\n\nPrecione aceptar');

const r = prompt('Ingrese el radio: ');
console.log(`Radio: ${r}`);

const area = Math.pow((Math.PI * parseFloat(r)),2);
console.log(area);
alert(`El área es: ${area}`);