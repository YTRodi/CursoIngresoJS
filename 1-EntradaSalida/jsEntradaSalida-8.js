/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numerodividendo;
    var numeroDivisor;
    var SacarResto;

    numeroDividendo = document.getElementById("numeroDividendo").value;
    numeroDivisor = document.getElementById("numeroDivisor").value;

    numerodividendo = parseInt(numerodividendo);
    numeroDivisor = parseInt(numeroDivisor);

    SacarResto = numeroDividendo % numeroDivisor;

    alert ("El resto es " + SacarResto);
       
}
