
function enterName() {
    var name = prompt("What's your name?");
    document.getElementById("name-box").innerHTML = "Hi, " + name;
 
    if(name.length > 0 && name != "null") {
        document.getElementById("name-box").innerHTML = "Hi, " + name;
    } else {
        document.getElementById("name-box").innerHTML = "Anonymous!";
    }
}