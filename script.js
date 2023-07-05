let respuesta = prompt("Desea inscribirse al gimnasio?");
let descuento = 0;
let cantidadPersonas = 0;
let totalSinDescuento = 0;
let totalAPagar = 0;

while(respuesta == "SI" || respuesta == "si" || respuesta == "Si" || respuesta == "sI"){
  let plan = prompt("Seleccione la cantidad de dias que quiere ir: \n1. 2 días \n2. 3 días \n3. 4 días \n4. Libre");

  switch(plan){
    case "1":
      mostrarCantidadTotalAlMomento(2500);
      cantidadPersonas = cantidadPersonas + 1;
      alert("Plan agregado exitosamente");
      break;
    case "2":
      mostrarCantidadTotalAlMomento(3000);
      cantidadPersonas = cantidadPersonas + 1;
      alert("Plan agregado exitosamente");
      break;
    case "3":
      mostrarCantidadTotalAlMomento(3200);
      alert("Plan agregado exitosamente");
      break;
    case "4":
      mostrarCantidadTotalAlMomento(3500)
      cantidadPersonas = cantidadPersonas + 1;
      alert("Plan agregado exitosamente");
      break;
    default: 
      alert("La opción seleccionada no es valida");
      break;
  }
  respuesta = prompt("Quiere inscribir a otra persona?"); 
}

if(cantidadPersonas >= 3){
  alert("Usted se va inscribir con " + (cantidadPersonas - 1) + " personas mas, asi que tiene un descuento del 15% para todos");
  totalAPagar = totalSinDescuento * 0.85;
  descuento = totalSinDescuento * 0.15;
  alert("Usted debe de pagar: $" + totalAPagar + "\nY obtuvo un descuento de: $" + descuento);
}
else{
  alert("Usted se va inscribir con " + cantidadPersonas - 1 + " personas mas");
  totalAPagar = totalSinDescuento;
  alert("Usted debe de pagar: $" + totalAPagar);
}

function mostrarCantidadTotalAlMomento(valorProducto){
  totalSinDescuento = totalSinDescuento + valorProducto;
  alert("Lo total a abonar hasta el momento es: $" + totalSinDescuento);
}

alert("Gracias por usar nuestra página!")