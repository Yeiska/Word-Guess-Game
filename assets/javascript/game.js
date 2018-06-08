window.onload = function () {

    var game = ["electricity", "current", "tension", "alternator", "battery"];
    var guesses = [];//Stored guesses
    var numberGuessesRemaining = 15;//count guesses
    var guessesRemaining;
    var space;

    //hidde word and show only length as spaces!!!
    var space = document.getElementById("space");
    space += wordGuess;
    space.innerHTML;

    //Seleccting word to quess from array game
    var wordToGuess = game[Math.floor(Math.random() * game.length)];
    console.log(wordToGuess);

    //GETING LENGTH OF THE WORD WE'RE TRYING TO GUESS
    var wordGuess = wordToGuess.length;
    console.log(wordGuess);
    
    var wins = "";
    var space = wordToGuess.split("  ");
    
    //adding number Guesses Remaining to html
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;
    

    //on event key up get letter, lower the case and store on var letter
    document.onkeyup = function (event) {
        //getting key pressed and lower
        var letter = event.key.toLowerCase();
        
        if (wordToGuess.indexOf(letter) > -1) {
            
            guesses += letter;
            //show letters alredy guesses
            divGuesses.textContent = guesses;
            divGuesses.innerHTML;
            //sustract 1 from number Guesses Remaining (15)
            numberGuessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
            
            //show letters alredy guesses
            guesses.textContent += guesses;
            guesses.innerHTML;
            
        } else {
            numberGuessesRemaining--;
            document.getElementById("guessesRemaining").innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
        }
        for (var i = 0; i < wordGuess; i++) {
            if (letter === wordToGuess[i]) {
                space += wordToGuess[i];
                space.innerHTML;
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
                    //guessesRemaining.innerHTML =;
                    alert("Game Over");
                }
            }
        }
    }
}

//unfortunally i could not made it word like should be
//sustract 1 from number Guesses Remaining is not working like should be
//wins are not displaying
// work underline are not displaying for word selected from game array
