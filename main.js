// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire,
//  uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//  Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.


$(document).ready(function (){
  pageNumRandom();
});

function pageNumRandom() {
  // genero 5 numeri random da 1 a 30 nella pagina
  for (var i = 0; i < 5; i++) {
    document.getElementById('random').innerHTML += randomNum(1,30);
  }
}

function randomNum(min, max){
  return parseInt(Math.random() * (max - min) + min);
}
