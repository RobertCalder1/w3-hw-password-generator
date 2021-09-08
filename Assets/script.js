// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
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
  '.',
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
  'z',
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
  'Z',
];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  password.value = "";

    var Characters = prompt("Enter password length:\n(min: 8 max: 128)");

    if (!Characters) {
    return;
    }
  
    if (Characters < 8) {
    alert("Password must be 8 or more Characters")
    return;
    }
  
    if (Characters > 128) {
    alert("Password must be less than 128 characters")
    return;
    }
  
    var Uppercase = confirm("Do you want uppercase letters?");
    var Lowercase = confirm("Do you want lowercase letters?");
    var Numbers = confirm("Do you want numbers?");
    var SpecialCharacters = confirm("Do you want special characters?");
    var UseCharacters = [];
    //create array depending on selected options
    if (Uppercase === true) UseCharacters = UseCharacters.concat(upperCasedCharacters);
    if (Lowercase === true) UseCharacters = UseCharacters.concat(lowerCasedCharacters);
    if (Numbers === true) UseCharacters = UseCharacters.concat(numericCharacters);
    if (SpecialCharacters === true) UseCharacters = UseCharacters.concat(specialCharacters);
    //produce alert if no character options are selected
    if (UseCharacters.length === 0) {
    alert("You must select at least one character type!")
    return;
    }
  for (var i = 0; i <= Characters; i++) {
  var index = Math.floor(Math.random() * UseCharacters.length);
  password.value += UseCharacters[index];
    console.log(password.value)
  }
}