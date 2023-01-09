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



function generatePassword() {





  // goal is return string that will be set into text area
  return "Hello!"
}