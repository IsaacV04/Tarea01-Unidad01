//Unidades de medida:
alert('Bienvenido!!!\n\nPrecione aceptar');

const medidaPies = parseFloat(prompt('Ingrese una medida en pies: '));
console.log(`Medida en pies: ${medidaPies}`);
const medidaMetros = parseFloat(prompt('Ingrese una medida en metros: '));
console.log(`Medida en metros: ${medidaMetros}`);

function PiesaMetros(pies) 
{
    return pies * 0.3048;
}

function MetrosaPulgadas(metros) 
{
    return metros / 0.0254;
}

function PiesaYardas(pies) 
{
    return pies / 3;
}

function MetrosaMillas(metros) 
{
    return metros / 1609;
}

const sumaMetros = PiesaMetros(medidaPies) + medidaMetros;

const sumaPulgadas = MetrosaPulgadas(sumaMetros);

const sumaYardas = PiesaYardas(medidaPies) + sumaMetros;

const sumaMillas = MetrosaMillas(sumaMetros);

console.log("Suma en pulgadas:", sumaPulgadas);
console.log("Suma en yardas:", sumaYardas);
console.log("Suma en metros:", sumaMetros);
console.log("Suma en millas:", sumaMillas);
alert(`Suma en pulgadas: ${sumaPulgadas}\nSuma en yardas: ${sumaYardas}
Suma en metros: ${sumaMetros}\nSuma en millas: ${sumaMillas}`)