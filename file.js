function getComputerChoice(){
    const num= Math.floor(Math.random()*3)
    switch (num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissor";
    }
}

function caseSensitive (playerSelection){
    return (playerSelection = playerSelection.AtChar()[0].toUpperCase() + playerSelection.slice(1).toLowerCase());
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "This is a tie!";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper"){
            return "You lose! Paper beats Rock";
        }
        else return "You win! Rock beats Scissor";
    }
    if (playerSelection === "Paper"){
        if (computerSelection === "Scissor"){
            return "You lose! Scissor beats Paper";
        }
        else return "You win! Paper beats Rock";
    }
    if (playerSelection === "Scissor"){
        if (computerSelection === "Rock"){
            return "You lose! Rock beats Scissor";
        }
        else return "You win! Scissor beats Paper";
    }
}

