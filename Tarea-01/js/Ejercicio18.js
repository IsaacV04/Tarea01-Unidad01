//Tanques de agua:
alert('Bienvenido a la medición de rotoplas!!!\n\nPrecione aceptar.');

const tank1 = parseFloat(prompt('Ingrese de cuantos litros es su primer rotoplas: '))
console.log(`Litros del tanque: ${tank1}`);
const tank2 = parseFloat(prompt('Ingrese de cuantos litros es su primer rotoplas: '))
console.log(`Litros del tanque: ${tank2}`);

const totalTanks = parseFloat(tank1 + tank2);

function litroaMetro(metro)
{
    return metro / 1000;
}

function metroaPies(pies)
{
    return pies / 0.0283;
}

function piesaYardas(yardas)
{
    return yardas / 27;
}

const metroCubic = litroaMetro(totalTanks);
console.log(`Medida del rotoplas en metro cubico: ${metroCubic}`);
const pieCubic = metroaPies(metroCubic);
console.log(`Medida del rotoplas en pie cubico: ${pieCubic}`);
const yardaCubic = piesaYardas(pieCubic);
console.log(`Medida del rotoplas en yarda cubico: ${yardaCubic}`);
alert(`Medida del rotoplas: ${metroCubic} metro cubico. 
Medida del rotoplas: ${pieCubic} pie cubico.
Medida del rotoplas: ${yardaCubic} yarda cubico.`);

const consumoDom = totalTanks * 0.75;
console.log(`Consumo domestico: ${consumoDom}`);
alert(`Consumo domestico total: ${consumoDom} Litros.`);
const consumoDomMetros = (consumoDom / 1000);
const consumoDomPies = (consumoDomMetros / 0.0283);
console.log(`Consumo domestico en metros cubicos: ${consumoDomMetros}`);
console.log(`Consumo domestico en pies cubicos: ${consumoDomPies}`);
alert(`Consumo domestico: ${consumoDomMetros} metros cubicos.
Consumo domestico: ${consumoDomPies} pies cubicos.`);

const consumoRiego = totalTanks * 0.25;
console.log(`Consumo de riego: ${consumoRiego}`);
alert(`Consumo de riego: ${consumoRiego} Litros.`);
const consumoRiegoMetros = (consumoRiego / 1000);
const consumoRiegoPies = (consumoRiegoMetros / 0.0283);
console.log(`Consumo de riego en metros cubicos: ${consumoRiegoMetros}`);
console.log(`Consumo de riego en pies cubicos: ${consumoRiegoPies}`);
alert(`Consumo de riego: ${consumoRiegoMetros} metros cubicos.
Consumo de riego: ${consumoRiegoPies} pies cubicos.`);
