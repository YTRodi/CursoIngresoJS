function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    var mesDelAño;
    var mensaje;

    switch(mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        {
            mensaje = "Falta para el invierno."; // FORMA DE MOSTRAR EN UNICO ALERT LOS MENSAJES.
            //alert("Falta para el invierno." ); FORMA DE HACERLO BASICA PONIENDO ALERT EN TODOS LOS CASE.
            break;
        }
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        {
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            //alert("Ya pasamos el frio, ahora calor!!!.");
            break; 
        }
        default:
        {
            mensaje = "Abrigate que hace frio";
            //alert("Abrigate que hace frio");
            break;
        }

    }   

    alert (mensaje);




}//FIN DE LA FUNCIÓN