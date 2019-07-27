function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;

switch(mesDelAño){
    case "Enero":
    alert("que comiences bien el año");
    break;
    case "Marzo":
    alert("a clases!!");
    break;
    case "Julio":
    alert("se vienen las vacaciones");
    break;
    case "Diciembre":
    alert("felices fiestas");
    break;
}

}//FIN DE LA FUNCIÓN

/*if(edad >18 || edad <12)

como se hace en switch -----> //no es para resolver el IF

switch(mesDelAño)
{
    case "1":
    case "2":
    alert("mismo");
    break;
}*/