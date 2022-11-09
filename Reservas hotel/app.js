//100 Standar;120 Junior Suite;150 Suite.

function seleccionarHabitacion() {
    var room = document.getElementById('roomType').value;
    var priceRoom;
    if (room === "Standard") {
        priceRoom = 100;
    } else if (room === "Junior Suite") {
        priceRoom = 120;
    } else if (room === "Suite") {
        priceRoom = 150;
    }
    return priceRoom;
    
}
document.getElementById("roomType").addEventListener("change", seleccionarHabitacion);

console.log(seleccionarHabitacion())
