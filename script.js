let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userS=document.querySelector("#userScore");
const comps=document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was cliked",userChoice);
    playGame(userChoice);
   
    
  });
});

// function for drawgame
const drawGame = () => {
  console.log("This is a draw game");
  msg.innerText="Game was draw ,Restart";
  msg.style.backgroundColor="#0e49b0";
};
// method to generate computer choice
const genCompChoice = () => {
  const options = ["rock ", "paper", "scissor"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};
//method to show the winner
const showWinner = (userwin,userChoice,compChoice) => {
  if (userwin) {
    console.log("you win");
    msg.innerText=`congrats you win your ${userChoice} beats ${compChoice}` ;
    msg.style.backgroundColor ="green";
    userScore++;
  userS.innerText=userScore;
  } 
  else{
     console.log("you loose");
     msg.innerText=`sorry you loose ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor="red";
     compScore++;
     comps.innerText=compScore;
}
};
//method for game
const playGame = (userChoice) => {
  console.log("user choose =", userChoice);
  // generate computer choice--> modular way of programming
  const compChoice = genCompChoice();
  console.log("comp choice is:", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock scissor
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock paper
      userWin = compChoice === "rock" ? flase : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
