import inquirer from "inquirer"

const randomNumber = 20;
const answers = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "guess a number",
    }
])
if (randomNumber == answers.guessedNumber)
    {
        console.log("congratulations! you guessed right.");
    }
    else{
        console.log("you guessed wrong number");
    }