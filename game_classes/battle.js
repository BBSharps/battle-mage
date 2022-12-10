class Battle {
  constructor(ai, player) {
    this.ai = ai;
    this.player = player;
    this.aiDamage = 0;
    this.playerDamage = 0;
  }
  calculateDamageForAi(aiCrds) {
    let aiAttack = 0;
    for (let j = 0; j < aiCrds.length; j++) {
      aiAttack += aiCrds[j].calculateAttack(this.player.cardsToPlay[j].type);
    }
    this.aiDamage = aiAttack;
  }
  calculateDamageForplayer(playerCrds) {
    let playerAttack = 0;
    for (let i = 0; i < playerCrds.length; i++) {
      playerAttack += playerCrds[i].calculateAttack(
        this.ai.cardsToPlay[i].type
      );
    }
    this.playerDamage = playerAttack;
  }
  doDamage() {
    this.player.deck = [...this.player.deck, ...this.player.cardsToPlay];
    this.player.cardsToPlay = [];
    this.ai.deck = [...this.ai.deck, ...this.ai.cardsToPlay];
    this.ai.cardsToPlay = [];
    this.player.HP = this.player.HP - this.aiDamage;
    this.ai.HP = this.ai.HP - this.playerDamage;
  }
}

module.exports = { Battle: Battle };
