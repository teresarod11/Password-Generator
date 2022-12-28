// 1. Generate password
// 2. Set password length from 8-128 characters
// 3. Password set to lowercase, uppercase, numeric, and/or special characters
// 4. Password is generated and shown in the text box


var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = "!@#$%^&*(),.;:{}[]_-=+?~";
var password = '';
var length;
var randomPassword = '';
var pass = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("hello")

length = window.prompt("How many letters would you like? :)");

  while (length < 8 || length > 128 || isNaN(length) || length === null ) {
    alert("That's an invalid number. Please enter a number between 8-128.");
    length = window.prompt("How many letters would you like? :)");
  }

  password = '';

  var UC = window.confirm("Would you like UPPERCASE letters?");
     if (UC) {
      password = password.concat(upperCase);
    }

  var lc = window.confirm("Would you like lowercase letters?");
    if (lc) {
      password = password.concat(lowerCase);
  }

  var num = window.confirm("Would you like numbers?");
    if (num) {
      password = password.concat(numbers);
  }

  var SC = window.confirm("Would you like special characters?");
    if (SC) {
      password = password.concat(symbols);
  }
console.log(password);

  while (UC === false && lc === false && num === false && SC === false) {
    alert("Choose at least one character?");
    UC = window.confirm("Would you like UPPERCASE letters?");
    lc = window.confirm("Would you like lowercase letters?");
    num = window.confirm("Would you like numbers?");
    SC = window.confirm("Would you like special characters?");
    if (UC) {
      password = password.concat(upperCase);
    }
    if (lc) {
      password = password.concat(lowerCase);
    }
    if (num) {
      password = password.concat(numbers);
    }
    if (SC) {
      password = password.concat(symbols);
    }
  }
   
   randomPassword = '';  
       for (var i = 0; i < length; i++) {
    pass = password.charAt(Math.floor(Math.random() * password.length));
   randomPassword = randomPassword.concat(pass);
 }
   return randomPassword;  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

