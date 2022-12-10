const inquirer = require("inquirer");

let saveAnswers = {};

exports.choseCards = (answers) => {
  saveAnswers = answers;
  const hand = saveAnswers.player.hand.map((card) => {
    return `[${card.type}]`;
  });
  console.log(
    `I play [${answers.ai.cardsToPlay[0].type}] [${answers.ai.cardsToPlay[1].type}] [${answers.ai.cardsToPlay[2].type}]`
  );
  console.log(`What will you play against [${answers.ai.cardsToPlay[0].type}]`);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "cardChoice",
        message: "Pick a card from your hand",
        choices: hand,
      },
    ])
    .then((answers) => {
      //run choices 1, pick a card,
      const card = answers.cardChoice.slice(1, -1);
      saveAnswers.player.useCard(card);
      return saveAnswers;
    });
};
