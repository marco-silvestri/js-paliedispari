/*
1- User choose an int number (1-5) and Even/Odd. The program will generate a new random int and sum it with the input of the user. Output the winner
2- Take a string and verify if is palindrome.
*/

function sanitizedStringInput() {
  //Force a non-empty string input
   do {
     usersInputRaw = prompt('Even or odd?').toLowerCase().trim();
   } while (usersInputRaw == '' || !isNaN(usersInputRaw));

   return usersInputRaw;
}

function sanitizedNumericalInput() {
  //Force a non-empty numberical input in range between 1 and 5
   do {
     usersInputRaw = parseInt(prompt('Choose a number beteween 1 and 5').trim());
   } while (usersInputRaw == '' || isNaN(usersInputRaw) || usersInputRaw <=1 || usersInputRaw >= 5 );

   return usersInputRaw;
}

function randomGenie(min, max){
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function winnerChecker(finalResult,userChoice){
  var victory;
  if (finalResult % 2 == 0 && userChoice == 'even'){
    victory = true;
  }
  else if (finalResult % 2 != 0 && userChoice == 'odd') {
    victory = true;
  }
  else {
    victory = false;
  }

  return victory;
}

var checked = true;
var userChoice = sanitizedStringInput();

//Force the user to input either 'odd' or 'even'
while (checked == true) {
  if (userChoice == 'even') {
    checked = false;
  }
  else if (userChoice == 'odd') {
    checked = false;
  }
  else {
    userChoice = sanitizedStringInput();
  }
}

var userNumber = sanitizedNumericalInput();
var randomNumber = randomGenie(1,5);
var finalResult = userNumber + randomNumber;
var whoWon = winnerChecker(finalResult,userChoice);

// Check who won and output accordingly. True means victory to the user
if (whoWon == true) {
  console.log('Congrats, you won!');
}
else {
  console.log('Are you ready to buy a pint?');
}

console.log('User is ', userChoice)
console.log('User rolled a ', userNumber);
console.log('AI rolled a ', randomNumber);
console.log(finalResult);
