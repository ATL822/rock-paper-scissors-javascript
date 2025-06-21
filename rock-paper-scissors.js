let userChoice = 'null';
let playerWinCount = 0;
let computerWinCount =0;

let generateComputerChoice = () => { return Math.floor(Math.random() * (3 - 0) + 1) };

let convertChoiceToStr = (choice) => {
    switch(choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'null!';
    }
};

function checkWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return 'draw';
    }
    else if ((userChoice == 'rock' & computerChoice == 'scissors') | (userChoice == 'paper' & computerChoice == 'rock') | (userChoice == 'scissors' & computerChoice == 'paper')) {
        return 'player';
    } else if ((computerChoice == 'rock' & userChoice == 'scissors') | (computerChoice == 'paper' & userChoice == 'rock') | (computerChoice == 'scissors' & userChoice == 'paper')) {
        return 'computer';
    } else {
        return 'null';
    }
};
 
function playRound() {
    let computerChoice = convertChoiceToStr(generateComputerChoice());
    console.log(`computerChoice: ${computerChoice}`);
    console.log(`userChoice: ${userChoice}`);

    switch (checkWinner(userChoice, computerChoice)) {
        case 'draw':
            console.log('Draw.');
            displayLastRoundResult('Draw.');
            break;
        case 'player':
            console.log('You win! Yay!');
            playerWinCount++;
            updateWinCount('player', playerWinCount);
            displayLastRoundResult('Player');
            break;
        case 'computer':
            console.log('Computer win. Rats!');
            computerWinCount++;
            updateWinCount('computer', computerWinCount);
            displayLastRoundResult('Computer');
            break;
        default:
            console.log('Some error has occurred!!\nBe sure to select rock paper or scissors!');
            break;
    }
    return;
};

let selectionBar = document.querySelector('.selection-bar');
selectionBar.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            userChoice = 'rock';
            break;
        case 'paper':
            userChoice = 'paper';
            break;
        case 'scissors':
            userChoice = 'scissors';
            break;
        default:
            userChoice = 'null';
            break;
    }
    return;
});

let playButton = document.querySelector('.play-button');
playButton.addEventListener('click', playRound);

let resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetCounters);

function updateWinCount(player, count) {
    if (player == 'computer') {
        let counter = document.querySelector('.computer-win-counter');
        counter.textContent = count;
    }
    else if (player == 'player') {
        let counter = document.querySelector('.player-win-counter');
        counter.textContent = count;
    }
    else {
        console.log('Some error occured displaying the win counter.');
    }
    return;
};

function resetCounters() {
    let counter = document.querySelector('.computer-win-counter');
    counter.textContent = '0';
    computerWinCount = 0;

    counter = document.querySelector('.player-win-counter');
    counter.textContent = '0';
    playerWinCount = 0;

    return;
};

function displayLastRoundResult(result) {
    let resultBox = document.querySelector('.result-box');
    if (result === 'Draw.') {
        resultBox.textContent = `Last round result: ${result}`;
    }
    else {
        resultBox.textContent = `Last round result: ${result} was the winner!`;
    }
    
    return;
};