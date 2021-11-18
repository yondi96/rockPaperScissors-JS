const shots = ["rock", "paper", "scissors"];
let userChoice, compShot;
let inGame = true;
let userScore = 0;
let enemyScore = 0;


// listen to user click
$(".icon").click(function() {
  if(inGame) {
    let userShot = $(this).attr("id");
    userChoice = userShot;

    // show user shot by showing an img
    // use userShot to replace img src
    $(".user-shot-img").attr('src', "img/" + userShot + ".png");


    randomShot();

  // decide on who won
    if(userChoice == compShot) {
      $(".current-score").html("It's a Tie!");
    } else if(userChoice == "rock" && compShot == "scissors") {
      userWon();
    } else if(userChoice == "rock" && compShot == "paper") {
      enemyWon();
    } else if(userChoice == "scissors" && compShot == "paper") {
      userWon();
    } else if(userChoice == "scissors" && compShot == "rock") {
      enemyWon();
    } else if(userChoice == "paper" && compShot == "rock") {
      userWon();
    } else if(userChoice == "paper" && compShot == "scissors") {
      enemyWon();
    }

  // update the score
    $(".user-score").html(userScore);
    $(".comp-score").html(enemyScore);


    if(userScore === 3 || enemyScore === 3) {
      console.log("END GAME");
      inGame = false;
      // show button to restart the game (no html & css yet)
    }
  }
})

// generate random shot
function randomShot() {
  let randomNum = Math.floor(Math.random()*3);
  compShot = shots[randomNum];

  $(".enemy-shot-img").attr('src', "img/" + compShot + ".png");
  $(".user-move").prepend("test");
}

function userWon() {
  userScore++;
  $(".current-score").html("You Won!");
}

function enemyWon() {
  enemyScore++;
  $(".current-score").html("You Lose");
}
