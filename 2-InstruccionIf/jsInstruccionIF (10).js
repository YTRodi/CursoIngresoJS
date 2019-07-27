function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var notaRandom;

	notaRandom = Math.floor(Math.random()*(11-1))+1;

	if(notaRandom >=9)
	{
		alert("Te sacaste un " + notaRandom + " Excelente!!");
	}else
	{
		if(notaRandom <=4)
		{
			alert("Te sacaste un " + notaRandom + " Vamos, la proxima se puede!!");
		}else
		{
			alert("Te sacaste un " + notaRandom + " Aprobaste!! ");
		}
	}
	

}//FIN DE LA FUNCIÓN