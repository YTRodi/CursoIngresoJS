function mostrar() //PAGINA 32
{
	var contador = 0;
	
	while(contador<10)
	{
		contador = contador + 1; //contador++;
		console.log(contador);
		//console.log("contador vale " + contador);
	}
	

}
//FIN DE LA FUNCIÓN
	//ANOTACIONES:

	/*var numero;
	var numeroDos;
	var suma;
	numeroDos=33;//false
	numeroDos="33";//false porque sigue siendo un numero
	numeroDos="lalala";// true , te devuelve sto cuando no es un numero
	suma=isNaN(numeroDos);// te va a dar false cuando sean numeros, sino da true ////isNaN = es verdad que esto es falso?
	
	numero=prompt("ingrese,");
	numero=parseInt(numero);

	//SACAR MAXIMO Y MINIMO.
	while(isNaN(numero)==true||numero<0||numero>10)
	{
		numero=prompt("ingrese,");
		numero=parseInt(numero);
	}
	contador=contador+1; //EL PRIMERO UE INGGRESAMOS ES EL MAXIMO Y EL MINIMO
	if(contadorr==1) //SI PONGO IF ES PORQUE QUIERO QUE NO SE REPITA (UN SOLO ERROR).
	{
		max=numero;
		min=numero;//que me ingresaron
	}else{
		if(numero<min)
		{
			min=numero;//es decir, 8
		}
		if(numero>max)
		{
			max=numero;
		}
		

		
	}
	
	acumulador=acumulador+numero;
---------------------------------------------------------------------------------------------------------	


var numero;
	var numeroDos;
	var suma;
	numeroDos=33;//false
	numeroDos="33";//false porque sigue siendo un numero
	numeroDos="lalala";// true , te devuelve sto cuando no es un numero
	suma=isNaN(numeroDos);// te va a dar false cuando sean numeros, sino da true ////isNaN = es verdad que esto es falso?
	
	numero=prompt("ingrese,");
	numero=parseInt(numero);
	while(isNaN(numero)==true||numero<0||numero>10)
	{
		numero=prompt("ingrese,");
		numero=parseInt(numero);
	}
	if(numero<0) //SI PONGO IF ES PORQUE QUIERO QUE NO SE REPITA (UN SOLO ERROR).
	{
		//es negativo
	}
	else
	{
		if(numero>0)
		{
			//positivo
		}else
		{
			//cero
		}
	}
	acumulador=acumulador+numero;*/
//------------------------------------------------------------------------------------------


/*var contador = 0;

	while(contador <10)
	{
		contador = contador + 1;  // contador++; lo suma despues de hacer la funcion
		console.log(contador);
		
	}
	console.log(10);


/*var contador = 0; lo declaro y lo defino (establezco el valor)}

	var contador = 0;

	while (contador <5)
	{
		contador = contador + 1;
		console.log("hola");
		//break;
	}
	console.log("chau");
	alert('iteración while');*/


/*---------------------------------------------------------------------------------------

var respuesta = "S"

	while (respuesta == "S")
	{
		console.log(respuesta);
		respuesta = prompt("S, para continuar");
		
	}
	console.log("chau");
	alert('iteración while');*/

/*------------------------------------------------------------------------------------------

var nota;
	nota = prompt("ingrese nota");//1)
	nota = parseInt(nota);        //1)
	while(nota >10)               //2)
	{
		console.log("hola");			
		nota = prompt("ERROR, reingrese"); //3)
		nota = parseInt(nota);             //3)
		//NO VA BREAK, PORQUE SINO ES IF.
	}
	console.log("chau");*/
