import inquirer from 'inquirer';

// Function to generate random computer choice
function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to start the game
async function startGame() {
  let playerChoiceObject = await inquirer.prompt([
    {
      name: 'playerChoice',
      type: 'list',
      message: 'Choose your move:',
      choices: ['rock', 'paper', 'scissors']
    }
  ]);

  const playerChoice = playerChoiceObject.playerChoice;
  const computer = computerChoice();
  const result = determineWinner(playerChoice, computer);

  console.log(`Player chose: ${playerChoice}`);
  console.log(`Computer chose: ${computer}`);
  console.log(`Result: ${result}`);
}

// Start the game
startGame();