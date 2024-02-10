//Atletas:
alert('Bienvenido al convertidos de minutos a horas!!!\n\nPrecione aceptar')

//Atleta 1
const entrada1 = prompt('Ingrese el tiempo en minutos y segundos separado por ":" del primer atleta: ');
const tiempo1 = entrada1.split(':');
const minutos1 = parseInt(tiempo1[0]);
const segundos1 = parseInt(tiempo1[1]);
console.log('Atleta 1:\n');
console.log(`Minutos: ${minutos1}`);
console.log(`Segundos: ${segundos1}`);

const tiempoTotal1 = minutos1 / 3600;

//Atleta 2
const entrada2 = prompt('Ingrese el tiempo en minutos y segundos separado por ":" del segundo atleta: ');
const tiempo2 = entrada2.split(':');
const minutos2 = parseInt(tiempo2[0]);
const segundos2 = parseInt(tiempo2[1]);
console.log('Atleta 2:');
console.log(`Minutos: ${minutos2}`);
console.log(`Segundos: ${segundos2}`);

const tiempoTotal2 = minutos2 / 3600;

//Tiempo total
console.log(`El tiempo total: ${tiempoTotal1}:${minutos1}:${segundos1}`);
console.log(`El tiempo total: ${tiempoTotal2}:${minutos2}:${segundos2}`);
alert(`El tiempo total en horas minutos y segundos del primer atleta es: ${tiempoTotal1}:${minutos1}:${segundos1}
El tiempo total en horas minutos y segundos del primer atleta es: ${tiempoTotal2}:${minutos2}:${segundos2}`);