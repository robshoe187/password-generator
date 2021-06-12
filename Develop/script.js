// Assignment code here
//Function to gather password size and check for validity
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
    return(passSize);
  }
  
}
//Function for character selection
function passPrompts() {
  var addLower = "abcdefghijklmnopqrstuvwxyz"
  var addUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var addisNumber = "0123456789";
  var addSpecial = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordPool = "";

  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var isNumber = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like to include special characters?"); 

  if (lowerCase == true) {
    passwordPool = passwordPool.concat(addLower);
  }
  
  if (upperCase == true) {
    passwordPool = passwordPool.concat(addUpper);
  }

  if (isNumber == true){
    passwordPool = passwordPool.concat(addisNumber);
  }

  if (specialChar == true) {
    passwordPool = passwordPool.concat(addSpecial);
  }
  if (lowerCase == false && upperCase == false && isNumber == false && specialChar == false) {
    window.alert("No characters selected please try again.")
    passPrompts();
  }
  return(passwordPool);
}
//Function for password generation
function generatePassword() {
  
  var finalPassword = "";
  var tempChar = "";
  var index = passwordSizeEntry();
  var tempString = passPrompts();

  for (let i = 0; i < index ; i++) {
    
    finalPassword = finalPassword.concat(tempString.charAt(Math.floor(Math.random() * tempString.length)));
  }
  return(finalPassword);
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
