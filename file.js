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
            return "You lose!";
        }
        else return "You win!";
    }
    if (lowerCasePlayerSelection === "paper"){
        if (computerSelection === "scissor"){
            return "You lose!";
        }
        else return "You win!";
    }
    if (lowerCasePlayerSelection === "scissor"){
        if (computerSelection === "rock"){
            return "You lose!";
        }
        else return "You win!";
    }

}


const computerSelection = getComputerChoice();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));

    
let compScore = 0;
let playerScore = 0;

function game() {
    for (let i= 1; i <= 5; i++){
        const playerSelection = prompt(); 
        if (playRound(playerSelection, computerSelection) === "You lose!"){
            compScore ++;
            console.log("This is a score for computer, you lost");
        }
        else if (playRound(playerSelection, computerSelection) === "You win!"){
            playerScore ++;
            console.log("This is your score, computer lost");
        }
        else if (playRound(playerSelection, computerSelection) === "This is a tie!"){
            console.log("It's a tie");
        }
    }
    
   
}
console.log(game());



