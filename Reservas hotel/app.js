//100 Standar;120 Junior Suite;150 Suite.
var totalPrice = 0

function seleccionarHabitacion() {
    var room = document.getElementById('roomType').value;
    return room;
}



function typeRoom() {
    var priceRoom=0
    if (seleccionarHabitacion() === "Standard") {
        var priceRoom = 100;
    } else if (seleccionarHabitacion() === "Junior Suite") {
        var priceRoom = 120;
    } else if (seleccionarHabitacion() === "Suite") {
        var priceRoom = 150;
    }
    return priceRoom;
}

document.getElementById("roomType").addEventListener("change", console.log(typeRoom()))


