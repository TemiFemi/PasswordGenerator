
// Add event listener to generate button

var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"

var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

var number = "12345678910";

var specChar = "! @ # $ % ^ & * ( ) _ - = +";

var passwordLength = 0;

var lowercasePrompt = "";


var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    lengthPassword();
    lowercaseFunction();
    uppercaseFunction();
    specCharFunction();
    numFunction();
}
function lengthPassword() {

    passwordLength = window.prompt("Please enter the amount of chracters that you will like in your password.Your password must be at leat 8 Characters long and no longer than 128 characters");


    if (!passwordLength) {
        return;
    };
    if (passwordLength === " " || isNaN(passwordLength) || passwordLength < 9 || passwordLength > 129) {
        alert("The password length is not acceptable, please try again");
    };
}

function lowercaseFunction() {
    lowercasePrompt = prompt("Would you like your password to include lowercase letter?")
    lowercasePrompt = lowercasePrompt.toUpperCase();

    if (!lowercasePrompt) {
        return;
    }
    if (lowercasePrompt !== "Yes" && lowercasePrompt !== "No") {
        alert("Please enter Yes or No")
    }
}

function uppercaseFunction() {
    uppercasePrompt = prompt("Would you like your password to include uppercase letter?")

    if (!uppercasePrompt) {
        return;
    };

    if (uppercasePrompt !== "Yes" && uppercasePrompt !== "No") {
        alert("Please enter Yes or No")

    }
}

function specCharFunction() {
    specialCharPrompt = prompt("Would you like your password to include special characters?")

    if (!specialCharPrompt) {
        return;
    }

    if (specialCharPrompt !== "Yes" && specialCharPrompt !== "No") {
        alert("Please enter Yes or No")
    }
}

function numFunction() {
    numberPrompt = prompt("Would you like your password to include numbers?")

    if (!numberPrompt) {
        return;
    }

    if (numberPrompt !== "Yes" && numberPrompt !== "No") {
        alert("Please enter Yes or No")

    }
}

