// Dom.js
let isON = true;

function colorHandler(color) {
  const bulb = document.getElementById("bulb");
  if (isON) {
    bulb.style.backgroundColor = color.toLowerCase();
  } else {
    bulb.style.backgroundColor = "rgb(86, 84, 84)";
  }
}

function toggleBulb() {
  isON = !isON;
  const bulb = document.getElementById("bulb");
  bulb.style.backgroundColor = isON ? "rgb(86, 84, 84)" : "#222";
}