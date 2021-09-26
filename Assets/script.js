

//set password length and complexity
// ====================================
// stupid arrays why dont you want to play nice?? this could have been so beautifully easy 
//=====================================
//empty string that the arrays will add to
var empty = "";
//array - lowercase letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
//array - uppercase letters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
//array - special characters
var specialCharacters = "!@#$%^&*?+="
// ["!", "@", "#", "$", "%", "^", "&", "*", "+", "=",];
//array - numbers
var numBers = "0123456789"
// ['1', '2', '3', '4', '5', '6', '7', '8', '9',];


// =============================================
//getting the checkboxes info because prompts at the start can go to hell
// =============================================
var passlengthC = document.getElementById("length"); 
var lowerCaseC = document.getElementById("lowerCase");
var upperCaseC = document.getElementById("upperCase");
var specialCharactersC = document.getElementById("specialCharacters");
var numBersC = document.getElementById("numBers");
var password = document.getElementById("password");
var generateBtn = document.getElementById("generate");


//https://stackoverflow.com/questions/47605/string-concatenation-concat-vs-operator
// desperate last minute code inspired by the above stack overflow post
generateBtn.addEventListener("click",function(){
    var comboPassword = empty;
    (lowerCaseC.checked)? empty += lowerCase : "";
    (upperCaseC.checked)? empty += upperCase : "";
    (specialCharactersC.checked)? empty += specialCharacters : "";
    (numBersC.checked)? empty += numBers : "";

password.value = GeneratePass(passlengthC.value, comboPassword)

});


// generate random password
function GeneratePass (l , comboPassword){
    var pwd = "";
    for (var i=0; i< l; i++) {
        pwd += comboPassword.charAt(Math.floor(Math.random() * comboPassword.length));
    
    }
    return pwd;
    
}
// FUNCTIONS TEST============================
//  console.log (GeneratePass(10,lowerCase))
// ============================================




//plug in concat arrays
// var values = 

// let password = "";

//create for loop to choose password characters
// for (var i=0; i<= complexity; i++){
//     password= password + values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
// }
