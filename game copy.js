
const humanSelection = document.querySelector('div.user.score');
const botSelection = document.querySelector('div.bot.score');



let playersChoice;
let humanScore = 0, computerScore = 0;

//humanSelection.textContent = `User:   ${humanScore}`
//botSelection.textContent = `Bot:  ${humanScore}`

        humanSelection.addEventListener("click", (event) => {
            let target = event.target;

            switch(target.id) {
                case 'rock':
                    console.log("rock was selected");
                    playersChoice = "ROCK";
                    break;
                case 'paper':
                    console.log("paper was selected");
                    playersChoice="PAPER";
                    break;
                case 'scissor':
                    console.log("scissor was selected");
                    playersChoice ="SCISSORS"
                    break;
            }
            console.log(playersChoice);


            //Computer Choice
            function getComputerChoice(){
                 let max = 3, computerChoice = Math.floor(Math.random()*max);

                 if(computerChoice == 1){
                 computerChoice = "ROCK";
                 }else if(computerChoice == 2){
                 computerChoice = "PAPER";
                 }else{
                 computerChoice = "SCISSORS";
                 }
                 return computerChoice;
            };


            console.log(`Computer: ` + getComputerChoice());



            function playRound(playersChoice,computerChoice){
                if(playersChoice == computerChoice){
                    return 0;
                }else if(playersChoice == "ROCK" && computerChoice == "SCISSORS" || playersChoice == "PAPER" && computerChoice == "ROCK"){
                    return 1;
                }else{
                    return 2;
                }
            }
            
            console.log(playRound(playersChoice, getComputerChoice()));


            function playMatch(){
                
                    
                    let humanChoice = playersChoice; 
                    console.log("**")
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
                    /* const score = document.querySelector(`div.score`);
                    const uscore = score.createElement(`div`);
                    uscore.textContent = "Username: " + humanScore
                    score.appendChild(uscore); */
            
                    console.log(`Total Score`+ `\n` +
                        `Your: ${humanScore}` + `\n` +
                        `Computer: ${computerScore}`
                    )
                
            
            
            
                if(computerScore == humanScore){
                    console.log("*********Its a Draw. Go for another round*********");
                }
                else if(computerScore > humanScore){
                    console.log("*********You Lose. Computer Wins*********")
                }
                else{
                    console.log("*********You Win. Computer Lose*********");
                }
                
                //humanSelection.textContent = `User:   ${humanScore}`
                //botSelection.textContent = `Bot:  ${humanScore}`
            }

            playMatch();


        });


        /* function getHumanChoice(playersChoice){
            return playersChoice;
        } */
    

    
    

    
    //comparing with the basis 1 = rock, 2 = paper, 3 = scissors
    
    
    


    