function getComputerChoice() {
  let selection = ["Rock", "Paper", "Scissors"];
  const choice = selection[Math.floor(Math.random() * 3)];
  return choice;
}
function playRound(computerChoice, playerSelection) {
  if (computerChoice == "Rock" && playerSelection == "Paper")
    return "Player Wins!";

  if (computerChoice == "Rock" && playerSelection == "Scissors")
    return "Computer Wins!";

  if (computerChoice == "Paper" && playerSelection == "Scissors")
    return "Player Wins!";

  if (computerChoice == "Paper" && playerSelection == "Rock")
    return "Computer Wins!";

  if (computerChoice == "Scissors" && playerSelection == "Rock")
    return "Player Wins";
  else return "TIE!";
}

function playGame() {
  const computerChoice = getComputerChoice();
  const playerSelection = prompt("1 for Rock, 2 for Paper, 3 for Scissors");
  const result = playRound(computerChoice, convertSelection(playerSelection));
  console.log(result);
  console.log("Computer Choice:", computerChoice);
}

function convertSelection(selection) {
  switch (selection) {
    case "1":
      return "Rock";
    case "2":
      return "Paper";
    case "3":
      return "Scissors";
    default:
      return null;
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();
