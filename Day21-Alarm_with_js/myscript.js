// alarm sound link up
var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
		sound.loop = true;

///////////////////////////////

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
    var date = new Date();

    var hours = (12 - (date.getHours()));
    // var hours = date.getHours;

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    //convert military time to standard time
   // if (hours <0 ){
   //     hours = hours * -1;
    // } else if (hours == 00) {
        // hours = 12;
    // } else {
        // hours = hours;
    // }

    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + ampm;

}, 1000);

function addZero(time) {

    return (time<10) ? "0" + time : time;
} 



var  init = function () {
    // init() : start the alarm clock
  
      // The time picker - Hr, Min, Sec
      thr = createSel(23);
      document.getElementById("tpick-h").appendChild(thr);
      thm = createSel(59);
      document.getElementById("tpick-m").appendChild(thm);
      ths = createSel(59);
      document.getElementById("tpick-s").appendChild(ths);
  
      // The time picker - Set, reset
      tset = document.getElementById("tset");
      tset.addEventListener("click", set);
      treset = document.getElementById("treset");
      treset.addEventListener("click", reset);
  
      // The alarm sound
      sound = document.getElementById("alarm-sound");
  
      // Start the clock
      alarm = null;
      setInterval(tick, 1000);
    }
  
  var  createSel = function (max) {
    // createSel() : support function - creates a selector for hr, min, sec
  
      var selector = document.createElement("select");
      for (var i=0; i<=max; i++) {
        var opt = document.createElement("option");
        i = padzero(i);
        opt.value = i;
        opt.innerHTML = i;
        selector.appendChild(opt);
      }
      return selector
    }
  
   var padzero = function (num) {
    // padzero() : support function - pads hr, min, sec with 0 if <10
  
      if (num < 10) { num = "0" + num; }
      else { num = num.toString(); }
      return num;
    }
  
  var  tick = function () {
    // tick() : update the current time
  
      // Current time
      var now = new Date();
      var hr = padzero(now.getHours());
      var min = padzero(now.getMinutes());
      var sec = padzero(now.getSeconds());
  
      // Update current clock
      chr.innerHTML = hr;
      cmin.innerHTML = min;
      csec.innerHTML = sec;
  
      // Check and sound alarm
      if (alarm != null) {
        now = hr + min + sec;
        if (now == alarm) {
          if (sound.paused) {
            sound.play();
          }
        }
      }
    }
  
   var set = function () {
    // set() : set the alarm
  
      alarm = thr.value + thm.value + ths.value;
      thr.disabled = true;
      thm.disabled = true;
      ths.disabled = true;
      tset.disabled = true;
      treset.disabled = false;
    }
  
  var  reset = function () {
    // reset() : reset the alarm
  
      if (!sound.paused) {
        sound.pause();
      }
      alarm = null;
      thr.disabled = false;
      thm.disabled = false;
      ths.disabled = false;
      tset.disabled = false;
      treset.disabled = true;
    }


// INIT - RUN ALARM CLOCK
window.addEventListener("load", init);