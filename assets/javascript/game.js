window.onload = function () {
    
    var game = ["electricity", "current", "tension", "alternator", "battery"];
    var guesses = [];//Stored guesses
    var numberGuessesRemaining = 15;//count guesses
    var wins = 0;

    //hidde word and show only length as spaces!!!
    var space = document.getElementById("space");


    //Seleccting word to quess from array game
    var wordToGuess = game[Math.floor(Math.random() * game.length)];
    console.log(wordToGuess);

    var hiddenWord = "";

    for (var i = 0; i < wordToGuess.length; i++) {
        hiddenWord += "_";
    }

    //space.append(hiddenWord);

    var hiddenWordArray = hiddenWord.split("");
    space.textContent = hiddenWordArray.join("")

    //GETING LENGTH OF THE WORD WE'RE TRYING TO GUESS

    //adding number Guesses Remaining to html
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;


    //on event key up get letter, lower the case and store on var letter
    document.onkeyup = function (event) {
        //getting key pressed and lower
        var letter = event.key.toLowerCase() + '';
        guesses = letter + " ";
        divGuesses.append(guesses);


        if (wordToGuess.indexOf(letter) > -1) {
            for (var i = 0; i < wordToGuess.length; i++) {
                if (letter === wordToGuess[i]) {
                    // console.log(hiddenWordArray);
                    hiddenWordArray[i] = letter;
                    space.textContent = hiddenWordArray.join("");
                }

            }
        } else {
            numberGuessesRemaining--;
            guessesRemaining.innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
            if (numberGuessesRemaining === 0) {
                alert("Game Over, Try again");
                numberGuessesRemaining += 15;
                reset();
            }
            if (wordToGuess.length === hiddenWordArray.length) {
                //console.log(wordToGuess[i].length);
                //console.log(hiddenWordArray[i].length);
                wins++;
                won.append(wins);
                alert("You Win!");
                // guesses = [];
                // hiddenWord = "";
                // numberGuessesRemaining = 0;
                reset();
            }
        }
    }
        
}
function reset() {

    hiddenWord = "";
    guesses = [];
    numberGuessesRemaining = 15;
    guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;
}

// for (var i = 0; i < wordGuess; i++) {
        //     if (letter === wordToGuess[i]) {
        //         space += wordToGuess[i];
        //         space.innerHTML;
        //         console.log(space);

        //         //sustract 1 from number Guesses Remaining
        //         numberGuessesRemaining--;
        //         numberGuessesRemaining.innerHTML;

        //     } else {
        //         guesses += letter;
        //         guesses.innerHTML;
        //         numberGuessesRemaining--;
        //         numberGuessesRemaining.innerHTML;
        //     }
        //     for (var i = 0; i < guesses.length; i++) {
        //         if (numberGuessesRemaining + space === guesses.length) {
        //             wins.innerHTML = "You Win!";
        //         }
        //         if (numberGuessesRemaining < 1) {
        //             //guessesRemaining.innerHTML =;
        //             alert("Game Over");
        //         }
        //     }
        // }
    