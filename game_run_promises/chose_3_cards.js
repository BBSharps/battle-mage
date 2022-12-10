const { choseCards } = require("./chose_card");

exports.choseThreeCards = (answers) => {
  return choseCards(answers)
    .then((answers) => {
      return choseCards(answers);
    })
    .then((answers) => {
      return choseCards(answers);
    })
    .then((answers) => {
      return answers;
    });
};
