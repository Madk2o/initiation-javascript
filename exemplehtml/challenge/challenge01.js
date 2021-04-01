// let age = prompt("Quel est votre âge?");

// if (age >= "16" && age <= "18"){

//     document.write("Vous êtes mineur");

// } 

// else if (age <= "18" && age <= "20"){

//     document.write("Vous êtes majeur");

// }

// else if (age < "20"){
//     document.write("sea sex and sun");
// }


//challenge numero deux

// let depart = "Bruxelles-midi";
// let arrivee = prompt("Votre destination?") || "MONS";
// let chauffeur ="johnross";

// if (depart != "" && arrivee != "" && chauffeur != "johnross"){
//     document.write("Votre train part a 10h *Wink Wink*")
// }

// else{
//     document.write("sheh")
// };


//challenge numero 3

// let nom = ""
// let prenom = ""


// while (nom == "" || nom ==null || prenom ==null || prenom == ""){
//     nom = prompt("Ton nom!");
//     prenom = prompt("Ton prenom!");

// }

try {

    let recompense = prompt('Choisissez une récompense: épée, arc ou hache ?');

    let degats;



    switch (recompense) {

        case 'épée':

            degats = 40;

            break;

        case 'arc' : 

            degats = 25;

            break;

        case 'hache' :

            degats = 45;

            break;

            //Pour empêcher mon joueur de choisir une autre arme que celles autorisées, je peux créer un nouvel objet error par défaut dans mon switch

        default :

            throw new Error('L\'arme choisie n\'est pas autorisée.');

    }

    alert('Vous avez choisi ' + recompense + '; vous ferez ' + degats + ' de dégats.');

} catch (e) {

    //ici, j'affiche mon erreur personnalisée

    alert(e);

    //Je peux aussi créer un dernier bloc 'finally' dont le contenu sera exécuté qu'il y ait une erreur ou pas !

} finally {

    alert('le jeu est terminé');

};