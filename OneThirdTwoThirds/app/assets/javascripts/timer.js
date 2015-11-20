$(document).ready(function(){
  var time = 0;

  var resetTimer = document.getElementById("reset");
    reset.addEventListener("click", function() {
    timerID = document.getElementById('timer').textContent = "Stop Watch";
    time = 0;
  });
  var startTimer = document.getElementById("start");
    start.addEventListener("click", function() {
    startTimer = setInterval(updateTime, 1000);
  });
  var pauseTimer = document.getElementById("pause");
    pause.addEventListener("click", function() {
    clearInterval(startTimer);
  });
  var updateTime = function() {
    var hours = Math.floor(time/60/60) ;
    var mins = Math.floor(time/60);
    var secs = Math.floor(time);
    if (hours   < 10) {
      hours = "0"+hours;
    };
    if (mins < 10) {
      mins = "0"+mins;
    };
    if (secs < 10) {
      secs = "0"+secs;
    };
    if (secs >= 60) {
      secs = 0;
    };
    if (mins >= 60) {
      mins = 0;
    };
    timerID = document.getElementById('timer').innerHTML = ("Time elapsed: " + hours + " hours " + mins + " minutes " + secs + " seconds");
    time++;
  }
});
