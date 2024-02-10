//Verificación de contraseña:

const contraseñaIngresada = prompt('Ingrese la contraseña más segura del mundo (contraseña): ');

const contraseña = 'contraseña';

if (contraseñaIngresada === contraseña) 
{
    alert('Contraseña correcta, bienvenido.');
}
else 
{
    alert('¡¡Contraseña incorrecta!!');
}