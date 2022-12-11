const inquirer = require("inquirer");
const { startGame } = require("./start_game");
const { thanks } = require("./thanks");
const { rules } = require("./rules");
const clear = require("clear");

const beginGame = [
  {
    type: "list",
    name: "rules",
    message: "what would you like to do?",
    choices: ["Play Battle Mage", "View the rules", "Exit"],
  },
];

exports.title = () => {
  clear();
  console.log("Welcome to battle Mage");
  return inquirer.prompt(beginGame).then((answers) => {
    if (answers.rules === "View the rules") {
      return rules();
    } else if (answers.rules === "Play Battle Mage") {
      return startGame();
    } else if (answers.rules === "Exit") {
      return thanks();
    }
  });
};
