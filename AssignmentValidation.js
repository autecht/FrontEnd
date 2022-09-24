function validateAll(){
    var spanMessage = document.getElementById("summary");
    if(!(validateUsername() && validatePassword() && validateConfirmation())){
        document.getElementById("summary").innerHTML = "Invalid input";
        document.getElementById("summary").style.color = "red";
        return;
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    document.getElementById("summary").innerHTML = "Hello, " + username + ". You have " +
    "signed in with a password of " + password.length + " characters.";
    document.getElementById("summary").style.color = "green";

}

function validateUsername(){
    var userInput = document.getElementById("username").value;
    var format = /^[a-zA-Z1-9]{2,20}$/
    if(format.test(userInput)){
        return true;
    }
    document.getElementById("field1").innerHTML = "Must be 2-20 letters and/or digits";
    document.getElementById("field1").style.color = "red";
    return false;
}

function validatePassword(){
    var userInput = document.getElementById("password").value;
    var format = /^.{8,}$/;
    if(format.test(userInput)){
        return true;
    }
    document.getElementById("field2").innerHTML = "Must be 8 or more characters";
    document.getElementById("field2").style.color = "red";
    return false;
}

function validateConfirmation(){
    var password = document.getElementById("password").value;
    var passwordConfirmation = document.getElementById("confirmation").value;
    if(password == passwordConfirmation){
        return true;
    }
    document.getElementById("field3").innerHTML = "Must match password."
    document.getElementById("field3").style.color = "red";
    return false;
}

function testLink(){
    document.getElementById("summary").innerHTML = "connected";
}