function mostrar()
{
	var numero;

	numero=prompt("Ingresar numero entre 0 y 9");
	
	while(isNaN(numero)/*si no es NUMBER da NaN*/ || numero<=0 || numero>=10/*ASI INCLUYE EL 9*/)
	{
		numero=prompt("ERROR, ingrese un numero entre 0 y 9")
		
	}
	document.getElementById("Numero").value = numero;
	






	
	




}//FIN DE LA FUNCIÓN






/*var numero;

	numero = prompt("Ingresa numero entre 0 y 9 por favor");
	numero = parseInt(numero);

	while(numero<=0 || numero >=10)
	{
		numero = prompt("Error, reingresa un numero entre 0 y 9");
	}
	document.getElementById("Numero").value = numero

*/
//---------------------------------------------------------------------------------------------------------------

	/*var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero); // PARA QUE NO APAREZCA "LALALA"

	while(isNaN(numero)/*Si no es un numero da = NaN*/ /*|| numero >=10 || numero <=0)
	{
		//console.log(numero);
		numero = prompt("reingresa el numero"); //tengo que seguir preguntando.
		
	}
	document.getElementById("Numero").value = numero; */