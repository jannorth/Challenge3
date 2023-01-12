
// assign variables for prompt
var number =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacter = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
var characterPool = []
var randomPasswword = []

function generatePassword() {
    // prompt user for password length and possible character types
    var passwordLength = prompt("How long would you like your password to be?");
        if (passwordLength < 8 || passwordLength > 128) {
            alert("password needs to be between 8-128 characters");
            return
        };
    var lowerCaseChoice = confirm("Would you like lowercase characters in your password?");
    var upperCaseChoice = confirm("Would you like uppercase characters in your password?");
    var numberChoice = confirm("Would you like numbers in your password?");
    var specialCharacterChoice = confirm("Would you like special characters in your password?");

        // 
        if (lowerCaseChoice === false && upperCaseChoice === false && numberChoice === false && specialCharacterChoice === false) {
          alert("select at least one character");
          return
        };
    
        // depending on user answers, create array that stores possible characters
        if(lowerCaseChoice===true) {
            characterPool=characterPool.concat(lowerCase);
      };

        if(upperCaseChoice===true) {
            characterPool=characterPool.concat(upperCase);
      };

        if(numberChoice===true) {
            characterPool=characterPool.concat(number);
      };

        if(specialCharacterChoice===true) {
            characterPool=characterPool.concat(specialCharacter);
      };
            console.log(characterPool);

            // for loop that applies users password length
            // takes answer from passwordLength prompt and add conditional statements
            for(var i = 0; i < passwordLength; i ++){

              //   //minimum password length validation  
              //   if(passwordLength.length < 8) {  
              //       document.getElementById("password").innerHTML = "**Password length must be atleast 8 characters";  
              //       return false;
              // };

        // insert a random character from possible characterPool into final password array
        var randomIndex = Math.floor(Math.random()*characterPool.length);
        var characterValue = characterPool[randomIndex];
      
        randomPasswword.push(characterValue);
        console.log(randomPasswword);
      };

  // return string that will be set into text area
  return randomPasswword.join("");
}


// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  var password = generatePassword() || "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);