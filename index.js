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
        strings: ["Mira nada más... ¿qué tenemos aquí?^1500 \n¿tienes curiosidad?^1000 \n\nSoy Ray^300 y puedo responder cualquier pregunta.^1500 \n\nEl " + dayOfWeekPast + " pasado, alguien vino preguntando por su gato.^2500 \nSe asustó al saber la respuesta.^1000 \n\nTen cuidado con lo que preguntas .^300 .^300 .^11000 \n\nray:d0t:re"],
        typeSpeed: 15,
        backDelay: 500,
        loop: false,
        loopCount: false,
    });
});
$(document).ready(function() {
  setTimeout(function() {
    // send 'em packing
    $('#ask').append('<a href="http://ray.creepypastas.net/preguntar.html">Preguntar</a>' + '<a href="http://ray.creepypastas.net/hache-es.html">(H)</a>');
  }, 25000);
});
