 let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choices");

const compGame = (comChoice) => {
    const options = ["Rock", "Paper", "Scissors"];
    const choiceidx = Math.floor(Math.random * 3);
    return options[choiceidx];
}

const draw = () => {
    console.log("Game was draw");
}

const showWinner = (userWin) => {
    if (userWin){
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
};

const userGame = (userChoice) => {
    console.log("user choice =", userChoice);
    console.log("comp choice=", comChoice);

    if (userChoice === comChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //Scissors, Paper
            userWin = compChoice === "paper" ? false: true;
        } else if (userChoice=== "Paper") {
            //Rock , Scissors
            userWin = compChoice === "Rock" ? true : false;
        } else {
            //rock, paper
            userWin = compChoice === "Scissors" ? true: false;
        }
    }
    showWinner(userWin);
}

choices.forEach((choices) => {
    console.log(choices);
    choices.addEventListener("click", () => {
        const choiceId = choices.getAttribute("id");
        console.log("choice was clicked", choiceId);
    });
}); 

//Repeat

/* let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");

const msg = document.querySelector("#msg")

const userScores = document.querySelector("#user-score")
const compScores = document.querySelector("#com-score")

const compGame= (comChoice) => {
    const options = ["Rock", "Paper", "Scissors"];
    const optionIdx = Math.floor(Math.random(options * 3));
    return options[optionIdx];
};

const draw = () => {
    console.log("The game was draw");
    msg.innerHTML= "The game is draw!"
    msg.style.backgroundColor= "yellow"
}

const showWinner = (win) => {
    if(userWin) {
        userScore++;
        userScores.innerHTML = userScore
        msg.innerHTML="You Win!"
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScores.innerHTML = compScore
        msg.innerHTML = "You lose!";
        msg.style.backgroundColor= "red"
    }

}


const userGame = (userchoice) => {
    console.log("user choice =", userGame);
    console.log("Comp choice =", compGame);

    if (userchoice === comChoice) {
        draw();

    }else {
        let userWin = true;
        if (userchoice=== "Rock"){
            //paper, scissor
            userWin = comChoice === "Paper" ? false:true;
        }else if (userChoice === "Paper") {
            //rock, scissors
            userWin= comChoice === "Scissors"?false:true;
        } else (
            //paper, scissor
            userWin= comChoice==="Rock"? false:true);
    }

}

choices.forEach((choices) => {
    console.log(choices);
    choices.addEventListener("click", () => {
        const choiceId = choices.getAttribute("id");
        console.log("Choice was clicked", choiceId);
    });
}); */