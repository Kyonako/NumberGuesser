let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let humanWinner;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

function compareGuesses (humanGuess, computerGuess, targetNumber) {
    targetNumber = generateTarget();
    let humanAbsolute = Math.abs(targetNumber - humanGuess);
    let computerAbsolute = Math.abs(targetNumber - computerGuess);
    
    if (humanGuess === targetNumber) {
        return humanWinner = true;
    }
    else if (humanAbsolute < computerAbsolute) {
        return humanWinner = true;
    }
    else if (humanAbsolute > computerAbsolute) {
        return humanWinner = false;
    }
}

// compareGuesses(5, 1);
// console.log(humanWinner);

function updateScore (winner) {
    if (winner === "human") {
        humanScore += 1;
    }
    else if (winner === "computer") {
        computerScore += 1;
    }
}

// updatedScore ("computer");
// console.log(humanScore);
// console.log(computerScore);

function advanceRound () {
    return currentRoundNumber += 1;
}



// advanceRound ();
// console.log(currentRoundNumber);

