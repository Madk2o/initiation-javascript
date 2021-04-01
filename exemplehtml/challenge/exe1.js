let opération, n1, n2, résultat;

do {
    opération = prompt(`Choisissez votre opération\n
    1) addition\n
    2) Soustraction\n
    3) Multiplication\n
    4) Division`);
    
} while (opération != '1' && != '2' && opération != '3' && opération != '4');

do{

n1 = parseInt (prompt (`Entrz les 1er nombre `));
}while(isNaN(n1));



do{

    n2 = parseInt (prompt (`Entrz les 2eme nombre `));
    }while(isNaN(n2));
}
calculatrice();