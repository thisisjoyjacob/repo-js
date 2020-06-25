var userMonth = document.getElementById("user-month");
var userDay = document.getElementById("user-day");
var userYear = document.getElementById("user-year");

var submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function(evt){
    

    var parsedMonth = (parseInt(userMonth.value) -1);
    var parsedDay = parseInt(userDay.value);
    var parsedYear = parseInt(userYear.value);

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dateIs = new Date(parsedYear, parsedMonth, parsedDay);
    var weekdayIs = weekday[dateIs.getDay()];
    var monthIs = months[parsedMonth];

    var message = document.getElementById("message");
    message.innerHTML = weekdayIs; 
    

})