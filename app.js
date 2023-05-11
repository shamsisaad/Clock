

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
  }, 1000);

  if(hours > 12){
    amPm.innerText ="PM";
}else {amPm.innerText = "AM";
}    
if (hours > 12) {
hoursElem.innerText -= 12;
}
