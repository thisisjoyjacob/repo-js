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
    if (hours <0 ){
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }

    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + ampm;

}, 1000);

function addZero(time) {

    return (time<10) ? "0" + time : time;
} 


/* 



/* 

var thr = createSel(23);
document.getElementById("tpick-h").appendChild(thr);
var thm = createSel(59);
document.getElementById("tpick-m").appendChild(thm);
var ths = createSel(59);
document.getElementById("tpick-s").appendChild(ths);

var tset = document.getElementById("tset");
tset.addEventListener("click", set);
var treset = document.getElementById("treset");
treset.addEventListener("click", reset);

*/

// var sound = document.getElementById("alarm-sound");

// var alarm = null;
// setInterval(tick,1000);


var createSel = function(max) {
    // support function - creates a selector for hr, min, sec

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

var padzero =  function(num) {
    // support funtion - pads hr, min, sec with 0 if <10

    if (num < 10) {num = "0" + num; }
    else ( num = num.toString(); )
    return num;
}

var tick = function() {
    
}


*/