function mostrar()
{
var numero1;
var numero2;
var resultado;
numero1=parseInt(prompt("ingrese un numero"));
numero2=parseInt(prompt("ingrese un numero"));

if(numero1 == numero2){
resultado = numero1 * numero2;
alert("tu numero es " + resultado);
}
else if (numero1 > numero2){
resultado = numero1 - numero2;
alert("tu numero es " + resultado)



}
if (numero1 < numero2){
resultado = numero1 / numero2;
alert("tu numero es" + resultado);

}





}