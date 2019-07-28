function mostrar()
{	//FUNCIONA
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta == 'si')//si el numero que ingresamos es verdadero se ejecuta esto.
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		//contador=contador+1; // lo pongo al final asi toma a todos?...

		while(isNaN(numero))//si NO es un numero se ejecuta esto otro.
		{
			numero=prompt("ingrese un numero, no una letra");
			numero=parseInt(numero);
		}
		contador = contador + 1;
		acumulador = acumulador + numero; //acumulador += numero
		//contador = contador + 1; //contador++

		respuesta=prompt("ingrese si para agregar otro numero"); // si pongo otra cosa que si, termina la funcion.
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*
-----------------------------------------------------------------------------------------------------------
//FUNCIONA!
	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta==true) //Hasta que usuario quiera.
	{
		numero=prompt("Ingrese numero"); //va a ingresarlos infinitamente
		numero=parseInt(numero);//se parsea porque sale un string y lo tengo que convertir a NUMBER.
		respuesta=confirm("Desea agregar mas numeros?");//Necesito cortar con algo para que deje de aparecer "ingrese numero"
		contador = contador + 1; //es un metodo de break, para terminar de ejecutar una variable(aparte que suma de a 1).
		acumulador = acumulador + numero;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

*/

/*
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(contador<1) //Hasta que usuario quiera.
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("Desea agregar mas numeros?");
		contador = contador + 1; //es un metodo de break, para terminar de ejecutar una variable(aparte que suma de a 1).
		acumulador = acumulador + numero;
		
		//respuesta=prompt("Desea agregar mas numeros?");
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/

//-------------------------------------------------------------------------------------------

/*
	//CON CONFIRM DEVUELVE DATOS BOOLEANOS.
	//HECHO CON TRUE.
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



*/
	//HECHO CON PROMPT.
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