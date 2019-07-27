function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
    var respuesta='si';
    
    numero=prompt('ingrese numero');
    numero=parseInt(numero);
    while(respuesta == true)
    {
        numero=prompt('ingrese numero');
        numero=parseInt(numero);
    }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN