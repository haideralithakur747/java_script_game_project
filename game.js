 const number = Math.floor(Math.random() * 100) + 1;
 let attempts = 0;
 let maxattempt = 5;
function checkGuess() {
  let guessnumber = document.getElementById("guess");
  let result = document.getElementById("result");
    if (!guessnumber.value || guessnumber.value < 1 || guessnumber.value > 100 || isNaN(guessnumber.value)) {
      alert("Invalid input. Please enter a number between 1 and 100.");
      return;
    }

  attempts++;
  
  if (guessnumber.value == number) {
    alert("Congratulations! You guessed the right number.");
  } else if (attempts > maxattempt) {
    alert(
      "Sorry, you've used all your attempts. The number was " + number + "."
    );
  } else if (!guessnumber.value||guessnumber.value < 1 || guessnumber.value > 100) {
    alert("Please enter a number between 1 and 100.");
  } 
  else if (guessnumber.value >= number - 10 && guessnumber.value <= number + 10) {
    alert("You're very close! Try again.");
  } 
  
   else if (guessnumber.value >= number - 25 && guessnumber.value <= number + 25) {
    alert("You're  close! Try again.");
   }
  
  
  else if (guessnumber.value < number) {
    alert("Your guess is too low. Try again!");
  } else if (guessnumber.value > number) {
    alert("Your guess is too far. Try again!");
  }
  else{
    alert("Invalid input. Please enter a valid number.");
  }
 
}