function mostrar()
{ 
    //HECHO!
    var nota;
    var sexo;
    //var numero;
    var contador = 0;
    var acumulador = 0;
    var promedio;
    var notaMinima; //minimo
    var sexoMinimo;
    var contadorVarones = 0;

    //nota = prompt("Ingrese nota");
    //nota = parseInt(nota);

    //sexo = prompt("Ingrese sexo");

    while(contador < 2)
    {
        nota = prompt("Ingrese nota");
        nota = parseInt(nota); 
        contador ++;
        acumulador = acumulador + nota;
        //promedio = acumulador/2 // fuera del bucle

        while(isNaN(nota) || nota <1 || nota >10) // nota y validacion
        {
            nota = prompt("ingrese una nota de 0 a 10");
            nota = parseInt(nota);
        }

        sexo = prompt("ingrese sexo"); // sexo y validacion
        while(sexo == "f" && sexo == "m")
        {
            while(sexo != "m" && sexo != "f")
            {
            sexo = prompt("error, ingresa 'f' o 'm' ");
            }
        }

        if(contador == 1) // va a empezar en 1 por el contador ++
        {
            notaMinima = nota;
            sexoMinimo = sexo;
        }
        else if(nota < notaMinima)
        {
            notaMinima = nota;
            sexoMinimo = sexo;
            notaMinima=parseInt(notaMinima);
        }

        if(sexo == "m" && nota >=6) // si sexo es m y notta es mayor o igual a 6. muestro la cantidad de varones
        {
            contadorVarones++; //contadorVarones = contadorVarones + 1; 
            //si entra le sumo 1.
        }

    }

    

    promedio = acumulador/2;
    
    alert("a) el promedio es " + promedio);
    alert("b) la nota mas baja " + notaMinima + " y el sexo es " + sexoMinimo);
    alert("c) la cantidad de varones: " + contadorVarones + " con nota mayor o igual a 6");
    
    //console.log("el alumno 1 recibio una nota de " + nota + " y es de sexo " + sexo); //NO
    //console.log("las notas son: " + nota);  
}
