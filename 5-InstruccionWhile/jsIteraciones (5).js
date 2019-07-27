function mostrar()
{
    var sexo;

    sexo=prompt("Ingrese sexo f o m");

    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("ERROR, ingrese la letra correcta(f o m)");
    }
    if(sexo=="f")
    {
        sexo="Femenino";
    }
    else if(sexo=="m")
    {
        sexo="Masculino";
    }
    document.getElementById("Sexo").value = sexo;






}//FIN DE LA FUNCIÓN























/*var sexo = prompt("Ingresa el sexo f o m");

    while(sexo != "f" && sexo !="m")
    {
        sexo = prompt("Error, ingresa f o m");
    }
    if(sexo == "f")
    {
        sexo = "Femenino";
    }
    else if(sexo == "m")
    {
        sexo = "Masculino";
    }
    document.getElementById("Sexo").value = sexo;
*/

/*var sexo = prompt("ingrese f ó m .");

    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("ERROR, reingrese la letra correcta");
    }
    if (sexo =="f")
    {
        sexo = "femenino";
    }
    else if(sexo == "m")
    {
        sexo = "masculino";
    }

document.getElementById('Sexo').value=sexo; */

