// Assignment code here
// function myFunction() {
//   let text;
//   let person = prompt("Please enter your name:", "Harry Potter");
//   if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characterPool = []

function generatePassword() {
  // prompt user for password length and possible character types
  var passwordLength = prompt("How long would you like your password to be?");
  var lowerCaseChoice = confirm("Would you like lowercase characters in your password?");
  var upperCaseChoice = confirm("Would you like uppercase characters in your password?");
  var numbersChoice = confirm("Would you like numbers in your password?");
  var specialCharactersChoice = confirm("Would you like special characters in your password?");

  // depending on user answers, create array that stores possible characters
  if(lowerCaseChoice===true) {
      characterPool=characterPool.concat(lowerCaseArray);
  };

  if(upperCaseChoice===true) {
    characterPool=characterPool.concat(upperCaseArray);
};

if(numbersChoice===true) {
  characterPool=characterPool.concat(numberArray);
};

if(specialCharactersChoice===true) {
  characterPool=characterPool.concat(specialArray);
};
console.log(characterPool);

  // create for loop that takes into account users password length answer and depending on answer, insert a random character from possible characters array into final password array contingent on that answer


  // goal is return string that will be set into text area
  return "Hello!"
}