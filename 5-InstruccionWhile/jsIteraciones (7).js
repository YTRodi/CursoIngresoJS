
function mostrar()
{
	//CON CONFIRM DEVUELVE DATOS BOOLEANOS.
	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta == true)
	{
		numero = prompt("ingrese numero")
		numero = parseInt(numero);
		respuesta = confirm('desea ingresar mas numeros?');
		contador ++; // contador = contador + 1;
		acumulador = acumulador + numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

	/*var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == 'si')
	{
		numero = prompt("ingrese numero")
		numero = parseInt(numero);
		contador ++; // contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = prompt("Desea ingresar mas numeros?")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;*/