    

letnom = prompt("Quel est votre nom?")
letprenom = prompt("Quel est votre prénom?")
letage = prompt("Quel est votre âge?")
letadresse = prompt("Quel est votre adresse?")
letcp = prompt("Quel est votre code postal?")
letville = prompt("Dans quelle ville habitez vous?")
lettaille = prompt("Quel est votre taille?")
letpoids = prompt("Quel est votre poids?")
letresultat = Math.round(poids / taille ** 2);
 
functionimc(); {​​​​​
letdiv = document.getElementById("container");
letp = div.appendChild(document.createElement("p"));
p.appendChild(document.createTextNode(`Nom : ${​​​​​​​​nom}​​​​​​​​ Prénom : ${​​​​​​​​prenom}​​​​​​​​`));
lethabitation = div.appendChild(document.createElement("p"));
habitation.appendChild(document.createTextNode(`Adresse :${​​​​​​​​adresse}​​​​​​​​`));
lethabitation2 = div.appendChild(document.createElement("p"));
habitation2.appendChild(document.createTextNode(`Code Postal : ${​​​​​​​​cp}​​​​​​​​ - ${​​​​​​​​ville}​​​​​​​​`));
letmesures = div.appendChild(document.createElement("p"));
mesures.appendChild(document.createTextNode(`Age :${​​​​​​​​age}​​​​​​​​ -  Taille :${​​​​​​​​taille}​​​​​​​​ + Poids :${​​​​​​​​poids}​​​​​​​​`));
lettgros = div.appendChild(document.createElement("p"));
tgros.appendChild(document.createTextNode(`Indice de masse corporelle : ${​​​​​​​​resultat}​​​​​​​​`));
return
}​​​​​​​​
 
imc();

26