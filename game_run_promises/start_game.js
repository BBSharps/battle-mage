const inquirer = require("inquirer");
const { Mage } = require("../game_classes/mage");

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
      // setTimeout(() => {
      console.log(`Hello ${answers.name}`);
      // }, 1000);
      // setTimeout(() => {
      console.log(`${answers.name} you actualy think you can win?`);
      // }, 2000);
      // setTimeout(() => {
      console.log("Ha!");
      // }, 3000);
      // setTimeout(() => {
      console.log("then let's begin");
      // }, 4000);
      return answers;
    })
    .then((answers) => {
      // setTimeout(() => {
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
      // }, 5000);
    });
};
