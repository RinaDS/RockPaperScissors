const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error');
  }
}
const getComputerChoice = () =>{
 let randomNumber = Math.floor(Math.random()* 3);
  switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
 
  }
}
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === 'bomb'){
    return 'You won with that BOMB!';
  }
  if(userChoice === computerChoice){
    return 'The game was a tie.';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
     return 'You won!';
    } else {
      return'The computer won.';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw:  ${computerChoice}`);
console.log(determineWinner(userChoice,computerChoice));
}
playGame();

