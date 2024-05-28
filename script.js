const secondhand = document.getElementById("second-hand");
const minutehand = document.getElementById("minute-hand");
const hourhand = document.getElementById("hour-hand");

function clockTick() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hour = (minutes + date.getHours()) / 12;

  rotateClockHand(secondhand, seconds);
  rotateClockHand(minutehand, minutes);
  rotateClockHand(hourhand, hour);
}

function rotateClockHand(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(clockTick, 1000);
function dayAndDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // January is 0!
    var yyyy = today.getFullYear();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[today.getDay()];

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    var formattedDate = mm + '/' + dd + '/' + yyyy;
    document.getElementById('date').innerText = 'Date: ' + formattedDate;
    document.getElementById('day').innerText = 'Day: ' + dayName;
    document.getElementById('only-date').innerText = dd;
}

window.onload = dayAndDate;
