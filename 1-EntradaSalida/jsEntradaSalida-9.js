/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 % (*10/100)
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;

    sueldo = document.getElementById("sueldo").value;

    sueldo = parseInt(sueldo);

    resultado = sueldo + sueldo * 10/100;

    //hacer la operacion contraria, pasar Id (el valor que ingresemos) a la variable resultado.
    document.getElementById("resultado").value = resultado

    }



