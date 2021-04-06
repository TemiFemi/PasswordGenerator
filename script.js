
// Add event listener to generate button

var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

var number = "1 2 3 4 5 6 7 8 9 10";

var specChar = "! @ # $ % ^ & * ( ) _ - = +";

generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    var passwordLength = 0;
    var minLength = 128;
    while (passwordLength >= 8 || passwordLength <= 128) {
        var passwordPrompt = prompt("Please enter the amount of chracters that you will like in your password.Your password must be at leat 8 Characters long and no longer than 128 characters");

    }
    console.log(passwordLength)
    var caseUpper = false;
    var caseLower = false;
    var num = false;
    var charSpec = false;
    while (!caseUpper && !caseLower && !num && !charSpec) {
        var caseUpper = prompt("Would you like uppercase characters in your password?")
        var caseLower = prompt("Would you like lowercase characters in your password? ")
        var num = prompt("Would you like number characters in your password?")
        var charSpec = promt("Would you like special characters in your password?")
    }
}
)



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

  // // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword)
