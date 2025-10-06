let humanScore = 0;
let compterScore = 0;

// function to get random number
function getRandomInt(maxNum){
  return Math.floor(Math.random() * maxNum);
}

// function to get computer choice
function getComputerChoice(){
  let result;
  let randomNum = getRandomInt(3);

  if (randomNum == 0){
    result = "rock";
  } else if (randomNum == 1){
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

// function to get human choice
function getHumanChoice(){
  return prompt("Please type one of the choices : rock, paper, scissors").toLowerCase();
}

// function to play single round
function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
    humanScore++;
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
  } else if (humanChoice == computerChoice){
    console.log(`It's a tie! ${humanChoice} vs ${computerChoice}`);
  }
    else {
    compterScore++;
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
