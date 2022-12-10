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
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .then((answers) => {
      return choseThreeCards(answers);
    })
    .then((answers) => {
      if (answers.ai.HP <= 0) {
        console.log("you win!");
        return thanks();
      } else if (answers.player.HP <= 0) {
        console.log("you lose!");
        return thanks();
      } else if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
        console.log("its a draw");
        return thanks();
      } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
        console.log(`Round ${answers.round}`);
        return round(answers);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
