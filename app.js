function main (){
 var fulldate = new Date();
 var hours = fulldate.getHours();
 var minutes = fulldate.getMinutes();
 var seconds = fulldate.getSeconds();
 var milliseconds = fulldate.getMilliseconds();

 if (hours< 10)
 hours = "0" + hours;
 
 if (minutes < 10)
 minutes = "0" + minutes;
 
 if (seconds < 10)
 seconds = "0" + seconds;

 document.getElementById("hour").innerHTML= hours;
 document.getElementById("minute").innerHTML= minutes;
 document.getElementById("second").innerHTML= seconds;
   
 animateClock(document.getElementById("second"));
 if(seconds == 00) animateClock(document.getElementById("minute"));
 if(minutes = 00 && seconds == 00) animateClock(document.getElementById("hour"));    

}

setInterval(main,1000);

function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
  span.className = "";
  },300)
}