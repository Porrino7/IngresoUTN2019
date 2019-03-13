function mostrar()
{
var continente;
var pago;
var pasajeu = 100 ;
var dias;
var descuento;
var preciosindescuento;

 dias = parseInt(prompt("ingrese cantidad de dias"));
continente=document.getElementById("selecContinente").value;
pago =document.getElementById("selecPago").value;


switch(continente){
case "America":
preciosindescuento = pasajeu * dias
descuento = preciosindescuento * 15 / 100
alert("su pago sin descuento es " + preciosindescuento + "y su descuento es" + descuento)

switch(pago){
case "Débito" : 
 preciosindescuento = pasajeu * dias;
 descuento = preciosindescuento * 25 / 100
alert("su pago sin descuento es" + preciosindescuento + " su descuento es" + descuento)

break;}


} 
switch (continente) {
    case "África":
    case "Oceania":
    preciosindescuento = pasajeu * dias;

descuento =(preciosindescuento * 30 / 100)

alert("su pago es de " + preciosindescuento + "su descuento es de " + descuento)

switch (pago) {
    case "MercadoPago":
    case "Efectivo":
    descuento = ( pasajeu * dias) * 45 / 100;
alert("su pago es de " + descuento);
break;}
}
switch(continente){
case "Europa":
preciosindescuento = pasajeu * dias;
descuento = preciosindescuento *20 / 100;
alert("su pago es de " + preciosindescuento + "y su descuento es de" + descuento);

switch(pago){
  case "Débito":
  preciosindescuento = pasajeu * dias;
  descuento = preciosindescuento * 35 / 100 
  alert("su precio es de " + preciosindescuento + "y su descuento" + descuento);
break   
}
switch(pago){
case "MercadoPago":
preciosindescuento = pasajeu * dias;
descuento = preciosindescuento * 30 / 100;
alert("su pago es de " + preciosindescuento + "su descuento es " + descuento );
break;
default:
preciosindescuento= pasajeu * dias ;
descuento = preciosindescuento * 25 / 100

}
switch(pago){
case"Cheque":
preciosindescuento = pasajeu * dias;
descuento = preciosindescuento * 15 / 100
alert("su precio es de " + preciosindescuento + "su recargo por pago en che es de" + descuento)

}
}











}
