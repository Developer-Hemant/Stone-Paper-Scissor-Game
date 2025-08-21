let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let para = document.getElementById("para");
let lilPara = document.getElementById("lilPara");

function GenerateRandom(){
    let Choices = ["Stone", "Paper", "Scissor"];

    let output = Choices[Math.floor(Math.random()*3)];

    return output;
}

// Stone button
stone.addEventListener("click", function () {
    let CompuChoice = GenerateRandom();
    let result = "";

    if (CompuChoice === "stone") {
        result = "Draw";
    } else if (CompuChoice === "paper") {
        result = "You Lose";
    } else {
        result = "You Win";
    }

    para.textContent = result;
    lilPara.textContent = `Your input was Stone, Opponent input was ${CompuChoice}. Result: ${result}`;
});

// Paper button
paper.addEventListener("click", function () {
    let CompuChoice = GenerateRandom();
    let result = "";

    if (CompuChoice === "paper") {
        result = "Draw";
    } else if (CompuChoice === "scissor") {
        result = "You Lose";
    } else {
        result = "You Win";
    }

    para.textContent = result;
    lilPara.textContent = `Your input was Paper, Opponent input was ${CompuChoice}. Result: ${result}`;
});

// Scissor button
scissor.addEventListener("click", function () {
    let CompuChoice = GenerateRandom();
    let result = "";

    if (CompuChoice === "scissor") {
        result = "Draw";
    } else if (CompuChoice === "stone") {
        result = "You Lose";
    } else {
        result = "You Win";
    }

    para.textContent = result;
    lilPara.textContent = `Your input was Scissor, Opponent input was ${CompuChoice}. Result: ${result}`;
});


