function calculadesc()
{ 
    var entrada=200;
    var aux;
    console.log("valor de entrada es :"+entrada);
    var  acu,desc,preciofin;
    preciofin=1
    var cant_entradas=document.getElementById("cantidad").value;
    console.log("el elemento es :"+cant_entradas);
    var select=document.getElementById("operacion");
    var select_activo=select.options[select.selectedIndex].value;
    console.log("la opcion elegida es :"+select_activo);
    switch(select_activo){
        case "0":
            acu=entrada * cant_entradas;
            preciofin=acu;
            break;
        case "1":
           acu=entrada * cant_entradas;
           desc=acu * 0.8;
           preciofin=acu-desc;
           console.log("el precio final es :"+preciofin);
           break;
        case "2" :
            acu=entrada *  cant_entradas;
            desc=acu * 0.5;
            preciofin=acu-desc;
            console.log("el precio final es :"+preciofin);
            break;
        case "3" :
            acu=entrada * cant_entradas;
            desc=acu * 0.15;
            preciofin=acu-desc;
            console.log("el precio final es :"+preciofin);
            break;
        default :
            console.log("opcion no valida");
            break;
           
    }
document.getElementById("total1").value=preciofin;
aux=document.getElementById("total1").value;
console.log("el valor total es :"+aux);
}