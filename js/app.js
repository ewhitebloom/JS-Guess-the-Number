var random = Math.floor((Math.random()*100)+1);

var name = prompt("What's your name?");

var guess = prompt("Hi " + name + ", guess a number.");

if(guess == random){
  alert("You won 10 billion dollars!!!!")
}
else {
  alert('Sorry you are a loser .');
}


