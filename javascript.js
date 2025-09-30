console.log("Hello, World!")

var computerChoice = Math.floor(Math.random()*4)
var playerChoice = 0

function playRound(computerChoice, playerChoice){
    if (computerChoice = playerChoice) {
        return ('It was a tie!');
    }
        else if (computerChoice > playerChoice){
            return ('You Lose!');
        }
            else if (playerChoice > computerChoice){
                return ('You Win!');
            
            }        
}

console.log(playerChoice)
console.log(computerChoice)