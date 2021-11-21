const choices = document.querySelectorAll(".choices");
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice) => {
    choice.addEventListener("click", function() {
        const playerInput = this.value;

        const computerChoices(playerInput, computerInput);
        compareInputs(playerInput, computerInput);
        updateScore();
        if(checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

// function to update game selections
function updateSelections(playerInput, computerInput){

}

// function to compare game inputs

function compareInputs(playerInput, computerInput){

}

// function to update scores 

function updateScore() {

}

// function to check for game winner

function checkWinner () {

}