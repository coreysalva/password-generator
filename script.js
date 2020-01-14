// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character sets
var smallCase = 'abcdefghijklmnopqrstuvwxyz';
var bigCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var nums = '0123456789';
var specChar = ' !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
var userCharChoices = {
  hasSmall: false,
  hasBig: false,
  hasNum: false,
  hasSpecial: false
}



//Get User input for password length
function getPwLength() {
  //Number of characters in pw. 0 = not set, 8 = min, 128 = max
  var pwLength = 0;
  var pwText;
  var numcheck = 0;
  var numResponse = prompt("Please enter the number of characters you would like your password to be, between 8-128.");
  if ((numResponse < 8) || (numResponse > 128)) {
    numcheck = 1;
    alert('bad input');
  }
  else {
    numcheck = 2;
    alert('good input');
  }

  //2 means accepted input, 1 means bad input
  while (numcheck < 2) {
    numResponse = prompt("Invalid input, please enter the number of characters you would like your password to be, between 8-128. ex: '24'");
    if ((numResponse < 8) || (numResponse > 128)) {
      numcheck = 1;
      alert('bad input in while loop');
    }
    else {
      numcheck = 2;
      alert('good input in while loop');
    }
  }

  //Now we have a valid string length! Kind of redundant, but I like how clear this makes things
  pwLength = numResponse;
  return pwLength;

}

//Select character sets to use
function getCharSets() {
  newUserChoices = {
    hasSmall: false,
    hasBig: false,
    hasNum: false,
    hasSpecial: false
  }
  if (confirm("Would you like your password to include lowercase characters? Cick confirm for yes, and cancel for no. ex: abcdef")) {
    newUserChoices.hasSmall = true;
  }
  if (confirm("Additionally, would you like your password to include uppercase characters? Cick confirm for yes, and cancel for no. ex: ABCDEF")) {
    newUserChoices.hasBig = true;
  }
  if (confirm("Additionally, would you like your password to include numbers? Cick confirm for yes, and cancel for no. ex: 123456")) {
    newUserChoices.hasNum = true;
  }
  if (confirm("Lastly, would you like your password to include special characters? Cick confirm for yes, and cancel for no. ex: *+,-./:")) {
    newUserChoices.hasSpecial = true;
  }
  return newUserChoices;
}

function generatePassword() {
  var pwLength = getPwLength();
  userCharChoices = getCharSets();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
