let tableau = []; // On déclare un tableau (on le crée)

let input; // On déclare une variable qui va stockée la donnée

function demanderdonnées() { // Ceci est une déclaration de fonction

    input = prompt("Entrez une valeur"); // Popup entrée données
    tableau.push(input); // Pousse la valeur dans le tableau
    if (confirm("entrez une autre données ?")) { //Demande si tu veux entrer une nouvelle valeur, si "Oui", tu exécute à nouveau la fonction
        demanderdonnées(); //appelle à nouveau la fonction
    }
}

demanderdonnées(); // Appelle une première la fonction sinon il ne rentre pas dans la fonction
console.log(tableau) // Affiche le tableau

// Push : Pousse la valeur à la fin du tableau
// Pop : Enlève la valeur à la fin du tableau
// Unshift : Pousse la valeur au début du tableau
// Shift : Enlève la valeur au début du tableau
// Length : Donne la taille du tableau
// spplice : enlève une donnée ex : 1,1
//