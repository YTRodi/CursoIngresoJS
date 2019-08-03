function mostrar()
{
    var precio;
    var descuento;
    var final;

    precio = prompt("Ingrese precio");

    descuento = prompt("Ingrese el % de descuento");

    final = precio - precio * descuento/100;

    document.getElementById("elPrecioFinal").value = final;

}