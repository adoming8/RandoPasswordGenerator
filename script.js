// Password Generator 
var red = alert (" To Generate Password --> 1st: input the desired length of the password!")
var red = alert ("Mark/check the box of the special characters that you will like to include on your password.")
var green = alert ("Finally, click on the Generate button to see your password")

var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = uppercase.toLocaleLowerCase();
var numbers = "0123456789";
var symbols ="!@#$%^&*()_+{}|:?/";

var pass_length = document.getElementById("pass_length");
var lowerchecker = document.getElementById("lowercase");
var upperchecker = document.getElementById("uppercase");
var numchecker = document.getElementById("numbers");
var symchecker = document.getElementById("symbols");
//buttons
var generatebtn = document.getElementById("generate_btn");
var cclipboardbtn = document.getElementById("cclipboard_btn");
// password display
var urpassword = document.getElementById("ur_password");


//Creating and evenlistener for click to produce selected characters, #s, and symbols
generatebtn.addEventListener("click" , function(event) {
    var characters = " "; 
     if (lowerchecker.checked) {
        characters += lowercase;} 
        else { 
        " ";
        }
    if (upperchecker.checked) {
        characters += uppercase;} 
        else { 
        " ";
        }
    if (numchecker.checked) {
        characters += numbers;} 
        else { 
        " ";
        }     
    if (symchecker.checked) {
        characters += symbols;} 
        else { 
        " ";
    }
    // including the password on the display password field
    urpassword.value = password(pass_length.value, characters);
});


// function to create password l=length
function password(l,characters) {
    var pwd = " ";

    for (var i = 0 ; i < l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
// console.log(password(21, uppercase));
