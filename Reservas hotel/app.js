//100 Standar;120 Junior Suite;150 Suite.


function seleccionarHabitacion() {
    var room = document.getElementById('roomType').value;
    return room;
}

function typeRoom() {
    var priceRoom = 0
    if (seleccionarHabitacion() == "Standard") {
        priceRoom = 100;
    } else if (seleccionarHabitacion() == "Junior Suite") {
        priceRoom = 120;
    } else if (seleccionarHabitacion() == "Suite") {
        priceRoom = 150;
    }
    return priceRoom;
}

function tipoHabitacion() {
    var numHabitacion = document.getElementById("roomOccupancy").value;
    return numHabitacion;
}

function occupancy() {
    var roomInd;
    if (tipoHabitacion() == "Individual") {
        roomInd = 0.75;
    } else if (tipoHabitacion() == "Doble") {
        roomInd = 1;
    } else if (tipoHabitacion() == "Triple") {
        roomInd = 1.25;
    }
    return roomInd;
}

function spa() {
    var isChecked = document.getElementById("Spa").checked;
    if (isChecked) {
        return 20;
    } else {
        return 0;
    }
}

function nights() {
    return parseInt(document.getElementById("nightRoom").value);
}

function parking() {
    return parseInt(document.getElementById("nightPark").value);
}

var suma = () => (((typeRoom() + spa()) * occupancy()) * nights()) + (parking() * 10)





document.getElementById("boton").addEventListener("click", () => document.getElementById("result").innerText = suma());



