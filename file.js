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


function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper"){
    return ("You lose! Paper beats Rock");}
    elseif (playerSelection === "Rock" && computerSelection === "Scissor"){
    return ("You win! Rock beats scissors");}
    elseif (playerSelection === "Paper" && computerSelection === "Rock" ){
    return ("You win! Paper beats Rock"); }
    elseif (playerSelection === "Paper" && computerSelection === "Scissor"){
    return ("You lose! Scissor beats Paper");}
    
    elseif(playerSelection === "Scissor" && computerSelection === "Paper"){
    return ("You win! Scissor beats Paper");
    }
    elseif (playerSelection === "Scissor" && computerSelection === "Rock"){
    return ("You lose! Rock beats Scissor");
    }
    }
    

