

var hoursElem = document.getElementById("hours");
var minutesElem = document.getElementById("minutes");
var secondsElem = document.getElementById("seconds");
var amPmElem = document.getElementById("amPm");

setInterval(function() {
    var date = new Date();  
    var hours = date.getHours();
   
   hoursElem.innerText = date.getHours();
   minutesElem.innerText = date.getMinutes();
   secondsElem.innerText = date.getSeconds();

   if(hours > 11){
    amPm.innerText ="PM";
    if (hours > 12) {
      hours -=12;
    }
  } else {amPm.innerText = "AM";
  }  
   
  }, 1000);

  

