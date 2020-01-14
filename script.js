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
  var numcheck = 0;
  var numResponse = prompt("Please enter the number of characters you would like your password to be, between 8-128.");
  if ((numResponse < 8) || (numResponse > 128)) {
    //bad input
    numcheck = 1;
  }
  else {
    //good input
    numcheck = 2;
  }

  //2 means accepted input, 1 means bad input
  while (numcheck < 2) {
    numResponse = prompt("Invalid input, please enter the number of characters you would like your password to be, between 8-128. ex: '24'");
    if ((numResponse < 8) || (numResponse > 128)) {
      //bad input
      numcheck = 1;
    }
    else {
      //Good input
      numcheck = 2;
    }
  }

  //Now we have a valid string length! Kind of redundant, but I like how clear this makes things
  pwLength = numResponse;
  return pwLength;

}

//Select character sets to use
function getCharSets() {
  var setArray = [smallCase, bigCase, nums, specChar];
  if (!confirm("Would you like your password to include lowercase characters? Cick confirm for yes, and cancel for no. ex: abcdef")) {
    setArray.splice(setArray.indexOf(smallCase), 1);
  }
  if (!confirm("Additionally, would you like your password to include uppercase characters? Cick confirm for yes, and cancel for no. ex: ABCDEF")) {
    setArray.splice(setArray.indexOf(bigCase), 1);
  }
  if (!confirm("Additionally, would you like your password to include numbers? Cick confirm for yes, and cancel for no. ex: 123456")) {
    setArray.splice(setArray.indexOf(nums), 1);
  }
  if (!confirm("Lastly, would you like your password to include special characters? Cick confirm for yes, and cancel for no. ex: *+,-./:")) {
    setArray.splice(setArray.indexOf(specChar), 1);
  }
  return setArray;
}

//Actual password logic
function generatePassword() {
  var pwLength = getPwLength();
  var setArray = getCharSets();
  var result = '';
  var setPicker = 0;

  //Run loop as many times as length, picking a random char from a random set and assigning it to array indices as it increments
  for (var i = 0; i < pwLength; i++) {
    var setPicker = Math.floor(Math.random() * setArray.length);

    result += setArray[setPicker].charAt(Math.floor(Math.random() * setArray[setPicker].length));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
