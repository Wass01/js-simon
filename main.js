// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire,
//  uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//  Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// variabile timer che parte da 30
var timer = 30;
// counter che definisce la durata del decremento
var count = setInterval(countDown, 1000);


$(document).ready(function (){
  // genero 5 numeri random da 1 a 50 nella pagina
  var arrayRandom = [];
  for (var i = 0; i < 5; i++) {
    arrayRandom.push(randomNum(1,50));
  }
  document.getElementById('random').innerHTML +=  arrayRandom;

  countDown();

  setTimeout(function() {
    var arrayUtente = [];
    for (var i = 0; i < 5; i++) {
      var numeroUtente = parseInt(prompt("Inserisci uno alla volta i numeri che hai visto: "));
      arrayUtente.push(numeroUtente);
    }
    compare(arrayRandom, arrayUtente);
  }, 30100);
});


// functions
function countDown() {
  // se timer = 0 allora stoppo il timer e tolgo i numeri generati
  if (timer == 0) {
    clearInterval(count);
    $("#random").hide();
    $("#timer").hide();
  } else {
    // altrimenti mostro timer e lo decremento
    document.getElementById('timer').innerHTML = timer;
    timer--;
  }
}

function compare(array1, array2) {
  var arrayCompare = [];
  for (var i = 0; i < array2.length; i++) {
    if (array1.includes(parseInt(array2[i]))) {
      arrayCompare.push(array2[i]);
    }
  }
  $("#numeroUtente").text("Questi sono i tuoi numeri: " + array2);
  $("#punteggio").text("I numeri che hai indovinato sono: " + arrayCompare);
}

function randomNum(min, max){
  return parseInt(Math.random() * (max - min) + min);
}
