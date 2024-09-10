#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("welcome to number guessing game");
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
