

var hoursElem = document.getElementById("hours");
var minutesElem = document.getElementById("minutes");
var secondsElem = document.getElementById("seconds");
var amPmElem = document.getElementById("amPm");

setInterval(function() {
    let date = new Date();  
    let hours = date.getHours();
    let amPm = "AM";
      if(hours > 11){
          amPm ="PM";
      if (hours > 12) {
      hours -= 12;
      }
   }  
   hoursElem.innerText = hours();
   minutesElem.innerText = date.getMinutes();
   secondsElem.innerText = date.getSeconds();
   amPmElem.innerText = date.getSeconds();
  }, 1000);