import random
let player = prompt(["rock, paper or scissors"]);
let com = "rock","paper","scissors";
let computer = com.charAt(math.random(com));
let totalPlayer = 0;
let totalComputer = 0;

while (true) {
    if (player === "rock") {
        if (computer === "paper") {
            totalComputer += 1;
        } else {
            totalPlayer += 1;
        } else if (player === "paper") {
            if (computer === "scissors")
                totalComputer += 1;
        } else {
            totalPlayer += 1;
        } else if (player === "scissors") {
            if (computer === "rock")
                totalComputer += 1;
        } else {
            totalPlayer += 1;
        } else { }
    }   break
