//100 Standar;120 Junior Suite;150 Suite.
var totalPrice = 0

function seleccionarHabitacion() {
    room = document.getElementById('roomType').value;
    return room;
}



function typeRoom() {

    if (seleccionarHabitacion() === "Standard") {
        priceRoom = 100;
    } else if (seleccionarHabitacion() === "Junior Suite") {
        priceRoom = 120;
    } else if (seleccionarHabitacion() === "Suite") {
        priceRoom = 150;
    }
    return priceRoom;
}

document.getElementById("roomType").addEventListener("change", typeRoom)

console.log(typeRoom())


