let randomNumber = Math.floor(Math.random() * 100 + 1);
let counter=7;
function guessNumber() {
  console.log(randomNumber,"<<<<<<<<<<<");
  
  //Collect input from the user
  const guess = document.querySelector(".inputs-Values").value;
  const finalOutput = document.querySelector('.final-output');
  if(guess === NaN || guess < 1 || guess >100){
    finalOutput.innerText = "Please enter a number between 1 ddand 100";
  }else{
    counter--;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if(guess < randomNumber){
    finalOutput.innerText = 'Number is too low, try again ';
  } else if(guess > randomNumber){
    finalOutput.innerText = 'Number is too high, try again ';
  } else if(guess == randomNumber){
    finalOutput.innerText = `${randomNumber} Guess is correct. You win!`;
   
  }
  }
  document.querySelector('.Tries-output').innerText = `It took you ${counter} tries`
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
const resetGame = document.querySelector('.btnNewGame.btn.btn-outline-success');
resetGame.addEventListener('click',newGame);
function newGame() {
  window.location.reload();
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}
// newGame();
//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
