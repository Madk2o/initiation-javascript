/**partie 1 */

var nom = "Carbonaro"; //variable globale, peut être utilisée dans tout mon code.
let prénom = "Mickey";//variable globale, n'est accessible qu'à cenrtain endroit de mon code.
console.log(nom);
console.log(prénom);

const registreNational = "0202002-051-05";//Varible locale dont la valeur ne changera pas.
console.log(registreNational);//je peux lire ma varible
//registreNational = "123456-789-10";//si je réaffecte une nouvelle valeur à cette constante ca plante!
//console.log(registreNational); 

//partie 2***/////

let rue = "Place de la concorde";
console.log(rue);

let âge = 18;//number
console.log(age);

let majeur = true;//boolean
console.log(majeur);

let personne = {//objet
    nom: "Carbo",
    prénom: "Mickey",
    âge: 18
}

console.log(personne);
console.log(personne.nom + " " + personne.prénom + " " + personne.âge);

function direBonjour(){console.log("Bonjour");} //déclarer une fonction

direBonjour();//appel de la fonction