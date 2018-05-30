//Working on trying to get the computer to right. not sure what to do. 

$("#play-rock").on("click", function () {
    $("#computer-move").text(playComputerMove(com));

    function playComputerMove(com) {
        let com = ["rock", "paper", "scissors"];
        let computer = com[Math.floor(Math.random() * com.length)];
    }
});

//this is going to show when the button rock is pushed it shows up in the player pick.

$("#play-rock").on("click", function () {
    $("#player-move").text("rock");
});
//this plays the rock button.

$("#play-rock").on("click", function () {
    $("#player-move").text("rock");

    function runGame(rock) {
        if (player === "rock" && computer === "paper") {
            $("#game-result").text("you lose");
            if (computer === "rock") {
                $("#game-result").text("It's a tie!");
            } else {
                $("#game-result").text("You Win!");
            }
        }
    }
});
//this plays the paper button

$("#play-paper").on("#click", function () {
    function runGame(paper) {
        if (player === "paper" && computer === "scissors") {
            $("#game-result").text("You lose!");
            else if (computer === "paper") {
                $("#game-result").text("It's a tie!");
            } else {
                $("#game-result").text("You win!");
            }
        }
    }
});
//this plays the scissors button

function runGame(scissors) {
    if (player === "scissors" && computer === "rock") {
        $("#game-result").text("You lose!");
        else if (computer === "scissors") {
            $("#game-result").text("It's a tie!");
        } else {
            $("#game-result").text("You win!");
        }
    }
}
