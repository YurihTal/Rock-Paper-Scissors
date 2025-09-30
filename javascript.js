console.log("Hello, World!")

const choices = ["rock","paper","scissors"]
var computerChoice = choices[Math.floor(Math.random()*3)]
var playerChoice = 0

function playRound(computerChoice, playerChoice){
    if (computerChoice == playerChoice) {
        return ('It Was A Tie!');
    }
        else if (
            (computerChoice == "rock" && playerChoice == "scissors") ||
            (computerChoice == "paper" && playerChoice == "rock") ||
            (computerChoice == "scissors" && playerChoice == "paper") 
        ){
            return ('You Lost!');
        }
            else {
                return ('You Won!');
            
            }      
}


console.log(playerChoice)
console.log(computerChoice)
