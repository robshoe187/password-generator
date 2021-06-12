// Assignment code here

function passwordSizeEntry() {
  var passSize = parseInt(window.prompt("What is the length of your password? (8-128 Characters)"));

  if (passSize < 8) {
    window.alert("Password too short please choose another length.");
    passwordSizeEntry();
  }
  else if (passSize > 128) {
    window.alert("Password too long please choose another length.");
    passwordSizeEntry();
  }
  else if(typeof passSize !== "number") {
    window.alert("Password incorrect please enter another value.");
    passwordSizeEntry();
  }
  else {
    passPrompts();
  }
}

function passPrompts() {
  console.log("passPrompts");
}

function generatePassword() {
  passwordSizeEntry();
}

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
