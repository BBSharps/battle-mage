const { Battle } = require("../game_classes/battle");
const { thanks } = require("./thanks");
const clear = require("clear");
const { blockForSeconds } = require("./block");

exports.round = (answers) => {
  //round increase
  answers.round = answers.round + 1;
  const battle = new Battle(answers.ai, answers.player);
  battle.calculateDamageForAi(battle.ai.cardsToPlay);
  battle.calculateDamageForplayer(battle.player.cardsToPlay);
  battle.doDamage();
  //clone answers to feed back from battle
  answers.ai.HP = battle.ai.HP;
  answers.player.HP = battle.player.HP;
  if (answers.player.HP <= 0 && answers.ai.HP <= 0) {
    clear();
    console.log("its a draw");
    blockForSeconds(2);
    return thanks();
  } else if (answers.player.HP <= 0) {
    clear();
    console.log("you lose!");
    blockForSeconds(2);
    return thanks();
  } else if (answers.ai.HP <= 0) {
    clear();
    console.log("you win!");
    blockForSeconds(2);
    return thanks();
  } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
    console.log(`Round ${answers.round}`);
    answers.ai.getHand();
    answers.ai.aiPlay();
    answers.player.getHand();
    console.log(answers.ai.HP, "Battle Mage");
    console.log(hpBar(answers.ai.HP));
    console.log(answers.player.HP, `${answers.name}`);
    console.log(hpBar(answers.player.HP));
    blockForSeconds(3);
    clear();
    return answers;
  }
};

function hpBar(num) {
  let bar = "[";
  for (let i = 0; i < num; i++) {
    bar += "=";
  }
  return bar + "]";
}
