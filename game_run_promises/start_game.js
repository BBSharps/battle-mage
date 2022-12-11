const inquirer = require("inquirer");
const clear = require("clear");
const { Mage } = require("../game_classes/mage");
const { blockForSeconds } = require("./block");

const welcome = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Hero",
  },
];

exports.startGame = () => {
  return inquirer
    .prompt(welcome)
    .then((answers) => {
      clear();
      blockForSeconds(1);
      console.log(`Hello ${answers.name}`);
      blockForSeconds(1);
      console.log(`${answers.name} you actually think you can win?`);
      blockForSeconds(1);
      console.log("Ha!");
      blockForSeconds(1);
      console.log("then let's begin");
      blockForSeconds(2);
      clear();
      return answers;
    })
    .then((answers) => {
      //create ai
      answers.ai = new Mage();
      answers.ai.getHand();
      answers.ai.aiPlay();
      //create player
      answers.player = new Mage();
      answers.player.getHand();
      //start round
      answers.round = 1;
      return answers;
    });
};
