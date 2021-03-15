// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire,
//  uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//  Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.


$(document).ready(function (){
  pageNumRandom();
  countDown();
});


// variabile timer che parte da 30
var timer = 5;
// counter che definisce la durata del decremento
var count = setInterval(countDown, 1000);

var numeriEsatti = [];
var numUtente = [];

setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt(prompt("Inserisci uno alla volta i numeri che hai visto: "));
  }


}, 5100);


// functions
function countDown() {
  // se timer = -1 allora stoppo il timer e tolgo i numeri generati
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


// function numeriIndovinati() {
//   for (var point = 0; point < 5; point++) {
//     if(numUtente() == pageNumRandom()){
//       point++;
//     }
//   }
//   document.getElementById('punteggio').innerHTML = "hai indovinato " + point + " numeri";
// }



function pageNumRandom() {
  // genero 5 numeri random da 1 a 30 nella pagina
  for (var i = 0; i < 5; i++) {
    document.getElementById('random').innerHTML += "<li>" + randomNum(1,30) + "</li>";
  }
}

function randomNum(min, max){
  return parseInt(Math.random() * (max - min) + min);
}
