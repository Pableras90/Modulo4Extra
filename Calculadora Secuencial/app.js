//Num almacena el numero introducido

var newNumber = () => parseInt(document.getElementById("operator").value);



//Operaciones para los botones
var sum = (totalMemoria, newNumber) => totalMemoria + newNumber;
var rest = (totalMemoria, newNumber) => totalMemoria - newNumber;
var mult = (totalMemoria, newNumber) => totalMemoria * newNumber;
var div = (totalMemoria, newNumber) => totalMemoria / newNumber;


function resultSum() {
    var memoria = parseInt(document.getElementById("screen").innerText);
    if (!memoria) {
        document.getElementById("screen").innerText = newNumber();
    } else {
        document.getElementById("screen").innerText = sum(memoria, newNumber());
    }

}
function resultRest() {
    var memoria = parseInt(document.getElementById("screen").innerText);
    if (!memoria) {
        document.getElementById("screen").innerText = newNumber();
    } else {
        document.getElementById("screen").innerText = rest(memoria, newNumber());
    }
}
function resultMult() {
    var memoria = parseInt(document.getElementById("screen").innerText);
    if (!memoria) {
        document.getElementById("screen").innerText = newNumber();
    } else {
        document.getElementById("screen").innerText = mult(memoria, newNumber());
    }

}
function resultDiv() {
    var memoria = parseInt(document.getElementById("screen").innerText);
    if (!memoria) {
        document.getElementById("screen").innerText = newNumber();
    } else {
        document.getElementById("screen").innerText = div(memoria, newNumber());
    }
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