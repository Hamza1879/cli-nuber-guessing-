import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userguessnumber === randomNumber) {
    console.log("congragulations! you guess right number.");
}
else {
    console.log("you guessed wrong number.");
}
