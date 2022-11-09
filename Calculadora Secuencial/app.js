//Num almacena el numero introducido

var newNumber = () => parseInt(document.getElementById("operator").value);
var totalMemoria=0


//Operaciones para los botones
var sum = (totalMemoria,newNumber) => totalMemoria + newNumber;
var rest = (totalMemoria,newNumber) => totalMemoria - newNumber;
var mult = (totalMemoria,newNumber) => totalMemoria * newNumber;
var div = (totalMemoria,newNumber) => totalMemoria / newNumber;


function resultSum(){
    totalMemoria=sum(totalMemoria,newNumber());
    document.getElementById("screen").innerText =totalMemoria;


}
function resultRest(){
    totalMemoria=rest(totalMemoria,newNumber());
    document.getElementById("screen").innerText =totalMemoria;


}
function resultMult(){
    totalMemoria=mult(totalMemoria,newNumber());
    document.getElementById("screen").innerText =totalMemoria;


}
function resultDiv(){
    totalMemoria=div(totalMemoria,newNumber());
    document.getElementById("screen").innerText =totalMemoria;


}

document.getElementById("buttonSum").addEventListener("click", resultSum);
document.getElementById("buttonRest").addEventListener("click", resultRest);
document.getElementById("buttonMult").addEventListener("click", resultMult);
document.getElementById("buttonDiv").addEventListener("click", resultDiv);














/*coger el numero introducido
almacenar ese numero
usar boton con funcion
introducir segundo numero
almacena segundo numero
resultado*/ 