function Mostrar()
{
var edad
var estado

edad=parseInt (document.getElementById("edad").value);
estado=document.getElementById("estadoCivil").value;
if (edad >=18 && estado == "soltero"){
    alert("es soltero pero no es menor")
}

	


}//FIN DE LA FUNCIÓN