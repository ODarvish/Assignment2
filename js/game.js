var userPoints = 0, computerPoints = 0;

while (userPoints + computerPoints < 5) {
  if (userPoints < 3 && computerPoints < 3) {
   playGame();
  }  else {
    break;
  }  
} 

if (userPoints === 3) {
  alert ("First to win 3 games is the champion! Your score: " + userPoints + " | Computer score: " + computerPoints + "\n" +"CONGRATULATIONS! YOU ARE THE BIG WINNER.");
}  
else {
  alert ("First to win 3 games is the champion! Your score: " + userPoints + " | Computer score: " + computerPoints + "\n" +"SORRY! YOU LOST.");
}  

function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
function userSelection(Tie) {
  let userInput = "";

  while (!(userInput.toLowerCase() === "r" || userInput.toLowerCase() === "p" || userInput.toLowerCase() === "s")) {
    userInput = prompt("First to win 3 games is the champion! Your score: " + userPoints + " | Computer score: " + computerPoints + "\n" + Tie + "\nEnter 'R' for rock, 'P' for paper or 'S' for scissors");
    
    if (userInput === null) {
      alert("You choose cancel the game");
      exit;
    }
  }

  userInput = userInput.toLowerCase();

  if (userInput === "r") userInput = "rock"; 
  else if (userInput === "p") userInput = "paper";
  else if (userInput === "s")userInput = "scissors";
  return userInput;
  }
  
function determineWinner(userInput, computerInput) {
  console.log(userInput);
  if (userInput === computerInput) {
    return "tie";
  }

  if (userInput === "rock") {
    if (computerInput === "paper") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
      return "You win!"
    }
  } else if (userInput === "paper") {
    if (computerInput === "scissors") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
      return "You win!"
    }
  } else {
    if (computerInput === "rock") {
      computerPoints++;
      return "Computer Wins!"
    } else {
      userPoints++;
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