const shots = ["rock", "paper", "scissors"];
let userChoice, compShot;
let inGame = false;
let userScore = 0;
let enemyScore = 0;


// listen to user click
$(".icon").click(function() {
  let userShot = $(this).attr("id");
  userChoice = userShot;
  randomShot();

  if(userChoice == compShot) {
    console.log("tie");
  } else if(userChoice == "rock" && compShot == "scissors") {
    console.log("You Won!");
  } else if(userChoice == "rock" && compShot == "paper") {
    console.log("You Lose");
  } else if(userChoice == "scissors" && compShot == "paper") {
    console.log("You win!");
  } else if(userChoice == "scissors" && compShot == "rock") {
    console.log("You lose.");
  } else if(userChoice == "paper" && compShot == "rock") {
    console.log("You win!");
  } else if(userChoice == "paper" && compShot == "scissors") {
    console.log("You lose.");
  };
})

// generate random shot
function randomShot() {
  let randomNum = Math.floor(Math.random()*3);
  compShot = shots[randomNum];
  console.log(userChoice, compShot);
}
