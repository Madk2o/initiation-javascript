
let MAX_TENTATIVES = 10;
let mauvaisesLettres = [ ];
let lettresAttendues = [ 't', 'e', 'u', 'b' ];


for (; mauvaisesLettres.length < MAX_TENTATIVES && lettresAttendues.length > 0; ) {
  console.log('lettres à trouver:', lettresAttendues);
  alert('Lettres à trouver: ' + lettresAttendues.length + '. '
    + 'Tentatives restantes: ' + (MAX_TENTATIVES - mauvaisesLettres.length));
    
  let lettre = prompt('Devinez une lettre');

  let trouvees = 0;
  for (let indice = 0; indice != -1 ;) {
    indice = lettresAttendues.indexOf(lettre); 
    if (indice != -1) {
      lettresAttendues.splice(indice, 1); 
      trouvees++;
    }
  }
  if (trouvees > 0) {
    alert('Bonne pioche ! Il y avait bien ' + trouvees + ' fois la lettre '
      + lettre + ' dans le mot à trouver !');
  } else {
    mauvaisesLettres.push(lettre);
    alert('Le mot à trouver ne contient pas la lettre ' + lettre + ', sheh...');
  }
}
if (lettresAttendues.length == 0) {
  alert('Bravo, vous avez trouvé le mot !');
} else if (mauvaisesLettres.length == MAX_TENTATIVES) {
  alert('sheh... Faites une autre partie !');
}

