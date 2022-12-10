const inquirer = require("inquirer");
const { startGame } = require("./start_game");
const { thanks } = require("./thanks");

const beginGame = [
  {
    type: "list",
    name: "rules",
    message: "what would you like to do?",
    choices: ["Play Battle Mage", "View the rules", "Exit"],
  },
];

exports.title = () => {
  console.log("Welcome to battle Mage");
  return inquirer.prompt(beginGame).then((answers) => {
    if (answers.rules === "View the rules") {
      return console.log("rules");
    } else if (answers.rules === "Play Battle Mage") {
      return startGame();
    } else if (answers.rules === "Exit") {
      return thanks();
    }
  });
};
