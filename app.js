let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

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
        msg.innerText = `You win!, Your  ${userChoice} beats ${compChoice}`;
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




