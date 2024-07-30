//Human Choice:
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper Or Scissor");
    return humanChoice.toUpperCase();
}



//Computer Choice
function getComputerChoice(){
    let max = 3;
    let computerChoice = Math.floor(Math.random()*max)
    //console.log(computerChoice);
    if(computerChoice == 1){
        computerChoice = "ROCK";
    }else if(computerChoice == 2){
        computerChoice = "PAPER";
    }else{
        computerChoice = "SCISSORS";
    }
    return computerChoice;
};
    



//comparing with the basis 1 = rock, 2 = paper, 3 = scissors
function playRound(humanChoice,computerChoice){
if(humanChoice == computerChoice){
    return 0;
}else if(humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK"){
    return 1;
}else{
    return 2;
}
}


function playMatch(){
    let humanScore = 0, computerScore = 0;
    for(let i = 1; i <= 5; i++){

        console.log(`ROUND: ` + i);
        let humanChoice = getHumanChoice(); 
        console.log(`You entered ${humanChoice}`);

        let computerChoice = getComputerChoice();
        console.log(`Computer's Choice: ${computerChoice}`)

        let newScore = playRound(humanChoice, computerChoice);

        if(newScore == 0){
            console.log("Its a draw");
        }else if(newScore == 1){
            console.log("YOU WIN!!")
            ++humanScore;
        }else{
            console.log("YOU LOSE!!")
            ++computerScore;
        } 
        console.log(`Total Score`+ `\n` +
            `Your: ${humanScore}` + `\n` +
            `Computer: ${computerScore}`
        )
    }
    if(computerScore == humanScore){
        console.log("*********Its a Draw. Go for another round*********");
    }
    else if(computerScore > humanScore){
        console.log("*********You Lose. Computer Wins*********")
    }
    else{
        console.log("*********You Win. Computer Lose*********");
    }

}

playMatch();





