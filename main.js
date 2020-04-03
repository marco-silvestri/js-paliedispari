/*
1- User choose an int number (1-5) and Even/Odd. The program will generate a new random int and sum it with the input of the user. Output the winner
2- Take a string and verify if is palindrome.
*/

function sanitizedStringInput(question) {
  //Force a non-empty string input
   do {
     usersInputRaw = prompt(question).toLowerCase().trim();
   } while (usersInputRaw == '' || !isNaN(usersInputRaw));

   return usersInputRaw;
}

function sanitizedNumericalInput(question) {
  //Force a non-empty numberical input in range between 1 and 5
   do {
     usersInputRaw = parseInt(prompt(question).trim());
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

//Take a string and reverse it
function reverseString(stringToReverse){
  var stringReversed = '';
  for (var i = stringToReverse.length -1; i >= 0; i--){
    stringReversed += stringToReverse[i];
  }

  return stringReversed;
}

//Even or odd game in action
//var checked = true;
var userChoice = sanitizedStringInput('Even or odd, boss?');

//Force the user to input either 'odd' or 'even'
while (userChoice != 'odd' && userChoice != 'even' ) {
  userChoice = sanitizedStringInput('It is either EVEN or ODD!');
}

var userNumber = sanitizedNumericalInput('Roll a number between 1 and 5, champ!');
var randomNumber = randomGenie(1,5);
var finalResult = userNumber + randomNumber;
var whoWon = winnerChecker(finalResult,userChoice);

console.log('User is ', userChoice);
console.log('User rolled a ', userNumber);
console.log('AI rolled a ', randomNumber);
console.log('Total rolled ', finalResult);

// Check who won and output accordingly. True means victory to the user
if (whoWon == true) {
  console.log('Congrats, you won!');
}
else {
  console.log('Are you ready to buy a pint?');
}

// Palindrome checker in action!
var askName = sanitizedStringInput('What\'s your name boss?');
var revString = reverseString(askName);

if (revString == askName){
  console.log('Wow! Your name is palindrome!');
}
else {
  console.log('As I thought, your name is not palindrome');
}
