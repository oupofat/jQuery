let player = "rock";
let com = ["rock", "paper", "scissors"];
let computer = com[Math.floor(Math.random() * com.length)];
let totalPlayer = 0;
let totalComputer = 0;

while (true) {
    if (player === "rock") {
        if (computer === "paper")
            totalComputer += 1;
     else 
        totalPlayer += 1;
    }
    if (player === "paper") {
        if (computer === "scissors")
            totalComputer += 1;
     else 
        totalPlayer += 1;
    }
    if (player === "scissors") {
        if (computer === "rock")
            totalComputer += 1;
     else 
        totalPlayer += 1;
    }

    break;
};
