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

// function to play 5 rounds
function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  // function to play single round
  function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
      humanScore++;
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice == computerChoice){
      console.log(`It's a tie! ${humanChoice} vs ${computerChoice}`);
    }
      else {
      computerScore++;
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore){
    console.log(`Congratulation you win the game! here is the scores:
      You: ${humanScore}
      Computer: ${computerScore}`)
  } else if (humanScore === computerScore) {
    console.log("It's Draw")
  } else {
    console.log(`Sorry you lose the game! here is the scores:
      You: ${humanScore}
      Computer: ${computerScore}`)
  }
}

playGame();
