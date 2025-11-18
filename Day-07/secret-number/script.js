/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

function userInputFunc(){
    const userChoicePrompt = prompt("Enter a number between 1 to 10");
    const userChoice = Number(userChoicePrompt);

    if(isNaN(userChoice)){
        console.log("Invalid input! Enter a number between 1 to 10");
        userInputFunc();
    }
    if(userChoice > 10 || userChoice < 1){
        console.log("Invalid input! Enter a number between 1 to 10");
        userInputFunc();
    }

    return userChoice;
}

function startSecretNumberGame(){
    console.log("Getting started with Guess The Secret Number Project")
    const computerChoice = 1 + Math.floor(Math.random() * 10);
    let attempts = 1;

    while(true){
        const userChoice = userInputFunc();

        if(userChoice === computerChoice){
            console.log(`🎉 Congrats! You guessed the number in ${attempts} attempts.`);
            break;
        }
        else if(userChoice < computerChoice){
            console.log("Too Low! Try again.");
        }
        else{
            console.log("Too High! Try again."); 
        }
        attempts++;
    }

    const userChoicePrompt = prompt("Do you want to play again? (yes/no)");
    const userGiven = userChoicePrompt.toLowerCase();

    if(userGiven && userGiven === "yes"){
        startSecretNumberGame();
    }
    else{
        console.log("Thanks for playing! See you next time.");
    }

}

//start from here
startSecretNumberGame();