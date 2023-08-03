let time = 0;
let counterElement = document.getElementById("time");

function updateTimer() {
  time++;
  counterElement.textContent = time;
}

// Call updateTimer() every 1000 milliseconds (1 second)
setInterval(updateTimer, 1000);
