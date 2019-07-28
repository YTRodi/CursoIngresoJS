function mostrar()
{	//FUNCIONA PERO NO TERMINO DE ENTENDERLO!!!

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

}//FIN DE LA FUNCIÓN




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

