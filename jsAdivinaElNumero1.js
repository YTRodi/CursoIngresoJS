/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
//NO SALE!
function comenzar()
{
  
  //Genero el número RANDOM entre 1 y 100
  var numeroSecreto;

  numeroSecreto = Math.floor(Math.random()* (100 - 1)) + 1;
  console.log(numeroSecreto);
		//alert(numeroSecreto );
}

function verificar()
{
  var numero;
  var intentos;

  numero = document.getElementById('numero').value;
  numero = parseInt(numero);



  if(numeroSecreto == numero)
  {
    alert("Usted es un ganador y en " + /*intentos*/ + " intentos")
  }
  else if (numeroSecreto < numero) // falta para llegar
  {
    alert("te pasaste del numero secreto");
  }
  else if(numeroSecreto < numero)
  {
    alert("te falta para llegar del numero secreto");
  }
  




  document.getElementById('intentos') = intentos;
	
}