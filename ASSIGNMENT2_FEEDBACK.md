Hi Omid! 

--------------------------------

Updated 23-2-2023

Hi Omid, I'm happy to say you squashed the bug and it runs perfctly. Congrats, Välgoddkänt!

Sorry it took me so long to re-assess.

--------------------------------

Nice work! The game works great most of the time, and as you see below you have achieved most of the requirements. The code is nice and clean, but theres a few small issues:

It's a little confusing because the user doesn't know how many games they are playing and what their current score is. 

There is a small bug in the game which mean sometimes the wrong result is returned. Enter "R", "S" or "P" in the prompt then add a console.log(userInput) at line 44 to see what the userInput is that you are passing to the determineWinner function: 

function determineWinner(userInput, computerInput) {
  console.log(userInput);

You have a goddkänt grade now, congratulations! But if you want the VG grade you need to do 2 things:

1. Fix the bug
2. On each prompt, show the current score (show user Score and computer score) and tell the user how many games they need to win. O The first time they play you could show a message like:
"First to win 3 games is the champion! Your score: 0 | Computer score: 0"
Then update it after each game, so if the user wins th first game it should show:
"First to win 3 games is the champion! Your score: 1 | Computer score: 0"
And so on.

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅

Array: ✅

Random selection from array: ✅

Loops:
  For: Not needed in this game

  While: ✅
  The while at line 3 could be simplified to:
  while (userPoints < 3 && computerPoints < 3) {
    This will only be true if BOTH the user & computer points are < 3. As soon as one gets to 3 it will evaluate to false.
  

Comparison with user entered data: ✅

Final message: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ❌

Nested logic: ✅

Input validation: ✅

Cancel button handling: ✅

Semantic variable naming: ✅

Code style: ✅  ❌

Pretty good, the indentation sometimes is a bit odd making the code a little hard to follow. Sometimes you use 2 spaces for indention, sometimes you use 4. It should be consistent.
The closing } in functions should be at the same level as the opening "function" statement
eg:
function computerSelection() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  Should be

function computerSelection() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

Also line 33 
  exit;
   this isn't a function in JS so causes an error