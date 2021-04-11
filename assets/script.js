
// Global Varibales 

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
        //pushes each element into charactersLists array.
        var useLowerCase = lowercaseFunction();
        if (useLowerCase) charactersLists.push(lowerCase)
        var useUpperCase = uppercaseFunction();
        if (useUpperCase) charactersLists.push(upperCase)
        var useSpecChar = specCharFunction();
        if (useSpecChar) charactersLists.push(specChar)
        var useNumbers = numFunction();
        if (useNumbers) charactersLists.push(numbers)
        // Used For loop and Math random to randomly pick characters from CharactersLists in array.
        for (var i = 0; i < passwordLength; i++) {
            var randomIndex = Math.floor(Math.random() * charactersLists.length)
            var characterArray = charactersLists[randomIndex]
            var randomIndex2 = Math.floor(Math.random() * characterArray.length)
            password += characterArray[randomIndex2]
        }
    }
    return password;
}

//  lengthPassword function was created to creat a prompt. Prompted is returned if criteria is not met.
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
// lowercase function was created to reveal confirm option. confirm prompt is returned wether its true or false. 
function lowercaseFunction() {
    lowercasePrompt = confirm("Would you like your password to include lowercase letter?")
    //lowercasePrompt = lowercasePrompt.toUpperCase();

    return lowercasePrompt;
}

//uppercase function was created to reveal confirm option. confirm prompt is returned wether its true or false. 
function uppercaseFunction() {
    uppercasePrompt = confirm("Would you like your password to include uppercase letter?")

    return uppercasePrompt;
}

//special character function was created to reveal confirm option. confirm prompt is returned wether its true or false. 
function specCharFunction() {
    specialCharPrompt = confirm("Would you like your password to include special characters?")

    return specialCharPrompt;
}
// number function was created to reveal confirm option. confirm prompt is returned wether its true or false. 
function numFunction() {

    numberPrompt = confirm("Would you like your password to include numbers?")

    return numberPrompt;
}

