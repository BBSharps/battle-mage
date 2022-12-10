const { Battle } = require("../game_classes/battle");

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
  answers.ai.getHand();
  answers.ai.aiPlay();
  answers.player.getHand();
  console.log(answers.ai.HP, "ai");
  console.log(answers.player.HP, `player`);
  //set a failure state
  return answers;
};
