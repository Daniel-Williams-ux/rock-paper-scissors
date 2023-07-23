// Get the elements from the DOM
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `Computer wins! ${computerSelection} beats ${playerSelection}.`;
  }
}

function displayResult(result, playerSelection, computerSelection) {
  playerSign.textContent = playerSelection === 'Rock' ? "✊" : playerSelection === 'Paper' ? "✋" : "✌";
  computerSign.textContent = computerSelection === 'Rock' ? "✊" : computerSelection === 'Paper' ? "✋" : "✌";
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
  scoreInfo.textContent = result;
  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "You" : "Computer";
    endgameMsg.textContent = `${winner} win the game! Final score: You ${playerScore}, Computer ${computerScore}`;
    endgameModal.classList.add('show');
    overlay.classList.add('show');
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = 'Player: 0';
  computerScoreElement.textContent = 'Computer: 0';
  scoreInfo.textContent = 'Select your weapon';
  scoreMessage.textContent = 'First to score 5 points wins the game';
  endgameModal.classList.remove('show');
  overlay.classList.remove('show');
}

rockBtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const result = playRound('Rock', computerSelection);
  displayResult(result, 'Rock');
});

paperBtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const result = playRound('Paper', computerSelection);
  displayResult(result, 'Paper');
});

scissorsBtn.addEventListener('click', () => {
  const computerSelection = computerPlay();
  const result = playRound('Scissors', computerSelection);
  displayResult(result, 'Scissors');
});

restartBtn.addEventListener('click', resetGame);
