function GeneratePass() {
    var len = prompt("How many characters in your password?");
    var uppercase = prompt("Do you want uppercase in your password? (y/n)");
    var lowercase = prompt("Do you want lowercase in your password? (y/n)");
    var characters = prompt("Would you like to add special characters? (y/n)");
    var numbers = prompt("Do you want a numeric value in your password? (y/n)");

    var valid = false;
    if (uppercase == "y") { valid = true; }
    else if (lowercase == "y") { valid = true; }
    else if (characters == "y") { valid = true; }
    else if (numbers == "y") { valid = true; }
    else {alert("at least one of the selected criteria must be used");}

    if (valid){
    alert(RandomPass(len, uppercase, lowercase, characters, numbers));
    }
}

function RandomPass(len, uppercase, lowercase, characters, numbers) {
    var str = "";
    var pass = "";
    if (uppercase == "y") {
        str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase == "y") {
        str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (characters == "y") {
        str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    if (numbers == "y") {
        str += "0123456789";
    }
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    return pass;
}