/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{   //IF + SWITCH
    var cantidad;
    var marca;
    var precio;
    var precioDescuento;
    var precioBruto;
    var precioFinal;
    var impuesto;

    cantidad = document.getElementById('Cantidad').value;
    cantidad = parseInt(cantidad);//Lo paseo asi me devuelve valores en  NUMBER no en STRING.
    marca = document.getElementById('Marca').value;

    precio=35;

    if(marca=="ArgentinaLuz")
    {
        switch(cantidad)
        {
            case 1: //1 lamparita
            case 2: //2 lamparitas
                descuento=0;
                break;
            case 3: //3 lamparitas... etc etc
                descuento=15;
                break;
            case 4:
                descuento=25;
                break;
            case 5:
                descuento=40;
                break;
            default:
            {
                descuento=50;
            } 
        }
    }
    else if(marca=="FelipeLamparas")
    {
        switch(cantidad)
        {
            case 1:
            case 2:
                descuento=0;
                break;
            case 3:
                descuento=10;
                break;
            case 4:
                descuento=25;
                break;
            case 5:
                descuento=30;
                break;
            default:
            {
                descuento=50;
            } 
        }
    }
    else
    {
        switch(cantidad)
        {
            case 1:
            case 2:
                descuento=0;
                break;
            case 3:
                descuento=5;
                break;
            case 4:
                descuento=20;
                break;
            case 5:
                descuento=30;
                break;
            default:
            {
                descuento=50;
            }
        }
    }
    
    precioBruto = precio * cantidad;
    precioDescuento = precioBruto * descuento/100; //CREO VALORES EN CADA UNO Y ACA SE DIVIDE AUTOMATICAMENTE POR 100.
    precioFinal = precioBruto - precioDescuento;

    if(precioFinal>120)
    {
        impuesto=precioFinal*10/100;
        precioFinal=precioFinal + impuesto;
        alert("IIBB Usted pago " + impuesto + " de impuesto.");
    }

    document.getElementById("precioDescuento").value=precioFinal;
}
/*--------------------------------------------------------------------------------------
    //SWITCH + IF.
    var cantidad;
    var marca;
    var precio;
    var precioDescuento;
    var precioBruto;
    var precioFinal;
    var impuesto;

    cantidad = document.getElementById('Cantidad').value;
    cantidad = parseInt(cantidad);//Lo paseo asi me devuelve valores en  NUMBER no en STRING.
    marca = document.getElementById('Marca').value;

    precio=35;

    switch(marca)
    {
        case "ArgentinaLuz":
            {
                if(cantidad<=2)
                {
                    descuento=0;
                }
                else if(cantidad==3)
                {
                    descuento=15;
                }
                else if(cantidad==4)
                {
                    descuento=25;
                }
                else if(cantidad==5)
                {
                    descuento=40;
                }
                else // 6 O MAS
                {
                    descuento=50;
                }
            }
            break;
        case "FelipeLamparas":
            {
                if(cantidad<=2)
                {
                    descuento=0;
                }
                else if(cantidad==3)
                {
                    descuento=10;
                }
                else if(cantidad==4)
                {
                    descuento=25;
                }
                else if(cantidad==5)
                {
                    descuento=30;
                }
                else //6 O MAS
                {
                    descuento=50;
                }
            }
        case "FelipeLamparas":
            {
                if(cantidad<=2)
                {
                    descuento=0;
                }
                else if(cantidad==3)
                {
                    descuento=10;
                }
                else if(cantidad==4)
                {
                    descuento=25;
                }
                else if(cantidad==5)
                {
                    descuento=30;
                }
                else //6 O MAS
                {
                    descuento=50;
                }
            }
            //break; // NO SE SI HACE FALTA EL BREAK, CREO QUE NO.
        case "JeLuz":
        case "Hazlluminacion":
        case "Osram":
            {
                if(cantidad<=2)
                {
                    descuento=0;
                }
                else if(cantidad==3)
                {
                    descuento=5;
                }
                else if(cantidad==4)
                {
                    descuento=20;
                }
                else if(cantidad==5)
                {
                    descuento=30;
                }
                else //6 O MAS
                {
                    descuento=50;
                }
            }
            
    }
    precioBruto = precio * cantidad;
    precioDescuento = precioBruto * descuento/100; //CREO VALORES EN CADA UNO Y ACA SE DIVIDE AUTOMATICAMENTE POR 100.
    precioFinal = precioBruto - precioDescuento;

    if(precioFinal>120)
    {
        impuesto=precioFinal*10/100;
        precioFinal=precioFinal + impuesto;
        alert("IIBB Usted pago " + impuesto + " de impuesto.");
    }

    document.getElementById("precioDescuento").value=precioFinal;

*/
/*--------------------------------------------------------------------------------------
    //TODO SWITCH.
    var cantidad;
    var marca;
    var precio;
    var precioDescuento;
    var precioBruto;
    var precioFinal;
    var impuesto;   

    cantidad = document.getElementById('Cantidad').value;
    cantidad = parseInt(cantidad);//Lo paseo asi me devuelve valores en  NUMBER no en STRING.
    marca = document.getElementById('Marca').value;

    precio = 35;//Defino el precio de las lamparas.

    switch(marca)
    {
        case 'ArgentinaLuz':
            {
                switch(cantidad)
                {
                    case 1: //1 lamparita
                    case 2: //2 lamparitas
                        descuento=0;
                        break;
                    case 3: //3 lamparitas... etc etc
                        descuento=15;
                        break;
                    case 4:
                        descuento=25;
                        break;
                    case 5:
                        descuento=40;
                        break;
                    default:
                    {
                        descuento=50;
                    }                                                         
                }
                break;
            }
        case 'FelipeLamparas':
            {
                switch(cantidad)
                {
                    case 1:
                    case 2:
                        descuento=0;
                        break;
                    case 3:
                        descuento=10;
                        break;
                    case 4:
                        descuento=25;
                        break;
                    case 5:
                        descuento=30;
                        break;
                    default:
                    {
                        descuento=50;
                    }   
                }          
                break;  
            }
        case "JeLuz":
        case "Hazlluminacion":
        case "Osram":
            {
                switch(cantidad)
                {
                    case 1:
                    case 2:
                        descuento=0;
                        break;
                    case 3:
                        descuento=5;
                        break;
                    case 4:
                        descuento=20;
                        break;
                    case 5:
                        descuento=30;
                        break;
                    default:
                    {
                        descuento=50;
                    }   
                }
                break;
            }         
    }

    precioBruto = precio * cantidad;
    precioDescuento = precioBruto * descuento/100; //CREO VALORES EN CADA UNO Y ACA SE DIVIDE AUTOMATICAMENTE POR 100.
    precioFinal = precioBruto - precioDescuento;

    if(precioFinal>120)//Si el precioFinal supera a los $120 se le cobra un impuesto del 10% mas y se informa a traves de un alert.
    {
        impuesto = precioFinal*10/100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago " + impuesto + " de impuesto.");
    }
    document.getElementById('precioDescuento').value=precioFinal;
*/
/*--------------------------------------------------------------------------------------
//TODO IF.
var cantidad;
    var precioLampara;
    var descuento;
    var precioDescuento;
    var precioFinal;
    var marca;
    var impuesto;
    
    cantidad = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);
    precioLampara = 35;
    

    if(cantidad >=6)//A
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 50/100; //105 BIEN
        precioFinal = cantidad - precioDescuento;

    }
    else if(cantidad == 5 && marca == "ArgentinaLuz")//B - solo ArgentinaLuz.
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 40/100;
        precioFinal = cantidad - precioDescuento;

    }
    else if(cantidad == 5 && marca != "ArgentinaLuz")//B - != desigual a ArgentinaLuz.
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 30/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca == "ArgentinaLuz")//C - ArgentinaLuz 25%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 25/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca == "FelipeLamparas")//C - FelipeLamparas 25%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 25/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 4 && marca != "ArgentinaLuz" && "FelipeLamparas")//C - el resto 20%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 20/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca == "ArgentinaLuz")//D - ArgentinaLuz 15%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 15/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca == "FelipeLamparas")//D - FelipieLamparas 10%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 10/100;
        precioFinal = cantidad - precioDescuento;
    }
    else if(cantidad == 3 && marca != "ArgentinaLuz" && "FelipeLamparas")//D - el resto 5%
    {
        cantidad = precioLampara * cantidad;
        precioDescuento = cantidad * 5/100;
        precioFinal = cantidad - precioDescuento;
    }
    if(precioFinal>120)
    {
        impuesto = precioFinal*10/100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago " + impuesto + " de impuesto.");
    }
    document.getElementById("precioDescuento").value = precioFinal;

*/
