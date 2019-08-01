function mostrar()
{
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var esPrimeraIteracion = true;

	do
	{
		numero = prompt("ingrese un numero");
		numero = prompt(numero);

		//VALIDAR UN NUMERO Y RANGO!!! 
		while(isNaN(numero) || numero < -10 || numero > 10) // si el IsNan(numero) es una letra es VERDADERO y entra al bucle while (ERROR. Debe ingresar un numero entre -10 y 10.)
		{
			numero = prompt("ERROR. Debe ingresar un numero entre -10 y 10");
			numero = parseInt(numero); 
		}

		if(esPrimeraIteracion === true)
		{
			maximo = numero; //la primera vez es el maximo y el minimo. (porque es el unico numero que hay)
			minimo = numero;
			esPrimeraIteracion = false;
		}
		else //segunda,3ra,4ta etc etc - iteracion
		{
			if(numero > maximo) // el segundo numero que ingreso es mayor al numero maximo ya establecido.
			{
				maximo = numero;
			}
			
			if(numero < minimo)
			{
				minimo = numero;
			}
		}
		respuesta = confirm("desea continuar?");

	}while(respuesta);

	/*document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;*/

	document.write("Maximo =" + maximo + "<br>");
	document.write("Minimo =" + minimo + "<br>");


}//FIN DE LA FUNCIÓN

/*
-----------------------------------------------------------------------------------
//UNA POSIBILIDAD ES ESTA.
var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var esPrimeraIteracion = true;

	do
	{
		numero = prompt("ingrese un numero");
		while(isNaN(numero) || parseInt(numero) < -10 || parseInt(numero) > 10) // si el IsNan(numero) es una letra es VERDADERO y entra al bucle while (ERROR. Debe ingresar un numero entre -10 y 10.)
		{
			numero = prompt("ERROR. Debe ingresar un numero entre -10 y 10");
		}
		numero = parseInt(numero);

		if(esPrimeraIteracion === true)
		{
			maximo = numero; //la primera vez es el maximo y el minimo. (porque es el unico numero que hay)
			minimo = numero;
			esPrimeraIteracion = false;
		}
		else //segunda,3ra,4ta etc etc - iteracion
		{
			if(numero > maximo) // el segundo numero que ingreso es mayor al numero maximo ya establecido.
			{
				maximo = numero;
			}
			
			if(numero < minimo)
			{
				minimo = numero;
			}
		}
		respuesta = confirm("desea continuar?");

	}while(respuesta);

	//document.getElementById('maximo').value = maximo;
	//document.getElementById('minimo').value = minimo;

	document.write("Maximo =" + maximo + "<br>");
	document.write("Minimo =" + minimo + "<br>");
*/


/*
-----------------------------------------------------------------------------------
var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var esPrimeraIteracion = true;

	while(respuesta!='no')
	{
		numero = prompt("ingrese un numero");
		while(isNaN(numero))
		{
			numero = prompt("ERROR, ingresa un numero, no una letra");
			numero = parseInt(numero);
		}
		numero = parseInt(numero);

		if(esPrimeraIteracion === true)
		{
			maximo = numero; //la primera vez es el maximo y el minimo. (porque es el unico numero que hay)
			minimo = numero;
			esPrimeraIteracion = false;
		}
		else //segunda,3ra,4ta etc etc - iteracion
		{
			if(numero > maximo) // el segundo numero que ingreso es mayor al numero maximo ya establecido.
			{
				maximo = numero;
			}
			
			if(numero < minimo)
			{
				minimo = numero;
			}
		}
		respuesta = prompt('ingrese "no" para finalizar')
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
*/


/*
----------------------------------------------------------------------------------
	//FUNCIONA PERO NO TERMINO DE ENTENDERLO!!!

	var contador=0;
	// declarar variables
	var numero;
	var minimo;
	var maximo;
	
	var respuesta='si';

	while(respuesta!='no')// CON ESTO FINALIZO QUE ME DEJE DE PREGUNTAR
	{
		numero=prompt('ingrese un numero');
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt('ingrese un numero, NO una letra');
			numero=parseInt(numero);
		}
		contador=contador+1;

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo = numero;
			}
			if(numero<minimo)
			{
				minimo = numero;
			}
		}

		respuesta=prompt('enter para continuar, no para terminar') //es al reves, si pondriamos "si para continuar". en este caso es lo contrario.
	}
document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;

//PARA MOSTRARLO EN HTML:
/*
document.write('1)numero maximo: ' + maximo + '<br>');
document.write('2)numero minimo: ' + minimo + '<br>');
*/




/*
!!!!OPERACION ORIGINAL!!!!

var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}
*/

/*
----------------------------------------------------------------------------------------------------------------
//REVISAR EN CLASE

	var contador=0;
	// declarar variables
	var numero;
	var numeroMaximo;
	var numeroMinimo;
	
	var respuesta='si';

	while(respuesta!='no') // CON ESTO FINALIZO QUE ME DEJE DE PREGUNTAR
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero); // CREO QUE ESTA DE MAS YA QUE isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.

		while(isNaN(numero))//mientras el numero sea //isNaN = es verdad que esto es falso?
		{
			numero = prompt("ingrese SI o SI un numero para continuar")
			numero = parseInt(numero);
		}
		contador ++;//EL PRIMERO UE INGGRESAMOS ES EL MAXIMO Y EL MINIMO

		//SI PONGO IF ES PORQUE QUIERO QUE NO SE REPITA (UN SOLO ERROR).
		if(contador == 1)//el numero minimo siempre va a ser 1, dado que se lo da el contador igualandolo a 1.
		{
			numeroMaximo = numero;
			numeroMinimo = numero; // que me ingresaron
		}else{
			if(numero < numeroMinimo) // si el numero es menor al numeroMinimo (osea 1)
			{
				numeroMinimo = numero; // entonces, el numeroMinimo es igual al numero.
			}
			else if(numero > numeroMaximo)// si no, el numero es mayor al numeroMaximo
			{
				numeroMaximo = numero;
			}
		}
		respuesta = prompt("Escriba no para terminar");
	}
	document.getElementById('maximo').value = numeroMaximo;
	document.getElementById('minimo').value = numeroMinimo;
*/

