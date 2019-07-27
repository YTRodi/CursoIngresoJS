function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    var mensaje;

    switch(mesDelAño)
    {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
        {
            mensaje = "si, tiene 31 días.";
            break;
        }
        case "Febrero":
        {
            mensaje = "si, tiene 28 dias";
            break;
        }
        default:
        {
            mensaje = "si, tiene 30 años";
        }
        /*case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
        {
            mensaje = "si, tiene 30 días. ";
            break;
        }
        default:
        {
            mensaje = "si, tiene 28 días";
            break;
        }*/

    }
    alert(mensaje);








    //alert (mesDelAño);


	
	



}//FIN DE LA FUNCIÓN