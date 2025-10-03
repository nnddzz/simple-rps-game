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
  return prompt("Please type one of the choices : rock, paper, scissors");
}

