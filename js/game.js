var userPoints = 0, computerPoints = 0;

while (userPoints + computerPoints < 4) {
   playGame();
} 

if (userPoints === 3 || computerPoints === 3) {
  if (userPoints === 3) {
    alert ("CONGRATULATIONS! YOU ARE THE BIG WINNER.");
  }  
  else {
    alert ("SORRY! YOU LOST.");
  }  
}  

function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
function userSelection(tie) {
  let userInput = "";
  userInput = userInput.toLocaleLowerCase();

  while (!(userInput.toLocaleLowerCase() === "r" || userInput.toLocaleLowerCase() === "p" || userInput.toLocaleLowerCase() === "s")) {
    userInput = prompt(tie + "\nEnter 'R' for rock, 'P' for paper or 'S' for scissors");
    
    if (userInput === null) {
      alert("You choose cancel the game");
      exit;
    }
  }

  if (userInput === "r") userInput = "rock"; 
  else if (userInput === "p") userInput = "paper";
  else if (userInput === "s")userInput = "scissors";
  return userInput;
  }
  
function determineWinner(userInput, computerInput) {
  if (userInput === computerInput) {
    return "tie";
  }

  if (userInput === "rock") {
    if (computerInput === "paper") {
      computerPoints = computerPoints + 1;
      return "Computer Wins!"
    } else {
      userPoints = userPoints + 1;
      return "You win!"
    }
  } else if (userInput === "paper") {
    if (computerInput === "scissors") {
      computerPoints = computerPoints + 1;
      return "Computer Wins!"
    } else {
      userPoints = userPoints + 1;
      return "You win!"
    }
  } else {
    if (computerInput === "rock") {
      computerPoints = computerPoints + 1;
      return "Computer Wins!"
    } else {
      userPoints = userPoints + 1;
      return "You win!"
    }
  }
}
  
function playGame() {
  let result = "";
  let userInput = "";
  let computerInput = "";

  do {
    userInput = userSelection(result);
    computerInput = computerSelection();
    result = determineWinner(userInput, computerInput);
  } while(result === "tie");
    result += "\nYou chose " + userInput + " - the computer chose " + computerInput;
    alert(result);
}