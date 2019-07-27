function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;

    if(edad>=18)
    {
        alert("sos mayor de edad").value;
    }else
        {if(edad >=13 /*&& edad <=17*/){
            alert("sos adolescente");
        }else
        {
            alert("sos menor");
        }
    }

}//FIN DE LA FUNCIÓN