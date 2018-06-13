window.onload = function () {

    var game = ["electricity", "current", "tension", "alternator", "battery"];
    var guesses = [];//Stored guesses
    var numberGuessesRemaining = 15;//count guesses

    //hidde word and show only length as spaces!!!
    var space = document.getElementById("space");
    // space += wordGuess;
    // space.innerHTML;

    //Seleccting word to quess from array game
    var wordToGuess = game[Math.floor(Math.random() * game.length)];
    console.log(wordToGuess);

    var hiddenWord = "";

    for ( var i = 0; i < wordToGuess.length; i++){
        hiddenWord += "_";
    }

    space.textContent = hiddenWord;
    var hiddenWordArray = hiddenWord.split("");
    //GETING LENGTH OF THE WORD WE'RE TRYING TO GUESS
    
    var wins = "";
    
    //adding number Guesses Remaining to html
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;
    

    //on event key up get letter, lower the case and store on var letter
    document.onkeyup = function (event) {
        //getting key pressed and lower
        var letter = event.key.toLowerCase();
        
        if (wordToGuess.indexOf(letter) > -1) {
           for (var i = 0; i < wordToGuess.length; i++) {
                if (letter === wordToGuess[i]) {
                    console.log(hiddenWordArray);
                    hiddenWordArray[i] = letter;
                    space.textContent = hiddenWordArray.join("");
                }
                // for (var i = 0; i < guesses.length; i++) {
                //     if (numberGuessesRemaining + space === guesses.length) {
                //         wins.innerHTML = "You Win!";
                //     }
                //     if (numberGuessesRemaining < 1) {
                //         //guessesRemaining.innerHTML =;
                //         alert("Game Over");
                //     }
                // }
            }
        } else {
            numberGuessesRemaining--;
            guessesRemaining.innerHTML = numberGuessesRemaining;
            console.log(numberGuessesRemaining);
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
    }
}

//unfortunally i could not made it word like should be
//sustract 1 from number Guesses Remaining is not working like should be
//wins are not displaying
// work underline are not displaying for word selected from game array
