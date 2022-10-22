function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "It's a tie!";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats Rock.";
        } else {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors.";
        } else {
            return "You win! Scissors beats Paper.";
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();