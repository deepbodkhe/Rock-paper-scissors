
let userScore = 0;
let compScore = 0;

const startGameBtn = document.querySelector("#start-game");
const userNameInput = document.querySelector("#username");
const greeting = document.querySelector("#greeting");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const inputE1 = document.getElementById("dark-mode");  // Changed to target by ID
const bodyE1 = document.querySelector("body");

inputE1.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputE1.checked) {
        bodyE1.classList.add("dark-mode");
    } else {
        bodyE1.classList.remove("dark-mode");
    }
}

inputE1.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputE1.checked));
}




startGameBtn.addEventListener("click", () => {
    const userName = userNameInput.value.trim();
    if (userName) {
        greeting.innerText = `Welcome, ${userName}! Let's play the Game`;
        greeting.style.display = "block";
        document.querySelector(".user-input").style.display = "none";
    } else {
        alert("Please enter your name to start the game.");
    }
});


const genCoumputerChoice =() => {
    const options = ["rock", "paper" , "scissors"];
    const randIx = Math.floor(Math.random()*3);
    return options[randIx];
};

const drawGame =() =>{
    // console.log("Game was Draw.");
    msg.innerText = "Game was Draw, Play again !";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        // console.log("you win!");
        msg.innerText = `You win!, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
         compScore++;
         compScorePara.innerText = compScore;
        // console.log("you loss!");
        msg.innerText = `You loss! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "red";


    }
};

const playGame = (userChoice) => {
    // console.log("user choice =" , userChoice);
    //Generate Coumputer choice -> modular use
    const compChoice = genCoumputerChoice();
    // console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper"? false : true;
        }else if (userChoice === "paper"){
            //rock, scissors
            userWin = compChoice == "scissors" ? false :true;
        } else {
            // rock , paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
            
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked !" , userChoice);
        playGame(userChoice);
    });
});
