function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerSelection = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
      } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
    }
    
    function game() {
      let playerScore = 0;
      let computerScore = 0;
    
      for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();
    
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
    
        if (roundResult.includes("win")) {
          playerScore++;
        } else if (roundResult.includes("lose")) {
          computerScore++;
        }
      }
    
      console.log("Game over!");
    
      if (playerScore > computerScore) {
        console.log("Congratulations! You won the game.");
      } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game.");
      } else {
        console.log("It's a tie!");
      }
    }
    
    game();