#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessimg Game");
const answers = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "guess a number between 1 to 6",
    }
])
if (randomNumber == answers.guessedNumber)
    {
        console.log("congratulations! you guessed right.");
    }
    else{
        console.log("you guessed wrong number. Actual number was = ");
        console.log(randomNumber);
    }