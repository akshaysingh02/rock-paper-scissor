//popup logic
const popupbtn = document.getElementById("popup-close");
const popup = document.getElementById("popup-div");
const rulesBtn = document.getElementById("rules-btn");

popupbtn.addEventListener("click", closePopup);

function closePopup() {
  popup.style.display = "none";
}

rulesBtn.addEventListener("click", showPopup);

function showPopup() {
  popup.style.display = "block";
}

//rock paper sicssor logic
const rockBtn = document.getElementById("rock-id");
const paperBtn = document.getElementById("paper-id");
const scissorBtn = document.getElementById("scissor-id");

rockBtn.addEventListener("click", function () {
  resultGenerator("rock");
});
scissorBtn.addEventListener("click", function () {
  resultGenerator("scissor");
});
paperBtn.addEventListener("click", function () {
  resultGenerator("paper");
});

var computerPick = "";

function updateMyScore() {
  let myCurrentScore = localStorage.getItem("myScore") || 0;

  myCurrentScore++;

  document.getElementById("myscore").innerHTML = myCurrentScore;

  localStorage.setItem("myScore", myCurrentScore);
}
function updatePcScore() {
  let pcCurrentScore = localStorage.getItem("pcScore") || 0;

  pcCurrentScore++;

  document.getElementById("pcscore").innerHTML = pcCurrentScore;

  localStorage.setItem("pcScore", pcCurrentScore);
}

window.addEventListener("load",function(){
    let myCurrentScore = localStorage.getItem("myScore") || 0;
    document.getElementById("myscore").innerHTML = myCurrentScore;

    let pcCurrentScore = localStorage.getItem("pcScore") || 0;
    document.getElementById("pcscore").innerHTML = pcCurrentScore;
})

function pcChoice() {
  //choses a random number between 1 and 3
  const max = 3;
  const min = 1;
  async function randomNum() {
    return Math.floor(Math.random() * 3) + 1;
  }
  randomNum()
    .then((result) => {
      if (result === 1) {
        computerPick = "rock";
      } else if (result === 2) {
        computerPick = "scissor";
      } else {
        computerPick = "paper";
      }
      console.log("pc picked " + computerPick);
    })
    .catch((err) => {
      console.log(err);
    });
}
document.addEventListener("DOMContentLoaded", pcChoice);

function resultGenerator(yourChoice) {
  console.log("you've picked " + yourChoice);
  if (yourChoice === computerPick) {
    console.log("draw");
    resultDisplay(yourChoice, computerPick, 0, 0, 1);
  } else if (yourChoice === "rock" && computerPick === "paper") {
    resultDisplay(yourChoice, computerPick, 0, 1, 0);
    console.log("you Lost");
  } else if (yourChoice === "rock" && computerPick === "scissor") {
    resultDisplay(yourChoice, computerPick, 1, 0, 0);
    console.log("you won");
  } else if (yourChoice === "paper" && computerPick === "rock") {
    resultDisplay(yourChoice, computerPick, 1, 0, 0);
    console.log("you won");
  } else if (yourChoice === "paper" && computerPick === "scissor") {
    resultDisplay(yourChoice, computerPick, 0, 1, 0);
    console.log("you Lost");
  } else if (yourChoice === "scissor" && computerPick === "rock") {
    resultDisplay(yourChoice, computerPick, 0, 1, 0);
    console.log("you lost");
  } else if (yourChoice === "scissor" && computerPick === "paper") {
    resultDisplay(yourChoice, computerPick, 1, 0, 0);
    console.log("you won");
  }
}

function resultDisplay(yourPick, pcPick, youWon, youLost, youTied) {
  document.getElementById("result-display").style.display = "flex";
  document.getElementById("choice-display").style.display = "none";

  document.getElementById("your-" + yourPick).style.display = "flex";
  document.getElementById("pc-" + pcPick).style.display = "flex";

  if (youWon) {
    document.getElementById("result-h").innerHTML = "YOU WIN";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("green-circle-your").style.display = "block";
    //update user score by 1
    updateMyScore();
  } else if (youLost) {
    document.getElementById("result-h").innerHTML = "YOU Lost";
    document.getElementById("green-circle-pc").style.display = "block";
    //update pc score by 1
    updatePcScore();
  } else {
    document.getElementById("result-h").innerHTML = "TIE UP";
    document.getElementById("result-s").style.visibility = "hidden";
  }
}

//reset input using play agian button
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", resetInput);

function resetInput() {
  pcChoice();

  document.getElementById("result-display").style.display = "none";
  document.getElementById("choice-display").style.display = "flex";

  document.getElementById("your-rock").style.display = "none";
  document.getElementById("your-paper").style.display = "none";
  document.getElementById("your-scissor").style.display = "none";
  document.getElementById("pc-rock").style.display = "none";
  document.getElementById("pc-paper").style.display = "none";
  document.getElementById("pc-scissor").style.display = "none";

  document.getElementById("next-btn").style.display = "none";

  document.getElementById("green-circle-pc").style.display = "none";
  document.getElementById("green-circle-your").style.display = "none";
}
