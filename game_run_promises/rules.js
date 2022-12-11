const clear = require("clear");
const { blockForSeconds } = require("./block");

exports.rules = () => {
  clear();
  console.log(`"The Earth smothers the Fire,
The Fire melts the Ice,
The Ice cracks the Earth,  
Mana permiates all"`);
  blockForSeconds(1);
  console.log(`
  
  Every round in Battle Mage, You and your opponent each play 3 cards.
The order that cards are played is important.
Each card is played against the opponents card in the order that they are selected.
1v1,2v2,3v3.
Mana cards always deal 1 damage.
Fire cards deal 2 damage or 1 against Earth cards.
Ice cards deal 2 damage or 1 against Fire cards.
Earth cards deal 2 damage or 1 against Ice cards.`);
  blockForSeconds(1);
  console.log(`
  
  You and your opponent each start with 35 Hit Points.
The first to reduce the opponent to 0 HP wins.  `);
  throw "";
};
