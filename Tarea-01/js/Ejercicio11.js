//Verificación de un número primo:
alert('Bienvenido!!!\nVerifiquemos si un numero es primo o no\n\nPrecione aceptar');

const numero = parseInt(prompt('Ingrese un número: '));
console.log(`Número: ${numero}`);

function esPrimo(numero) 
{
    if (numero <= 1) 
    {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(numero); i++) 
    {
        if (numero % i === 0) 
        {
            return false;
        }
    }
    return true;
}

if (esPrimo(numero)) 
{
    console.log(`El número ${numero} es primo.`);
    alert(`El número ${numero} es primo.`);
} 
else 
{
    console.log(`El número ${numero} no es primo.`);
    alert(`El número ${numero} no es primo.`);
}

