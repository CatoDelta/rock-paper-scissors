function getComputerChoice() { // This function randomly returns either 'rock' 'paper' or 'scissors'.
    let choice = Math.floor(Math.random() * 3);  // Generates random number between 0 and 2
    if (choice === 0) {
        return "rock"
    }
    else if (choice === 1) {
        return "paper"
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();  // add to store computer choice
   
    if (playerChoice === computerChoice) {
        return "Draw!"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        return "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }
}

console.log(playRound("ScIssors", getComputerChoice()))
