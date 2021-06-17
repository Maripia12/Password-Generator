// Assignment Code
var generateBtn = document.querySelector("#generate");
 
var values = "abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

var passSelection = ("");

 
// generateBtn=document.getElementById('generateBtn')

 
// Write password to the #password input

function writePassword() {
  console.log("button was clicked");

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword() {

  
  var passwordLength = prompt("Enter the number of characters. Password may be at least 8 characters and no more than 128 characters.");
  // create conditional statements that will validate the password length.

    if(passwordLength < 8) {
  alert("Password too short");
  generatePassword();
    }

    if(passwordLength > 128) {
  alert("Password too long");
  generatePassword();
  }
  
 
   if(confirm("Do you want numbers in your password?") ) {

    passSelection= passSelection.concat(values);

   
   }

  if(confirm("Do you want special characters?") ) {

    passSelection= passSelection.concat(values);

   }

  if(confirm("Do you want uppercase letters?") ) {

 
   }


  if(confirm("Do you want lowercase letters?") ) {
  
  
  }

  
 

   
  

  for(var i = 0; i <= generateBtn; i++){
  passSelection = passSelection + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));

  }
  
}
   




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
