
// creo un array x mettere i num casuali
const numeriGenerati = [];

// genero 5 numeri casuali
while(numeriGenerati.length <5){

    const numeroCasuale = getRandomNumber(1,100);

    // verifico che numeri generati non include un numero casuale generato per far si che non si ripetano
    // 2 volte gli stessi numeri
    if(!numeriGenerati.includes(numeroCasuale)){
        numeriGenerati.push(numeroCasuale);
    }
}

// inizializzo container
const elemMessaggio = document.getElementById('container');
elemMessaggio.innerHTML = numeriGenerati;

// creo una variabile con i secondi da cui partirà il timer
const ritardo = 3;

// timeout che nasconde i numeri casuali mostrati
setTimeout(resetMessaggio, ritardo*1000);


// faccio apparire un prompt dopo 1 secondo che scompare il testo
setTimeout(function(){

    const numeriInseriti = getNumeriUtente();
    
    // richiamo la funzione verificaNumeriIndovinati
    const numeriIndovinati = verificaNumeriIndovinati(numeriGenerati, numeriInseriti);

    // richiamo la funzione verificaNumeriIndovinati
    getStampaNumeriIndovinati(numeriIndovinati);

}, (ritardo + 1) *1000);





function getStampaNumeriIndovinati(arrayNumeriIndovinati){

    const quantitaNumeriIndovinati = arrayNumeriIndovinati.length;

    let text = quantitaNumeriIndovinati == 1? ' numero':'numeri';

    elemMessaggio.innerHTML = 'Hai indovinato '+quantitaNumeriIndovinati+' '+text+' ['+arrayNumeriIndovinati + ']';


}



// creo una funzione che confronta 2 array e verifica se ha numeri in comune
function verificaNumeriIndovinati(arrayNumeriGenerati, arrayNumeriInseriti){

    const indovinati = [];

    for(let i=0; i<arrayNumeriInseriti.length; i++){
        if(arrayNumeriGenerati.includes(arrayNumeriInseriti[i])){
            indovinati.push(arrayNumeriInseriti[i]);
        }
    }
    return indovinati;
}



// creo una funziona che mi faccia inserire dei numeri e se sono uguali a quelli mostrati casualmente a video li pusho in un array
function getNumeriUtente(){
    const numeriUtente = [];

    while(numeriUtente.length < 5){
        const numero = parseInt(prompt('inserisci numero'));

        if(!numeriUtente.includes(numero) && !isNaN(numero) && (numero <= 100 && numero > 0)){
            numeriUtente.push(numero);
        }
    }
    return numeriUtente
}


// creo una funzione che nascone i numeri mostrati
function resetMessaggio(){
    elemMessaggio.innerHTML = '';
}


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) +1);
}