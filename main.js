// inizializzo container
const htmlNumeri = document.getElementById('container');


play();


function play(){

    //genero numeri casualmente nel dom
    for (let i = 0; i < 5; i++) {
        const numberRandom = document.createElement('h1');
        htmlNumeri.appendChild(numberRandom);
        numberRandom.innerText = randomNumber(90);
    }


    // creo un conto alla rovescia
    let secondi = 3;
    let clockID = setInterval(ContoAllaRovescia, 1000);




    // creo una funzione per avviare il timer 
    function ContoAllaRovescia() {
        document.getElementById('timer').innerHTML = secondi;

        if (secondi == 0) {
            fermaTimer();
        } else {
            secondi--;
        }

        // creo una funzione che ferma il timer
        function fermaTimer() {
            clearInterval(clockID);

            htmlNumeri.innerHTML = "";


            for (let i = 0; i < 5; i++) {
                let myNumber = prompt("inserisci un valore dell'elenco");

                numberSame(myNumber);
            };


        }

    }



    // creo una funzione che mi restituisce i numeri uguali
    function numberSame(valore) {
        if (valore == numberRandom) {
            htmlNumeri.innerText = valore;
        } else {
            htmlNumeri.innerHTML = "";
        }
    }

}




  // creo una funzione che generi numeri casuali
  function randomNumber(number) {
    return Math.floor(Math.random() * (number - 1 + 1) + 1);
}
