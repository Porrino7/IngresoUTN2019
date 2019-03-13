function mostrar()
{
    var bolsas;
    var peso;
    var pesototal= 0 
    var sabor = 0
    var liviano = 0
    var cantcarne = 0;
    var promediocarne;
    var flag = 0
   for(var i = 0 ;i<10;i++ ){
peso = parseInt(prompt("ingrese el peso") + i)
sabor = prompt("ingrese sabor");


while (peso < 0 || peso > 500){
peso = prompt("porfavor reingresar peso")
}
while(sabor == "carne "|| sabor == "vegetales" || sabor == "pollo"){
sabor++



}
while(!(sabor == "carne"|| sabor == "vegetales "|| sabor == "pollo")){
sabor = prompt("porfavor  reingrese el sabor")


}

   }
if(pesototal > 0 || pesototal < 500 || flag==0  ){
pesototal++


if(liviano < peso )
liviano == sabor
liviano++

if(sabor == "carne")
cantcarne++





}


}







   



