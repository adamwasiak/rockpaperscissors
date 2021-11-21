// create const and variables

const choices = document.querySelectorAll(".choices");
let playerScore = 0;
let computerScore = 0;

// Add eventlistener for selection of choices

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const playerInput = this.value;

        const computerChoices = ["rock", "paper", "scissors"];
        const computerInput = computerChoices[Math.floor(Math.random() * 3)];

        updateSelections(playerInput, computerInput);
        compareInputs(playerInput, computerInput);
        updateScore();
        if(checkWinner()){
            playerScore = computerScore= 0;
            updateScore();
        }
      });
    });

// function to update game selections on the screen for the user 
function updateSelections(playerInput, computerInput){
    document.getElementById("player-selection").src = `./assets/images/${playerInput}.png`;
    document.getElementById("computer-selection").src =`./assets/images/${computerInput}.png`; 
}

// function to compare game inputs and publish message declaring winner after each round

function compareInputs(playerInput, computerInput) {
    const currentMatch = `${playerInput} vs ${computerInput}`;
    if (playerInput === computerInput) {
        document.getElementById("result").textContent = `${currentMatch} is a Tie`;
        return;
    }
// logic for when player selects rock

    if (playerInput === "rock") {
        if (computerInput === "scissors") {
            document.getElementById("result").textContent = `${currentMatch} You win!`;
            playerScore++;
        }   else {
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            computerScore++;
        } 
      }
// logic for when player selects paper

    else if (playerInput === "paper") {
        if (computerInput === "rock") {
            document.getElementById("result").textContent = `${currentMatch} You win!`;
            playerScore++;
        }   else { 
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            computerScore++;
        }
    }

//logic for when player selects scissors

    else {
        if (computerInput === "paper") {
            document.getElementById("result").textContent = `${currentMatch} You win`;
            playerScore++;
        }   else {
            document.getElementById("result").textContent = `${currentMatch} Computer wins`;
            computerScore++;
            
        }
    }
}

// function to update scores 

function updateScore() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

}

// function to check for game winner and post message to user to declare winner

function checkWinner() {
    if (playerScore === 5 || computerScore ===5) {
        const winner = 
        playerScore === 5
        ? "You win the game! Nice one and congrats!"
        : "Computer won this time. Don't give up. Try again!";
        document.getElementById("result").textContent= winner;
        return true;
    }
    return false;
}