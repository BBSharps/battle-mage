const { Battle } = require("../game_classes/battle");
const { thanks } = require("./thanks");

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
    console.log("its a draw");
    return thanks();
  } else if (answers.player.HP <= 0) {
    console.log("you lose!");
    return thanks();
  } else if (answers.ai.HP <= 0) {
    console.log("you win!");
    return thanks();
  } else if (answers.player.HP > 0 && answers.ai.HP > 0) {
    console.log(`Round ${answers.round}`);
    answers.ai.getHand();
    answers.ai.aiPlay();
    answers.player.getHand();
    console.log(answers.ai.HP, "ai");
    console.log(answers.player.HP, `player`);
    //set a failure state
    return answers;
  }
};
