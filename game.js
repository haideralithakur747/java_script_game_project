
const number = Math.floor(Math.random()*100)+1;
let guessnumber = document.getElementById("guess");

console.log(guessnumber.value);
function checkGuess() {
    let attempts = 0;
    attempts++;
    let maxattempt = 5;
if (guessnumber.value == number) {
    alert("Congratulations! You guessed the right number.");
}
else if (attempts >= maxattempt) {
    alert("Sorry, you've used all your attempts. The number was " + number + ".");
}
else if(guessnumber.value < 1 || guessnumber.value > 100){
alert("Please enter a number between 1 and 100.");
}
else if (guessnumber.value < number) {
    alert("Your guess is too low. Try again!");
} else if (guessnumber.value > number) {
    alert("Your guess is too high. Try again!");
}
else if (guessnumber.value < 1 || guessnumber.value > 100) {
    alert("Please enter a number between 1 and 100.");
}
else if (guessnumber.value == "") {
    alert("Please enter a number.");
}


}

