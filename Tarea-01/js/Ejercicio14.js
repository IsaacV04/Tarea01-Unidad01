//Comparación de cadenas:
alert('Bienvenido!!!\n\nPrecione aceptar');

const cadena1 = prompt('Ingrese una cadena de caracteres (Texto): ');
console.log(`Cadena 1: ${cadena1}`);
const cadena2 = prompt('Ingrese otra cadena de caracteres (Texto): ');
console.log(`Cadena 2: ${cadena2}`);

if (cadena1 === cadena2) {
    console.log(`Ambas cadenas miden lo mismo\nCadena 1: ${cadena1.length}\nCadena 2: ${cadena2.length}`);
    alert(`Ambas cadenas miden lo mismo\nCadena 1: ${cadena1.length}\nCadena 2: ${cadena2.length}`);
}
else {
    console.log(`Las cadenas no miden lo mismo\nCadena 1: ${cadena1.length}\nCadena 2: ${cadena2.length}`);
    alert(`Las cadenas no miden lo mismo\nCadena 1: ${cadena1.length}\nCadena 2: ${cadena2.length}`);
}