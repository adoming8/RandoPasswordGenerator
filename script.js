
var lowerchar = function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
// console.log(char()); //testing to see if fucntion 

var upperchar = function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var randomnum = function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

var randomsym = function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

var pass_length = document.getElementById("pass_length");
var lowerchecker = document.getElementById("lowercase");
var upperchecker = document.getElementById("uppercase");
var numchecker = document.getElementById("numbers");
var symchecker = document.getElementById("symbols");
//buttons
var generatebtn = document.getElementById("generate_btn");
var cclipboardbtn = document.getElementById("cclipboard_btn");
var urpassword = document.getElementById("ur_password");


//create and even for btn click
generatebtn.addEventListener("click" , function(e) {
    var characters = randomnum(); 
    (lowerchecker.checked) ? characters += upperchar : " ";
    (upperchecker.checked) ? characters += numchecker : " ";
    (numchecker.checked) ? characters += symchecker : " ";
    (symchecker.checked) ? characters += upperchar : " ";

    urpassword.value = password(pass_length.value, characters);

});


// function to create password l=length
function password(l,characters) {
    var pwd = " ";

    for (var i = 0 ; i < l; i++){
        pwd += lowerchar();
    }
    return pwd;
}
// console.log(password(21,lowerchar()))
