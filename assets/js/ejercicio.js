// definicion notas html


var html1 = document.getElementById("htmlnota1");
var html2 = document.getElementById("htmlnota2");
var html3 = document.getElementById("htmlnota3");

var notahtml1 = +prompt("ingrese nota html 1");
var notahtml2 = +prompt("ingrese nota html 2");
var notahtml3 = +prompt("ingrese nota  html3");

var promediohtml = (notahtml1+notahtml2+notahtml3);

htmlnota1.innerHTML = notahtml1;
htmlnota2.innerHTML = notahtml2;
htmlnota3.innerHTML = notahtml3;

htmlpromedio.innerHTML = promediohtml/3;


//promedio css

var ccs1 = document.getElementById("cssnota1");
var css2 = document.getElementById("cssnota2");
var ccs3 = document.getElementById("cssnota3");

var notacss1 = +prompt("ingrese nota css 1");
var notacss2 = +prompt("ingrese nota css 2");
var notacss3 = +prompt("ingrese nota css 3");

var promediocss = (notacss1+notacss2+notacss3);

cssnota1.innerHTML = notacss1;
cssnota2.innerHTML = notacss2;
cssnota3.innerHTML = notacss3;

csspromedio.innerHTML = promediocss/3;

// promedio js

var js1 = document.getElementById("jsnota1");
var js2 = document.getElementById("jsnota2");
var js3 = document.getElementById("jsnota3");

var notajs1 = +prompt("ingrese nota js 1");
var notajs2 = +prompt("ingrese nota js 2");
var notajs3 = +prompt("ingrese nota js 3");

var promediojs = (notajs1+notajs2+notajs3);

jsnota1.innerHTML = notajs1;
jsnota2.innerHTML = notajs2;
jsnota3.innerHTML = notajs3;

jspromedio.innerHTML = promediojs/3;






