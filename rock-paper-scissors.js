let userChoice = 0

let generateComputerChoice = () => { return Math.floor(Math.random() * (3 - 0) + 1) }

let updateUserChoice = (choice) => { userChoice = choice }

let convertChoiceToStr = (choice) => {
    switch(choice) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
        default:
            return 'null!'
    }
}
 
function playRound() {
    // Generate computer choice
    let computerChoice = generateComputerChoice()
    console.log(`computerChoice: ${convertChoiceToStr(computerChoice)}`)
    console.log(`userChoice: ${convertChoiceToStr(userChoice)}`)

    // Compare choices and display winner
    if (userChoice == computerChoice) {
        console.log('Its a draw.')
    }
    else if ((userChoice == 1 & computerChoice == 3) | (userChoice == 2 & computerChoice == 1) | (userChoice == 3 & computerChoice == 2)) {
        console.log('You win! Yay!')
    } else if ((computerChoice == 1 & userChoice == 3) | (computerChoice == 2 & userChoice == 1) | (computerChoice == 3 & userChoice == 2)) {
        console.log('Computer win. Rats!')
    } else {
        console.log('Some error has occurred!!\nBe sure to select rock paper or scissors!')
    }
}