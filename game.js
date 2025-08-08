 const number = Math.floor(Math.random() * 100) + 1;
 let attempts = 0;
 let maxattempt = 5;
function checkGuess() {
  let guessnumber = document.getElementById("guess");
  let result = document.getElementById("result");
    if (!guessnumber.value || guessnumber.value < 1 || guessnumber.value > 100 || isNaN(guessnumber.value)) {
       result.innerText = "Invalid input. Please enter a valid number.";
       return;
    }

  attempts++;
  
  if (guessnumber.value == number) {
    result.innerText = "Congratulations! You guessed the right number.";
  } else if (attempts > maxattempt) {
    result.innerText ="Sorry, you've used all your attempts. The number was " + number + ".";
  } 

  else if ( guessnumber.value < number && number - guessnumber.value <= 10) {
    result.innerText = "🤏 You're less than 10 BELOW the number. Just a bit more! attempts left: " + (maxattempt - attempts);
  }

  else if (guessnumber.value > number && guessnumber.value - number <= 10) {
    result.innerText = "🤏  You're less than 10 ABOVE the number. Lower it a little! attempts left: " + (maxattempt - attempts);
  }
  
   else if (guessnumber.value > number && guessnumber.value - number <= 25 ) {
    result.innerText = "🤏 Just 25 above! lower it a bit attempts left: " + (maxattempt - attempts);
   }
   else if (guessnumber.value < number && number - guessnumber.value <= 25) {
    result.innerText = "🤏 Just 25 off! You're getting warmer attempts left: " + (maxattempt - attempts);
   }
  
  
  else if (guessnumber.value < number) {
    result.innerText = "Your guess is too low. Try again! attempts left: " + (maxattempt - attempts);
  } else if (guessnumber.value > number) {
    result.innerText = "Your guess is too far. Try again! attempts left: " + (maxattempt - attempts);
  }
  else{
    result.innerText = "Invalid input. Please enter a valid number.";
  }
 
}