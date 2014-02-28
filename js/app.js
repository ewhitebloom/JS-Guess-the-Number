var random = Math.floor((Math.random()*10)+1);

var name = prompt("What's your name?");

var guess = prompt("Hi " + name + ", guess a number.");;

while (guess != random){
 var guess = prompt("Guess again:");
 if (guess > random ){
   alert('Too high!.');
 }
 if (guess < random) {
  alert('Too Low!');
}
}

alert('Correct. You won a billion dollars.');
