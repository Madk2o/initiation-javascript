

let btn = document.querySelector('bouton');
let compteur = 10;
let intervalId = null;
function finish() {
  clearInterval(intervalId);
  document.getElementById("chrono").innerHTML = "c'est fini tich";	
}
function chrono() {
    compteur--;
    if(compteur == 0) finish();
    else {	
        document.getElementById("chrono").innerHTML = compteur + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(chrono, 1000);
}	