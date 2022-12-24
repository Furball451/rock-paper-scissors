function getComputerChoice() {
    let choice = [1,2,3];
    let cpu_choice = Math.floor(Math.random() * choice.length) + 1;
    if (cpu_choice === 1)
        return 'rock'
    if (cpu_choice === 2)
        return 'paper'
    if (cpu_choice === 3) 
        return 'scissors'

}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    // const playerSelection = prompt("Choose rock, paper, or scissors").toLocaleLowerCase;
    // const computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissors')
        return 'Player wins! Rock beats scissors'
    if (playerSelection === 'rock' && computerSelection === 'rock')
        return 'Tie!'
    if (playerSelection === 'rock' && computerSelection === 'paper')
        return 'Computer wins! Paper beats rock'
    if (playerSelection === 'paper' && computerSelection === 'rock')
        return 'Player wins! Paper beats rock'
    if (playerSelection === 'paper' && computerSelection === 'paper')
        return 'Tie!'
    if (playerSelection === 'paper' && computerSelection === 'scissors')
        return 'Computer wins! Scissors beat paper'
    if (playerSelection === 'scissors' && computerSelection === 'paper')
        return 'Player wins! Scissors beats paper'
    if (playerSelection === 'scissors' && computerSelection === 'scissors')
        return 'Tie!'
    if (playerSelection === 'scissors' && computerSelection === 'rock')
        return "Computer wins! Rock beats scissors"
}

const playerSelection = prompt("Choose rock paper or scissors");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))

