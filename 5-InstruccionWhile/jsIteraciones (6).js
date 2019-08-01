function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	// inicializacion; condicion; incremento/decremento;      //i = contador;
	for(var i=0; i <5; i++)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador = acumulador + numero; //acumulador+=numero
	}

	while(contador<5)
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		contador = contador + 1; //es un metodo de break, para terminar de ejecutar una variable(aparte que suma de a 1).
		acumulador = acumulador + numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador;

}//FIN DE LA FUNCIÓN


/*
var contador = 0;
	var acumulador = 0;
	var numero;
	
	while(contador <5)
	{
		numero = prompt("Ingrese 5 numeros");
		numero = parseInt(numero);
		
		contador = contador + 1; //contador ++:
		acumulador = acumulador + numero;
		
	}
	//respuesta = confirm("Desea seguir ingresando numeros?"); //NO SE COMO USAR EL CONFIRM.
	//acumulador = acumulador + contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
*/

//--------------------------------------------------------------------------------------------

/*{

	var contador=0;	  // cuenta
	var acumulador=0; // me permite hacer sumatorias - //diferencia: en la sintaxias de cada uno
	var numero; 

	while(contador<5)
	{
		numero = prompt("Ingresar 5 numeros");
		numero = parseInt(numero);
		respuesta = confirm("desea ingresar otro numero=");
		acumulador = acumulador+contador;
	}
	//acumulador = acumulador+contador;
	//promedio = acumulador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //promedio = acumulador / contador; //VA ABAJO DE TODO ( AL FINAL)
}//FIN DE LA FUNCIÓN


/*cont=cont+1;     //cont = variable // +1 = incremento constante(de a uno).
//TIENE QUE VER CON CNATIDADES

acumulador = acumulado + var   //acumulador = el saldo de la sube. // depende de cuanta plata quiera cargar el usuario 
//LO USO DE FORMA ACUMULATIVA, VOY AUMENTANDO MAS A MEDIDA QUE INGRESO DATOS.*/
