// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmLowerCase;
let confirmUpperCase;


// Function to prompt user for password options
// function getPasswordOptions() {


//   let passwordCharacters = []

//   if (confirmSpecialCharacter) {
//     passwordCharacters = passwordCharacters.concat(specialCharacters)
//   }

//   if (confirmNumericCharacter) {
//     passwordCharacters = passwordCharacters.concat(numericCharacters)
//   }

//   if (confirmLowerCase) {
//     passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
//   }

//   if (confirmUpperCase) {
//     passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
//   }

//   console.log(passwordCharacters)

// }

// Function for getting a random element from an array
function getRandom() {
  let randomPassword = ""

  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

}

// Function to generate password with user input
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while (confirmLength <= 10 || confirmLength >= 64) {
    alert("Password length must be between 10-64 characters Try again");
    let confirmLength = (prompt("How many characters would you like your password to contain?"));
  }

  // Repeat back how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);

  // Determine parameters of password 
  let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  let confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // Loop if answer is outside the parameters 
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    let confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    let confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    let confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    let confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  }
  let passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
  }

  console.log(passwordCharacters)

  let randomPassword = ""

  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;


}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);