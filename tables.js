var tableNumber = document.getElementById("toCreateTheTable");
var enterYourtable = prompt("Enter Your table Number");
enterYourtable.innerText = tableNumber;

for (var i = 1; i < 11; i++) {
    tableNumber.innerText += enterYourtable + " x " + i + " = " + i * enterYourtable + " " + "\n"
}