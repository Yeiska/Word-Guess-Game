window.onload = function () {

    var game = ["electricity", "current", "tension", "alternator", "battery"];
    var guesses = [];//Stored guesses
    var numberGuessesRemaining = 15;//count guesses
    
    var space;


    //Seleccting word to quess from array game
    var wordToGuess = game[Math.floor(Math.random() * game.length)];
    console.log(wordToGuess);

    //GETING LENGTH OF THE WORD WE'RE TRYING TO GUESS
    var wordGuess = wordToGuess.length;
    console.log(wordGuess);

    var x = [wordGuess];
    console.log(x);
    
    var wins = wordGuess;
    var space = wordToGuess.split(" _ ");
    
    
    //hidde word and show only length as spaces!!!
    

   

    //adding number Guesses Remaining to html
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = numberGuessesRemaining;
    

    //PUT HIDDEN WORD IN HTML ELEMENT
    


    //on event key up get letter, lower the case and store on var letter
    document.onkeyup = function (event) {
        //getting key pressed and lower
        var letter = event.key.toLowerCase();
        
        if (letter.indexOf(guesses) === -1) {
            //guesses.innerHTML = "-";
            guesses += letter;

            //sustract 1 from number Guesses Remaining (15)
            numberGuessesRemaining -= 1;
            console.log(numberGuessesRemaining);
            numberGuessesRemaining.innerHTML
            
            //show letters alredy guesses
            guesses.textContent += guesses;
            guesses.innerHTML;

            for (var i = 0; i < wordGuess.length; i++) {
                //if (letter === wordGuess[i]) {
                   
                    space[i] += " _ ";
                    return space;
                   console.log(space[i]);
                    //hiddenWord [i] === [ _ _ _ _ _ _ _ _ _ _ _]; 
                    //wordGuess[i] = " _ ";
                    //wordGuess.charAt[i] === letter;
                    //space = wordGuess[i];  
                    
                    //console.log(wordGuess);
                    //var space = wordToGuess.length();
                    //wordToGuess[i].innerHTML;
                    //space = 1;
                    //fill letter on wordGuess
                    [i] = [" _ "];
                //}else{
                    //guesses.innerHTML = "_";
                //}
            }
            document.getElementById("space").innerHTML = space;
            
        } else {
            document.getElementById('space').innerHTML += letter;
            document.getElementById('guesses').innerHTML += letter;
            numberGuessesRemaining += -1;
            return ("you guess the correct letter!");
            if(wordGuess === space ){
                alert("YOU WONT");
            }
        }
        //console.log(guesses);
    }
    comments = function () {
        numberGuessesRemaining.innerHTML = "You have " + numberGuessesRemaining + " lives";
        if (lives < 1) {
          shownumberGuessesRemaining.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
          if (numberGuessesRemaining + space === guesses.length) {
            shownumberGuessesRemaining.innerHTML = "You Win!";
          }
        }
      }

   // document.getElementById('reset').onclick = function () {
      //  correct.parentNode.removeChild(correct);
      //  letters.parentNode.removeChild(letters);
       // showClue.innerHTML = "";
       // context.clearRect(0, 0, 400, 400);
       // play();
    //}
}
