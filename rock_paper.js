//when the player button rock is pushed it returns the playComputerMove function. then prints it.
$("#play-rock").on("click", function () {
    $("#computer-move").text(playComputerMove());
});
//when the player button paper is pushed it returns the playComputerMove function. then prints it.
$("#play-paper").on("click", function () {
    $("#computer-move").text(playComputerMove());
});
//when the player button scissors is pushed it returns the playComputerMove function. then prints it.
$("#play-scissors").on("click", function () {
    $("#computer-move").text(playComputerMove());
});

//this plays the rock button.

$("#play-rock").on("click", function () {
    $("#player-move").text("rock");
    let player = ("rock");
});

//this plays the paper button

$("#play-paper").on("#click", function () {
    $("#player-move").text("paper");
    let player = ("paper");
});

//this plays the scissors button
$("#play-scissors").on("#click", function () {
    $("#player-move").text("scissors");
    let player = ("scissors")
});
// computer function move this 
function playComputerMove() {
    let com = ["rock", "paper", "scissors"]
    let computer = com[Math.floor(Math.random() * com.length)]
    console.log(computer);
    return (computer);
};

//this function preforms the rock part of the game
function runGame(rock) {
    if (player === "rock" && computer === "paper") {
        $("#game-result").text("you lose");
        if (computer === "rock") {
            $("#game-result").text("It's a tie!");
        } else {
            $("#game-result").text("You Win!");
        }
    }
};

//this function preforms the paper part of the game
function runGame(paper) {
    if (player === "paper" && computer === "scissors") {
        $("#game-result").text("You lose!");
    } else if (computer === "paper") {
        $("#game-result").text("It's a tie!");
    } else {
        $("#game-result").text("You win!");
    }
};

//this function preforms the scissors part of the game

function runGame(scissors) {
    if (player === "scissors" && computer === "rock") {
        $("#game-result").text("You lose!");
    } else if (computer === "scissors") {
        $("#game-result").text("It's a tie!");
    } else {
        $("#game-result").text("You win!");
    }
};
