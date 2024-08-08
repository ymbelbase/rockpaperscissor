
const humanSelection = document.querySelector('div.user.selection');
const botSelection = document.querySelector('div.bot.selection');
const humanScoreSelection = document.querySelector('div.user.score');
const botScoreSelection = document.querySelector('div.bot.score');
const result = document.querySelector(`div.result`);


let playersChoice; 
let computerChoice = `....`
let humanScore = 0, computerScore = 0;

humanScoreSelection.textContent = `User:   ${humanScore}`;
botScoreSelection.textContent = `Bot:  ${computerScore}`;

botSelection.textContent = `Computer Says: ${computerChoice}`;
result.textContent = `Yet to Play. Make your move`;


        humanSelection.addEventListener("click", (event) => {
            let target = event.target;

            switch(target.id) {
                case 'rock':
                    playersChoice = "ROCK";
                    break;
                case 'paper':
                    playersChoice="PAPER";
                    break;
                case 'scissor':
                    playersChoice ="SCISSORS"
                    break;
            }


            //Computer Choice
            function getComputerChoice(){
                let max = 3, 
                computerChoice = Math.floor(Math.random()*max);

                if(computerChoice == 1){
                computerChoice = "ROCK";
                }else if(computerChoice == 2){
                computerChoice = "PAPER";
                }else{
                computerChoice = "SCISSORS";
            }
            return computerChoice;
            };

            computerChoice = getComputerChoice();
            botSelection.textContent = `Computer Says: ${computerChoice}`;

            function playRound(playersChoice,computerChoice){
                if(playersChoice == computerChoice){
                    return 0;
                }else if(playersChoice == "ROCK" && computerChoice == "SCISSORS" || playersChoice == "PAPER" && computerChoice == "ROCK"){
                    return 1;
                }else{
                    return 2;
                }
            }

            let digitResult = playRound(playersChoice,computerChoice);
            console.log(digitResult);

            function playMatch(){

                if (humanScore >= 5 || computerScore >= 5) {
                    result.textContent = `Game Over! Final Score - User: ${humanScore}, Bot: ${computerScore}`;
                    return; // Stop the function execution
                }
                
                    
                    let humanChoice = playersChoice; 
                    console.log(`USER: ${humanChoice}`);
            
                    let computerChoice = getComputerChoice();
                    console.log(`COMPUTER: ${computerChoice}`)
            
                    let newScore = digitResult;
            
            
                    console.log(`Total Score`+ `\n` +
                        `Your: ${humanChoice}` + `\n` +
                        `Computer: ${computerScore}`
                    )
                
            
            
            
                if(digitResult == 0){
                    console.log("*********DRAW*********");
                    result.textContent = `Draw. Go again`;
                }
                else if(digitResult == 1){
                    console.log("*********WIN*********")
                    result.textContent = `You Win. Keep the streak'`;
                    ++humanScore;
                }
                else{
                    console.log("*********LOSE*********");
                    result.textContent = `You lose. Strike again`;
                    ++computerScore;
                }
                humanScoreSelection.textContent = `User:   ${humanScore}`
                botScoreSelection.textContent = `Bot:  ${computerScore}`
            }

            playMatch();


        });


        /* function getHumanChoice(playersChoice){
            return playersChoice;
        } */
    

    
    

    
    //comparing with the basis 1 = rock, 2 = paper, 3 = scissors
    
    
    


    