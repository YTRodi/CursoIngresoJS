function mostrar()
{
	//anotaciones:
	//no me funciona el contador de ceros

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var contadorPositivos = 0; // = sumaPositivos y sumaNegativos.
	var contadorNegativos = 0; // lo igualo a 0 porque desde ahi comienzan., SI NO TENGO EL 0 SALE NaN
	var acumuladorPositivos = 0; // donde se guardan la suma de los positivos y negativos.
	var acumuladorNegativos = 0;
	//var cantidadPositivos - SON LOS CONTADORES tanto positivos como negativo.
	//var cantidadNegativos 
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;

	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt('ingrese numero');
		numero=parseInt(numero);
		
		while(isNaN(numero))
		{
			numero=prompt('ingrese un numero, NO una letra')
			numero=parseInt(numero);
		}
		//contador = contador + 1;

		if(numero > 0)//positivos. numero mayor a 0
		{
			contadorPositivos = contadorPositivos + 1;
			acumuladorPositivos = acumuladorPositivos + numero;
		}
		else if(numero < 0)//negativos. numero menor a 0
		{
			contadorNegativos = contadorNegativos + 1;
			acumuladorNegativos = acumuladorNegativos + numero;
		}
		else
		{
			contadorCeros = contadorCeros + 1; //contadorCeros++;
		}

		if(numero%2 == 0)
		{
			contadorPares = contadorPares + 1;
		}

		respuesta=prompt('enter para continuar, no para terminar');
	}

	if(contadorPositivos!=0)
	{
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	else // si no se ingresan numeros POSITIVOS te muestra que no se ingresaron promedios positivos
	{
		promedioPositivos = 'No se ingresaron promedios positivos';
	}

	if(contadorNegativos!=0)
	{
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	else // si no se ingresan numeros NEGATIVOS te muestra que no se ingresaron promedios negativos
	{
		promedioNegativos = 'No se ingresaron promedios negativos'
	}

	
	//respuesta=prompt('enter para continuar, no para terminar');

	document.write('1) suma de positivos: ' + acumuladorPositivos + '<br>');
	document.write('2) suma de negativos: ' + acumuladorNegativos + '<br>');
	document.write('3) cantidad de positivos: ' + contadorPositivos + '<br>');
	document.write('4) cantidad de negativos: ' + contadorNegativos + '<br>');
	document.write('5) cantidad de ceros: ' + contadorCeros + '<br>');
	document.write('6) cantidad de pares: ' + contadorPares + '<br>');
	document.write('7) promedio positivos: ' + promedioPositivos + '<br>');
	document.write('8) promedio negativos: ' + promedioNegativos + '<br>');
	document.write('9) diferencia entre positivos y negativos : ' + (acumuladorPositivos - acumuladorNegativos) + '<br>'); //Diferencia entre positivos y negativos. es decir lo acumulado en los numeros positivos - lo acumulado en los numeros negativos.

}//FIN DE LA FUNCIÓN

/*
------------------------------------------------------------------------------------------------------
HECHO CON CONFIRM:
	var contador=0;
	var contador =0;
	var contadorNegativos = 0; // PARA QUE ARRANQUE DEL CERO.
	var contadorPositivos = 0; // SI NO TENGO EL 0 SALE NaN
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0; 
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos; // lo cargo, no lo inicilializo // lavo un balde para levantar tierra, es eficaz pero no eficiente.
	var promedioNegativos;
	var numero;
	var respuesta = true;

	while (respuesta == true)
	{
		numero = prompt("ingrese un numero: ");
		numero = parseInt(numero);

		if (numero >0)
		{
			contadorPositivos = contadorPositivos + 1 ; // contadorPositivos++;
			acumuladorPositivos = acumuladorPositivos + numero; // acumuladorPositivos += numero;

		}else
		{
			if(numero<0)
			{
				contadorNegativos++
				acumuladorNegativos = acumuladorNegativos + numero;
			}
			else
			{
				contadorCeros ++;
			}
		}

		if(numero%2==0)
		{
			contadorPares++;
		}

		respuesta = confirm("desea ingresar otro numero?");
	}
	
	if(contadorPositivos!=0)
	{
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	else
	{
		promedioPositivos="no se ingresaron promedios positivos";
	}
	if(contadorNegativos != 0)
	{
		promedioNegativos= acumuladorNegativos / contadorNegativos;
	}
	else
	{
		promedioNegativos = "no se ingresaron promedios negativos";
	}
	
	//promedioNegativos = acumuladorNegativos / contadorNegativos; // NO VA!
	// se puede dividir por 0 y da NaN. // si el contador es 0 no se puede dividir.


	//document.write //escribe en el HTML
	document.write("1. suma de positivos: " + acumuladorPositivos + "<br>"); //<br> =  pasa a otra lina en HTML
	document.write("2. suma de negativos: " + acumuladorNegativos + "<br>");
	document.write("3. cantidad de positivos: " + contadorPositivos + "<br>");
	document.write("4. cantidad de negativos: " + contadorNegativos + "<br>");
	document.write("5. cantidad de ceros: " + contadorCeros + "<br>");
	document.write("6. cantidad de pares: " + contadorPares + "<br>");
	document.write("7. promedio de positivos: " + promedioPositivos + "<br>");
	document.write("8. promedio de negativos: " + promedioNegativos + "<br>");
*/
//---------------------------------------------------------------------------------------