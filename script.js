let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Aww, The Game was a Draw";
};
const showWinner = (userWin) => {
  if (userWin == true) {
    msg.innerText = "Yay, You Won";
    msg.style.backgroundColor = "Green";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    console.log("Computer Wins");
    msg.innerText = "Aww, You Lose";
    msg.style.backgroundColor = "Red";
    compScore++;
    compScorePara.innerText = compScore;
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
