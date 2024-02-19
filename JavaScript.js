function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);  // Generates random number between 0 and 2
    if (choice === 0) {
        return "Rock"
    }
    else if (choice === 1) {
        return "Paper"
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice())