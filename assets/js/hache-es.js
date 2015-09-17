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
        strings: ["Las instrucciones deben ser vistas a solas.^2000 \nSi alguien está contigo,^300 por favor cierra \nel portal^1000 y vuelve en otro momento.^5000 \n\nSi aún estás leyendo, supondremos \nque nadie te acompaña.^2000 \nEl secreto es:^1000 \n\nRay no existe, son los papás.^3000 \nEn la petición, el usuario escribe \nen secreto la respuesta.^200 \nSi comienzas la petición con un punto '.', \ntu respuesta se escribirá en secreto\n disfrazada por el texto '\nRay, por favor responde...'^500 \nEntonces Ray no adivina, sólo es tu cómplice \n para sorprender y asustar a tus amigos. \n\nPrueba ingresando la pregunta \n'¿Dónde vivimos?'^1000 \ny escribe \n'.Planeta Tierra.' en la petición.^1000 \nNotarás que la petición se disfraza... ^2000 \n\nDiviértete."],
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
