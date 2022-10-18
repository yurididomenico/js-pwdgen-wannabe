/*

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
aggiungiamo alla fine un numero
Infine scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21"

*/

/*
    Struttura:
    let nome = prompt("Nome: ");
    console.log(nome);
    document.getElementById('nome').innerHTML = `Il tuo nome è ${nome}`;
*/


/*
-Chiedi all’utente il suo nome

-Chiedi il suo cognome

-Chiedi il suo colore preferito

-Aggiungiamo alla fine un numero

-Scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21"

*/

let nome = prompt("Nome: ");
let cognome = prompt("Cognome: ");
let colore = prompt("Colore preferito: ");
let numero = prompt("Numero preferito: ");


// document.getElementById('nome').innerHTML = `Il tuo nome è ${nome}`;
// document.getElementById('cognome').innerHTML = `Il tuo cognome è ${cognome}`;
// document.getElementById('colore').innerHTML = `Il tuo colore preferito è ${colore}`;
// document.getElementById('numero').innerHTML = `Il tuo numero preferito è ${numero}`;
document.getElementById('pssw').innerHTML = `La tua password super sicura è: ${nome}${cognome}${colore}${numero}`;
// console.log(document.getElementById('pssw').innerHTML);