
// Add event listener to generate button

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowerCase = "abcdefghijklmnopqrstuvwxyz"

var numbers = "1234567890";

var specChar = "!@#$%^&*()_-=+";

var passwordLength = 0;

var lowercasePrompt = "";

var charactersLists = [];


var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
    //document.getElementById("pword").innerHTML=""
    var password = "";
    var isValidLength = lengthPassword();
    if (isValidLength) {

        var useLowerCase = lowercaseFunction();
        if (useLowerCase) charactersLists.push(lowerCase)
        var useUpperCase = uppercaseFunction();
        if (useUpperCase) charactersLists.push(upperCase)
        var useSpecChar = specCharFunction();
        if (useSpecChar) charactersLists.push(specChar)
        var useNumbers = numFunction();
        if (useNumbers) charactersLists.push(numbers)
        for (var i = 0; i < passwordLength; i++) {
            var randomIndex = Math.floor(Math.random() * charactersLists.length)
            var characterArray = charactersLists[randomIndex]
            var randomIndex2 = Math.floor(Math.random() * characterArray.length)
            password += characterArray[randomIndex2]
        }
    }
    return password;
}


function lengthPassword() {

    passwordLength = prompt("Please enter the amount of chracters that you will like in your password.Your password must be at least 8 Characters long and no longer than 128 characters");


    if (!passwordLength) {
        return false;
    };
    if (passwordLength === " " || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 129) {
        alert("The password length is not acceptable, please try again");
        return false;
    };
    return true
}

function lowercaseFunction() {
    lowercasePrompt = confirm("Would you like your password to include lowercase letter?")
    //lowercasePrompt = lowercasePrompt.toUpperCase();

    return lowercasePrompt;
}

function uppercaseFunction() {
    uppercasePrompt = confirm("Would you like your password to include uppercase letter?")

    return uppercasePrompt;
}

function specCharFunction() {
    specialCharPrompt = confirm("Would you like your password to include special characters?")

    return specialCharPrompt;
}

function numFunction() {

    numberPrompt = confirm("Would you like your password to include numbers?")

    return numberPrompt;
}

