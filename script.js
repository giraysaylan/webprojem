var resimler=[
"images/ataturkpark1.png",
"images/ataturkpark2.png",
"images/ataturkpark3.png",
"images/ataturkpark4.png",
"images/ataturkpark5.png",
];
var ekrandakiresim=0;

function oncekiresim(){
var slider= document.getElementById("slider");
ekrandakiresim--;
if(	ekrandakiresim<0){
	ekrandakiresim=4;
}
slider.src=resimler[ekrandakiresim];
}
function sonrakiresim(){
var slider= document.getElementById("slider");
ekrandakiresim++;
if(	ekrandakiresim>4){
	ekrandakiresim=0;
}
slider.src=resimler[ekrandakiresim];	
}

var resimler1=[
"images/ayvalik.png",
"images/edremit.png",
"images/erdek.png",
"images/cunda.png",

];
var ekrandakiresim1=0;

function oncekiresim1(){
var slider1= document.getElementById("slider1");
ekrandakiresim1--;
if(	ekrandakiresim1<0){
	ekrandakiresim1=3;
}
slider1.src=resimler1[ekrandakiresim1];

}
function sonrakiresim1(){
var slider1= document.getElementById("slider1");
ekrandakiresim1++;
if(	ekrandakiresim1>3){
	ekrandakiresim1=0;
}
slider1.src=resimler1[ekrandakiresim1];	
}

var resimler2=[
"images/pasacami1.png",
"images/pasacami2.png",
"images/pasacami3.png",
"images/pasacami4.png",

];
var ekrandakiresim2=0;

function oncekiresim2(){
var slider2= document.getElementById("slider2");
ekrandakiresim2--;
if(	ekrandakiresim2<0){
	ekrandakiresim2=3;
}
slider2.src=resimler2[ekrandakiresim2];
}
function sonrakiresim2(){
var slider2= document.getElementById("slider2");
ekrandakiresim2++;
if(	ekrandakiresim2>3){
	ekrandakiresim2=0;
}
slider2.src=resimler2[ekrandakiresim2];	
}

var resimler3=[
"images/pasacami1.png",
"images/saatkulesi1.png",
"images/yildirimcami.png",
"images/balikesirlisesi1.png",
"images/muze.png",
];
var ekrandakiresim3=0;

function oncekiresim3(){
var slider3= document.getElementById("slider3");
ekrandakiresim3--;
if(	ekrandakiresim3<0){
	ekrandakiresim3=4;
}
slider3.src=resimler3[ekrandakiresim3];
}
function sonrakiresim3(){
var slider3= document.getElementById("slider3");
ekrandakiresim3++;
if(	ekrandakiresim3>4){
	ekrandakiresim3=0;
}
slider3.src=resimler3[ekrandakiresim3];	
}
function temizleClick(){
	document.forms["iletisimFormu"]["name"].value = "";
	document.forms["iletisimFormu"]["email"].value = "";
	document.forms["iletisimFormu"]["message"].value = "";
}
function emailIsValid (email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
function validateForm(){
	var varAd = document.forms["iletisimFormu"]["name"].value;
	if (varAd == "") {
	  alert("Adınızı belirtiniz");
	  return false;
	}
	var varAd = document.forms["iletisimFormu"]["email"].value;
	if (varAd == "") {
	  alert("E-Posta adresinizi belirtiniz");
	  return false;
	}	
	var varAd = document.forms["iletisimFormu"]["message"].value;
	if (varAd == "") {
	  alert("Mesajınızı belirtiniz");
	  return false;
	}		
	if (!emailIsValid(document.forms["iletisimFormu"]["email"].value))
	{
		alert("E-Posta adresiniz hatalı");
		return false;		
	}
}