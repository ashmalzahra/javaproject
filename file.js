function getComputerChoice(){
    const num= Math.floor(Math.random()*3)
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissor";
    };
};


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const outcomeDiv = document.querySelector('#outcome');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.computer-score');

let compScore = 0;
let playerScore = 0;

const currentScore = (playerScore, compScore) =>{
playerScoreSpan.innerText =  `Player Score: ${playerScore}`;
compScoreSpan.innerText = `Computer Score: ${compScore}`;
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        const p = document.createElement('p');
        p.innerText =  "This is a tie!";
        outcomeDiv.appendChild(p);
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            compScore++
            const p = document.createElement('p');
            p.innerText = "You lose!";
            outcomeDiv.appendChild(p);
        }
        else { playerScore++
        const p = document.createElement('p');
        p.innerText =  "You win!";
        outcomeDiv.appendChild(p);}
    }
    if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            compScore++
            const p = document.createElement('p');
            p.innerText =  "You lose!";
            outcomeDiv.appendChild(p);
        }
        else {playerScore++
        const p = document.createElement('p');
        p.innerText =  "You win!";
        outcomeDiv.appendChild(p);}
    }
    if (playerSelection === "scissor"){
        if (computerSelection === "rock"){
            compScore++
            const p = document.createElement('p');
            p.innerText =  "You lose!";
            outcomeDiv.appendChild(p);
        }
        else { playerScore++
        const p = document.createElement('p');
        p.innerText = "You win!";
        outcomeDiv.appendChild(p);}
    }

};

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.innerText = `You won! You beat computer from ${playerScore} to ${compScore}`;
        outcomeDiv.appendChild(h2);}
    
    else if (compScore === 5){
        const h2 = document.createElement('h2');
        h2.innerText = `You lost! Computer beat you from ${compScore} to ${playerScore}`;
        outcomeDiv.appendChild(h2);
    }
};

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection)
    currentScore(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection)
    currentScore(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});

scissorBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissor";
    playRound(playerSelection, computerSelection)
    currentScore(playerScore, compScore)
    checkForWinner(playerScore, compScore)
});




/*function game() {
    for (let i= 1; i <= 5; i++){
        
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
    if (compScore == playerScore){
        console.log("This round is a tie, play again!");
    }
    else if (compScore > playerScore){
        console.log("You lost this round, computer won!");
    }
    else if (playerScore > compScore){
        console.log("You won this round, computer lost!");
    }
   
};
console.log(game());




*/


