function helloAlert() {
// Displaying a simple text message
alert("Hello World!"); // Outputs: Hello World!
}

function addVars() {    
// Displaying a variable value 
var x = 10;
var y = 20;
var sum = x + y;
alert(sum); // Outputs: 30
}

function leapYear() {
    var year = document.getElementById;
 
    // Leap years are divisible by 400 or by 4 but not 100
    if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
        document.write(year + " is a leap year.");
    } else{
        document.write(year + " is not a leap year.");
    }
}