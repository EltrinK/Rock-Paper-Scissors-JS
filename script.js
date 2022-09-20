const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors"] },
  paper: { name: "Paper", defeats: ["rock"] },
  scissors: { name: "Scissors", defeats: ["paper"] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

// Reset all 'selected' icons
function resetSeleced() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Reset Scores/Choices  function
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
}

function computerRandomChoice() {
  const computerRandomNumber = Math.random();
  if (computerRandomNumber < 0.33) {
    computerChoice = "rock";
  } else if (computerRandomNumber <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  // Add 'selected stling & playerChoice'
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
  }
}

// Check result increase score update resultText
function updateResult(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}
//  Call functions to process turn
function checkResult(playerChoice) {
  resetSeleced();
  computerRandomChoice();
  displayComputerChoice();
  updateResult(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected stling & playerChoice'
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
  }
}

resetAll();
