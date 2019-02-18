function Mostrar()
{
//tomo el mes 
var mesDelAnio = document.getElementById('mes').value;
switch (mesDelAnio) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":

    alert("Tiene 31 dias")
        break;
case "Febrero":
alert("Tiene 29 dias maximo")
 break;
   default:
    alert("Tiene 30 dias")
    break;
}
	



}//FIN DE LA FUNCIÓN