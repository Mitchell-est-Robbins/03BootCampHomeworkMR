


    //set password length and complexity
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
const passlengthC = document.getElementById("length"); 
const lowerCaseC = document.getElementById("lowerCase");
const upperCaseC = document.getElementById("upperCase");
const specialCharactersC = document.getElementById("specialCharacters");
const numBersC = document.getElementById("numBers");
var password = document.getElementById("password");
const generateBtn = document.getElementById("generate");


generateBtn.addEventListener("click",function(e){
    var comboPassword = empty;
    (lowerCaseC.checked)? empty += lowerCase : "";
    (upperCaseC.checked)? empty += upperCase : "";
    (specialCharactersC.checked)? empty += specialCharacters : "";
    (numBersC.checked)? empty += numBers : "";

password.value = GeneratePass(passlengthC.value, comboPassword)

});


// generate random password
function GeneratePass (l , comboPassword){
    let pwd = "";
    for (let i=0; i< l; i++) {
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


// document.getElementById("display").value =passoword;
// generateBtn.addEventListener("click", () => {
//     let comboPassword = ""
         
//      (upperCaseC.checked) ? comboPassword += upperCase : "";
//      (lowerCaseC.checked) ? comboPassword += lowerCase : "";
//      (specialCharactersC.checked) ? comboPassword += specialCharacters : "";
//      (numBersC.checked) ? comboPassword += numBers : "";
 
//      password = generatePassword(length.value , comboPassword)
     
//      console.log(comboPassword)
 
//  });

