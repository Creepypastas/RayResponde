$(function(){
    var weekdays = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    var dayOfWeekIndex = (new Date()).getDay();
    var dayOfWeek = weekdays[dayOfWeekIndex];
    var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
    var dayOfWeekPast;
    var hourOfDay = new Date().getHours();
    var timeOfDay;
    // choose day of week other than current one
    if (dayOfWeekPastIndex == dayOfWeekIndex) {
      dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
    } else {
      dayOfWeekPast = weekdays[dayOfWeekPastIndex];
    }
    // assign time of day to the hour
    if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
      timeOfDay = "mañana";
    } else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
      timeOfDay = "tarde";
    } else {
      timeOfDay = "noche";
    }
    // make conversation
    $('#story').typed({
        strings: ["Lee estas instrucciones únicamente si no tienes compañía.^2000 \nSi alguien está contigo,^300 por favor cierra el portal y ^1000 vuelve en otro momento.^5000 \nSi aún estás leyendo, supondremos que nadie te acompaña.^2000 \nEl secreto es:"],
        typeSpeed: 15,
        backDelay: 500,
        loop: false,
        loopCount: false,
    });
});
$(document).ready(function() {
  setTimeout(function() {
    // send 'em packing
    $('#ask').append('<a href="http://ray.creepypastas.net/preguntar.html">Preguntar</a>');
  }, 25000);
});
