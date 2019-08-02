function mostrar()
{
    // ingresar la marca del producto
    // el peso el cual debe ser entre 1 y 100 (validar)
    //la temperatura de almacenamiento(entre -30 y 30) hasta que el
    //usuario quiera e informar al terminar el ingreso por document.write

    var marca;
    var peso;
    var numero;
    var cantidad;
    var pesoFinal;
    var respuesta = "si";

    marca = prompt("Ingrese marca del producto");
    numero = prompt("Ingrese un numero para el peso")
    //peso = prompt("Ingrese el peso del producto");
    //peso = parseInt(peso);
    numero = parseInt(numero);

    //cantidad = 3;
    //producto = "galletitas";
    //marca = "pepito"; //|| "jorgito";
    //marca = parseInt(marca);

    while(marca == "pepito")
    {
        while(isNaN(numero))
        {
            numero = prompt("error, ingresa un numero entre 1 y 100");
            numero = parseInt(numero);
        }

        if(numero < 1)
        {
            numero = prompt("error, ingresa un numero entre 1 y 100");
            numero = parseInt(numero);
        }

    }

    
    document.write("b) la marca del producto más pesado");
}





/*while(respuesta != "no")
    {
        numero = prompt("Ingrese un numero (SERIA EL PESO)");
        numero = parseInt(numero);

        while(isNaN(numero))
        {
            numero = prompt("Ingrese un numero, no una letra (SERIA EL PESO)");
            numero = parseInt(numero);
        }

        if (numero>1)
        {

        }
    }*/


    /*switch(marca)
    {
        case "pepito":
            if(numero <1)
            {
                numero = prompt("Error, ingrese un numero entre 1 y 100");
                break;
            }
            else if(numero >100)
            {
                numero = prompt("Error, ingrese un numero entre 1 y 100");
                break;
            }
            else
            {
                alert("Usted ha ingresado un peso correcto");
            }
        
        case "Jorgito":
            if(numero <1)
            {
                numero = prompt("Error, ingrese un numero entre 1 y 100");
                break;
            }
            else if(numero >100)
            {
                numero = prompt("Error, ingrese un numero entre 1 y 100");
                break;
            }
            else
            {
                alert("Usted ha ingresado un peso correcto");
            }

    }*/

