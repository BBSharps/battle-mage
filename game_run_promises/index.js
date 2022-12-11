const { title } = require("./title");
const { choseThreeCards } = require("./chose_3_cards");
const { round } = require("./round");
const { thanks } = require("./thanks");
const inquirer = require("inquirer");
let saveAnswers = {};
// hand is not updating. playing save choices over???
exports.playGame = () => {
  title()
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      return round(answers);
    })
    .catch((err) => {
      console.log(err);
    });
};
