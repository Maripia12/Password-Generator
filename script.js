// Assignment Code
var generateBtn = document.querySelector("#generate");
 
var values = "abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

var passwordValues = "";
var passwordSelection = ("");

 
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
    return;
  }

    if(passwordLength > 128) {
    alert("Password too long");
    return;
  }
  
 
  var numberInPassword = confirm("Do you want numbers in your password?");

    if(numberInPassword) {
      passwordValues = passwordValues + "0123456789";

  }



  var specialCharsInPasswords = confirm("Do you want special characters?");

    if(specialCharsInPasswords ) {
      passwordValues = passwordValues  + "!@#$%^&*()" ;

    }

  var uppercaseInPasswords = confirm("Do you want uppercase letters?");
  
    if(uppercaseInPasswords) {

      passwordValues = passwordValues + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    }
    
   var lowercaseInPasswords = confirm("Do you want lowercase letters?");  

    if(lowercaseInPasswords) {

      passwordValues = passwordValues  + "abcdefghijklmnopqrstuvwxyz";
    
    }

  


 
  
  

  
 

   
  

  }


  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
