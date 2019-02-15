function Mostrar()
{
var edad;
edad= parseInt(document.getElementById("edad").value);
if (edad >= 75){
    alert("anciano");
    }
    else if (edad >18){
        alert("adulto");
    }
else if (edad >= 13){
 alert("adolencete");

}
else{ alert("niño");}
}//FIN DE LA FUNCIÓN
