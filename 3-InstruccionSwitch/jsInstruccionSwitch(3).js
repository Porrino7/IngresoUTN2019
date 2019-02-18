function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
    case "Febrero":
     alert("tiene menos de 29 dias")   
        break;

    default:
    alert("tiene mas de 30 dias")
        break;
}

	


}//FIN DE LA FUNCIÓN