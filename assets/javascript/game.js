window.onload = function () {

    var game = ["electricity", "current", "tension", "alternator", "battery"];
    var guesses = [];//Stored guesses
    var numberGuessesRemaining = 15;//count guesses
    var space;
    var guessesRemaining = 5;

    var elem = document.getElementById('content');
    var child = elem.children[0];
    child = elem.wordGuess;

    //Seleccting word to quess from array game
    var wordToGuess = game[Math.floor(Math.random() * game.length)];
    console.log(wordToGuess);

    //GETING LENGTH OF THE WORD WE'RE TRYING TO GUESS
    var wordGuess = wordToGuess.length;
    console.log(wordGuess);

    x = [wordGuess];
    //console.log(x);

    //times has been win
    var wins = '';
    this.console.log(wins);
    var space = wordToGuess.split('');
    this.console.log(space);


    //hidde word and show only length as spaces!!!



    //adding number Guesses Remaining to html
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;


    //PUT HIDDEN WORD IN HTML ELEMENT



    //on event key up get letter, lower the case and store on var letter
    document.onkeyup = function (event) {
        //getting key pressed and lower
        var letter = event.key.toLowerCase();

        if (wordToGuess.indexOf(letter) > -1) {
            //guesses.innerHTML = "-";
            guesses.push(letter);

            //show letters alredy guesses
            divGuesses.textContent = guesses;
            //divGuesses.innerHTML;
            //sustract 1 from number Guesses Remaining (15)
            numberGuessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
            //numberGuessesRemaining.innerHTML
            if (guessesRemaining == 0) {
                alert("Game Over!!");
            } else {
                guessesRemaining--;
                alert("You have meet all intents");
            }
        } else {
            numberGuessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
        }

        for (var i = 0; i < wordGuess; i++) {
            if (letter === wordToGuess[i]) {
                space.innerHTML = wordToGuess[i];
                console.log(space);

                //sustract 1 from number Guesses Remaining
                numberGuessesRemaining--;
                numberGuessesRemaining.innerHTML;

            } else {
                guesses += letter;
                guesses.innerHTML;
                numberGuessesRemaining--;
                numberGuessesRemaining.innerHTML;
            }
            for (var i = 0; i < guesses.length; i++) {
                if (numberGuessesRemaining + space === guesses.length) {
                    wins.innerHTML = "You Win!";
                }
                if (numberGuessesRemaining < 1) {
                    numberGuessesRemaining.innerHTML;
                    alert("Game Over");
                }
            }
        }
    }
}
