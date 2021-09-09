// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password = passwordText.value;
}
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create function to check if string only contains numbers
function isNumeric(num) {
  return !isNaN(num);
}

//create function to generate password when button is clicked
function generatePassword() {
  password.value = "";

  var characters = prompt("Enter password length:\n(min: 8 max: 128)");

  if (!characters) {
    return;
  }

  //check that Password Length is between 8 & 128 characters
  if (characters < 8) {
    alert("Password must be 8 or more characters");
    return;
  }

  if (characters > 128) {
    alert("Password must be less than 128 characters");
    return;
  }

  //check that Password Length only contains numbers
  if (!isNumeric(characters)) {
    alert("Password length should only be numeric");
    return;
  }

  //create dialogues to confirm parameters of password generated
  var uppercase = confirm("Do you want uppercase letters?");
  var lowercase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want numerics?");
  var specialCharacters = confirm("Do you want special characters?");

  //create variable for final array for password generation
  var useCharacters = [];
  //create array depending on selected options
  if (uppercase) useCharacters = useCharacters.concat(upperCasedCharacters);
  if (lowercase) useCharacters = useCharacters.concat(lowerCasedCharacters);
  if (numbers) useCharacters = useCharacters.concat(numericCharacters);
  if (specialCharacters)
    useCharacters = useCharacters.concat(specialCharacters);

  //produce alert if no character options are selected
  if (UseCharacters.length === 0) {
    alert("You must select at least one character type!");
    return;
  }
  //generate password
  for (var i = 0; i <= Characters; i++) {
    var index = Math.floor(Math.random() * UseCharacters.length);
    password.value += UseCharacters[index];
    console.log(password.value);
  }
}
