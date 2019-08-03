function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;

    primerNumero = prompt("ingrese el primer numero");
    segundoNumero = prompt("ingrese el segundo numero");

    if(primerNumero == segundoNumero)
    {
        resultado = "sus numeros son iguales " + primerNumero + segundoNumero; // si agrego un string antes, lo demas se concatena.
    }else
    {
        if(primerNumero > segundoNumero) //Si el primero es mayor, los resto
        {
            resultado = primerNumero - segundoNumero;
        }else
        {
            if(resultado > 10)// si la suma es mayor a 10... aviso que supero a 10
            {
                alert("LA SUMA ES " + resultado + " Y TE PASASTE DE 10");//NO FUNCA ESTO!!!!
            }else
            {
                primerNumero = parseInt(primerNumero); // se parsea antes, asi no se concatena.
                segundoNumero = parseInt(segundoNumero);

                resultado = primerNumero + segundoNumero; //Si el primero es menor, los sumo.
            }
            
        }
    }
    alert(resultado);
}
