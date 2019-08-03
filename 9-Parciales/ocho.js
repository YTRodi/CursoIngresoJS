function mostrar()
{
    var letra;
    var numero;
    var contador = 0;
    var respuesta = "si";

    do
    {
        letra = prompt("ingrese una letra");

        numero = prompt("ingrese un numero");
        numero = parseInt(numero);

        while(isNaN(numero) || numero <-100 || numero >100) //validar entre -100 y 100;
        {
            numero = prompt("ERROR, ingresa un numero entre -100 y 100");
            numero = parseInt(numero);
        }

        respuesta = prompt("ingrese s para continuar o n para terminar");

        while(respuesta != "s" && respuesta != "n")
        {
            respuesta = prompt("ERROR, ingresa s para continuar o n para terminar");
        }
        
    }while(respuesta == "s") // == comparacion.

    document.write("")
}

/*
//EJEMPLO MAXIMO Y MINIMO.
var contardor;
contador=0;
anio == ...;
color = ...;
marca = ...;



if(contador == 0) //quiero saber que auto es el mas viejo
{
    menorAnio = anio;
    menorAnioMarca = marca
    mayorAnio = anio;
    mayorAnioColor = color; // creo una variable auxiliar para guardar el color (mayorAnioColor)

}else
{
    if(anio > mayorAnio)
    {
        mayorAnio = anio;
        mayorAnioColor = color; //del mayor necesito el color
    }
    if(anio > menorAnio)
    {
        menorAnio = anio;
        menorAnioMarca = marca; //
    }
}*/