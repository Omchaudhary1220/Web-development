let Userscore = 0;
let Compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserscorePara = document.querySelector("#user-score");
const CompscorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];
}
const drawGame = () => {
    msg.innerText = "game was draw.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin, UserChoice, compchoice) => {
    if (userwin) {
        Userscore++;
        UserscorePara.innerText = Userscore;
        msg.innerText = `You Win! Your ${UserChoice} beates ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        Compscore++;
        CompscorePara.innerText = Compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (UserChoice) => {
    const compchoice = genCompChoice();
    if (UserChoice === compchoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userwin === "rock") {
            userwin = (compchoice === "paper") ? false : true;
        } else if (UserChoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            compchoice === "rock" ? false : true;
        }
        showWinner(userwin, UserChoice, compchoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const UserChoice = choice.getAttribute("id");
        playgame(UserChoice);
    })
})