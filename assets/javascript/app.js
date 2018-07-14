// variables
var wordOptions = ["nyancat", "chocolaterain", "rickroll", "keyboardcat", "mudkipz", "lolrus"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// functions

function startGame () {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = selectedWord.split("");
  numBlanks = lettersinWord.length;

  guessesLeft = 10;
  wrongLetters = [];
  blanksAndSuccesses = [];

  for (var i=0; i<numBlanks; i++){
    blanksAndSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;

}

function checkLetters(letter) {
  var isLetterInWord = false;
  for (var i=0; i<numBlanks; i++){
    if(selectedWord[i] == letter) {
      isLetterInWord = true;
    }
  }

  if(lettersinWord) {
    for (var i=0; i<numBlanks; i++) {
      if(selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  else {
    wrongLetters.push(letter);
    guessesLeft--
  }
}
console.log(blanksAndSuccesses);

function roundComplete(){
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;


  if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    alert("you win");

    document.getElementById("winCounter").innerHTML = winCount;

    startGame();
  }
  else if (guessesLeft == 0) {
    lossCount++;
    alert("you lost!");
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();
  }

}
// processes
 startGame();

 document.onkeyup = function(event) {
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

   console.log(letterGuessed);
 }



  
    

  // }

