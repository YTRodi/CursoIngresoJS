/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var resultado;
    //tomamos los datos por ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //los transformamos a enteros (parseint)
    //por que? porque el valor document.getelementById("numeroUno").value es un STRING.
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    //sumamos
    resultado = numero1 + numero2;

    //
    alert("La suma total es " + resultado);

}

