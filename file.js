function getComputerChoice(){
    const num= Math.floor(Math.random()*3)
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissor";
    }
}



function playRound(playerSelection, computerSelection){
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (lowerCasePlayerSelection === computerSelection){
        return "This is a tie!";
    }
    if (lowerCasePlayerSelection === "rock") {
        if (computerSelection === "paper"){
            return "You lose! Paper beats Rock";
        }
        else return "You win! Rock beats Scissor";
    }
    if (lowerCasePlayerSelection === "paper"){
        if (computerSelection === "scissor"){
            return "You lose! Scissor beats Paper";
        }
        else return "You win! Paper beats Rock";
    }
    if (lowerCasePlayerSelection === "scissor"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats Scissor";
        }
        else return "You win! Scissor beats Paper";
    }

}


const computerSelection = getComputerChoice();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));

        
function game() {
    for (let i= 1; i <= 5; i++){
        playRound();
        let playerSelection = prompt(); 
        if (  result === "You win" ){
            playerScore ++;
            console.log(playerScore);
        }
        else if (result === "You lost"){
            compScore ++;
            console.log(compScore);
        }
        ;
    }
}



