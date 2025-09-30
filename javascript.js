console.log("Hello, World!")

const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

const choices = ["rock","paper","scissors"]

const computerChoice = choices[Math.floor(Math.random()*3)]

function playRound(computer, player){
    if (computer == player) {
        return ('It Was A Tie!');
    }
        else if (
            (computer == "rock" && player == "scissors") ||
            (computer == "paper" && player == "rock") ||
            (computer == "scissors" && player == "paper") 
        ){
            return ('You Lost!');
        }
            else {
                return ('You Won!');
            
            }      
}

const winner = playRound(computerChoice, playerChoice)

console.log(playerChoice)
console.log(computerChoice)

console.log(winner)
