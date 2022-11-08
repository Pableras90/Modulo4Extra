//Num almacena el numero introducido

var num = () => parseInt(document.getElementById("operator").value);



//Operaciones para los botones
var sum = (num) => num + num;
var rest = (num) => num - num;
var mult = (num) => num * num;
var div = (num) => num / num;



var resultSum = () => document.getElementById("screen").innerText = sum(num(), num());
var resultRest = () => document.getElementById("screen").innerText = rest(num(), num());
var resultMult = () => document.getElementById("screen").innerText = mult(num(), num());
var resultDiv = () => document.getElementById("screen").innerText = div(num(), num());

document.getElementById("buttonSum").addEventListener("click", resultSum);
document.getElementById("buttonRest").addEventListener("click", resultRest);
document.getElementById("buttonMult").addEventListener("click", resultMult);
document.getElementById("buttonDiv").addEventListener("click", resultDiv);



/*//Muestra el resultado
var resultSum = () => num + num;
var resultRest = () => num - num;
var resultMult = () => num * num;
var resultDiv = () => num / num;*/











/*coger el numero introducido
almacenar ese numero
usar boton con funcion
introducir segundo numero
almacena segundo numero
resultado*/ 