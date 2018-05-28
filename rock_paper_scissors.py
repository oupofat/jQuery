import random
player = input(["rock, paper or scissors"])
com = ("rock","paper","scissors")
computer = random.choice(com)
total_player = 0
total_computer = 0
while True:
    if player == "rock":
        if computer == "paper":
            total_computer += 1
        else:
            total_player += 1
    elif player == "paper":
        if computer == "scissors":
            total_computer += 1
        else:
            total_player += 1
    elif player == "scissors":
        if computer == "rock":
            total_computer +=1
        else:
            total_player +=1
    else:
        pass
    break