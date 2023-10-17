// Ask the user for a number. 
// If it’s positive, print “POSITIVE”. 
// If it’s negative, print “NEGATIVE”. 
// If it’s zero, print ZERO.
// Prints CORRECT if 1, 2, or 3 is entered. 
// Print ERROR for everything else.

userInput = window.prompt("Enter a number");

if(userInput > 0) {
    console.log("Positive")
} else if (userInput < 0){
    console.log("Negative")
} else {
    console.log("Zero");
}

if (userInput == 1 || userInput == 2 || userInput == 3) {
    console.log("Correct");
} else {
    console.log("Error");
}