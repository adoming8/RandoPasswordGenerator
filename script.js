
// function that generates random password
function generate() {
    //set password length/complexity
    
    var length = document.getElementById("slider").value;
        // console.log(typeof complexity)

    // all possible values for password's characters
    var password_values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    
    // variable that gets set when the user hits the generate button - what I'm printing out 
    var password = " ";

    // create for loop for password character generation
    for (var i = 0; i <= length; i++) {
        password = password + password_values.charAt(Math.floor(Math.random() * Math.floor(password_values.length - 1)));
    } 

    //add password to textbox/display area
    document.getElementById("display").value = password;

    // add previous passwords to hist. secetion
    document.getElementById("lastpasswords").innerHTML += password + "<br />";
}

// set defaul length of
    document.getElementById("length").innerHTML = "Length: 70";

// function to pouplate the lethn of password by on slider position   
    document.getElementById("slider").oninput = function (){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
        }
    else{
        document.getElementById("length").innerHTML = "Length: 8";
        }
    }