/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Ejemplo ejercicio 3 parcial
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;

    precio1 = parseInt(precio1);

    precio2 = document.getElementById("PrecioDos").value;

    precio2 = parseInt(precio2);

    precio3 = document.getElementById("PrecioTres").value;

    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    alert(resultado);
}
function Promedio () 
{
    //ejemplo = ejercicio 8 E/S Datos
    var precioPinturaBlanca;
    var precioPinturaNegra;
    var precioPinturaGris;
    var totalPrecios;
    var totalProductos;
    var promedio;

    precioPinturaBlanca = document.getElementById("PrecioUno").value;

    precioPinturaBlanca = parseInt(precioPinturaBlanca);

    precioPinturaNegra = document.getElementById("PrecioDos").value;

    precioPinturaNegra = parseInt(precioPinturaNegra);

    precioPinturaGris = document.getElementById("PrecioTres").value;

    precioPinturaGris = parseInt(precioPinturaGris);

    //totalPrecios = precioPinturaBlanca, precioPinturaNegra, precioPinturaGris; (NO)

    totalPrecios = precioPinturaBlanca + precioPinturaNegra + precioPinturaGris;

    totalProductos = 3; //3

    promedio = totalPrecios / totalProductos;

    alert("Su promedio es " + promedio);
}
function PrecioFinal ()
{
    var precioClavosCortos;
    var precioClavosMedios;
    var precioClavosLargos;
    var precioTotal;
    var precioConIva;
    var final;

    precioClavosCortos = document.getElementById("PrecioUno").value;

    precioClavosCortos = parseInt(precioClavosCortos);

    //precioClavosCortos = precioClavosCortos * 21/100; (NO)

    precioClavosMedios = document.getElementById("PrecioDos").value;

    precioClavosMedios = parseInt(precioClavosMedios);

    //precioClavosMedios = precioClavosMedios * 21/100; (NO)

    precioClavosLargos = document.getElementById("PrecioTres").value;

    precioClavosLargos = parseInt(precioClavosLargos);

    //precioClavosLargos =precioClavosLargos * 21/100; (NO)

    precioTotal = precioClavosCortos + precioClavosMedios + precioClavosLargos;

    //Aplico el IVA al precio total.
    precioConIva = precioTotal * 21/100;

    //sumo precio total + el iva de los 3 precios.
    final = precioTotal + precioConIva;
    
    //final = parseInt(final); (NO)

    alert("Su precio final es " + final);
}