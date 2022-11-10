//100 Standar;120 Junior Suite;150 Suite.
var totalPrice=0

function seleccionarHabitacion() {
    room = document.getElementById('roomType').value;
    return room;
}

function priceRoom() {
    if (room === "Standard") {
        priceRoom = 100;
    } else if (room === "Junior Suite") {
        priceRoom = 120;
    } else if (room === "Suite") {
        priceRoom = 150;
    }
    return priceRoom;

}
document.getElementById("roomType").addEventListener("change", console.log(seleccionarHabitacion()));
console.log(priceRoom())