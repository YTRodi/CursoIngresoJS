function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	/*var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}*/
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
	document.write("3. cantidad de positivos: " + contadorNegativos + "<br>");
	document.write("4. cantidad de negativos: " + contadorNegativos + "<br>");
	document.write("5. cantidad de ceros: " + contadorCeros + "<br>");
	document.write("6. cantidad de pares: " + contadorPares + "<br>");
	document.write("7. promedio de positivos: " + promedioPositivos + "<br>");
	document.write("8. promedio de negativos: " + promedioNegativos + "<br>");

}//FIN DE LA FUNCIÓN


/*var contador =0;
var numeroNegativos = 0; // PARA QUE ARRANQUE DEL CERO.
var numeroPositivos = 0;
var numero;
var respsuesta = true;

while (respuesta == true)
{
	numero = prompt("ingrese un numero: ");
	numero = parseInt(numero);

	if ( numero >0)
	{
		contadorPositivos = contadorPositivos + 1 ; // contadorPositivos++;

	}else
	{
		if(numero<0)
		{
			contadorNegativos++
		}
	}




	respuesta = confirm("desea ingresar otro numero?");
}
 */