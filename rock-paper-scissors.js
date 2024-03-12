
// To randomly return either "Rock", "Paper", or "Scissors"
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// To determine if user or computer wins
function playRound(playerSelection, computerSelection) {
    // Convert both choices to lowercase (case-sensitive)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Validate player choices
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Please choose between rock, paper, or scissors";
    }

    // Check for a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // Check if player wins
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
    } 

    // Check if player loses
    return `You Lose! ${capitalize(playerSelection)} loses to ${capitalize(computerSelection)}`;
}


// To keep score of a five round game and report a winner or loser at the end
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = prompt("Enter you choice (rock, paper, scissors):");
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(`Your Choice: ${userChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);

        const result = playRound(userChoice, computerChoice);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You Win! Your Score is ${playerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You Lose! Your Score is ${playerScore}`);
    } else {
        console.log(`It's a tie! Your Score is ${playerScore}`);
    }
}


// To capitalize the first word of the string for readability
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


playGame();