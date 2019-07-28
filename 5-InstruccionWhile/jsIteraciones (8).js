function mostrar()
{   //FUNCIONA CON PROMPT!!!!   
    //ES obligatorio agregar el contador = contador + 1?
	var contador=0;
	var positivo=0;
    var negativo=1;
    //var numero=0; // numero va a ser el que nosotros ingresemos.
	
    var respuesta='si';

    while(respuesta == 'si')
    {
        numero=prompt('Ingrese un numero');
        numero=parseInt(numero);

        while(isNaN(numero)) // si no es un numero, muestro el siguiendo cartel.
        {
            numero=prompt('Ingresa un numero, no una letra')
            numero=parseInt(numero);
        }
        contador=contador + 1;//ESTO VA????
        
        if(numero>=0) //0 no es positivo ni negativo.
        {
            positivo = positivo + numero; // positivo += numero;
        }
        else
        {
            negativo = negativo * numero;
        }

        respuesta=prompt('si para continuar');
    }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

/*
//FUNCIONA // PREGUNTAR COMO HACER CON RESPUESTA = 'Si'
var contador=0;
var positivo=0;
var negativo=1;
var respuesta=true;

while(respuesta==true) //Hasta que usuario quiera.
{
    numero=prompt("Ingrese numero"); 
    numero=parseInt(numero);
    respuesta=confirm("Desea agregar mas numeros?");
    
    if(numero>=0) //si es numero que ingreso es mayor o igual a 0...
    {
        positivo = positivo + numero; // positivo += numero; // 0 = 0 + numero;
    }
    else
    {
        negativo = negativo * numero; //-1 = -1 * numero;
    }
} 

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;*/