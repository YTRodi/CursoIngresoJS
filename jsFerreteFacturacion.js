/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    //TOMO LOS DATOS POR ID.
    precio1 = document.getElementById('PrecioUno').value;
    precio2 = document.getElementById('PrecioDos').value;
    precio3 = document.getElementById('PrecioTres').value;
    
    //LOS PARSEO (Los paso a enteros)
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    alert(resultado);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;
    var totalPrecios;

	//TOMO LOS DATOS POR ID.
    precio1 = document.getElementById('PrecioUno').value;
    precio2 = document.getElementById('PrecioDos').value;
    precio3 = document.getElementById('PrecioTres').value;
    
    //LOS PARSEO (Los paso a enteros)
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    totalPrecios = 3;
    promedio = precio1 + precio2 + precio3;

    alert(promedio/totalPrecios);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var iva;
    var precioTotal;
    var precioFinal;

	//TOMO LOS DATOS POR ID.
    precio1 = document.getElementById('PrecioUno').value;
    precio2 = document.getElementById('PrecioDos').value;
    precio3 = document.getElementById('PrecioTres').value;
    
    //LOS PARSEO (Los paso a enteros)
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    iva = 21/100;

    precioTotal = precio1 + precio2 + precio3;
    precioFinal = precioTotal * iva;
    alert(precioFinal);
}