const { Mana_Card } = require("./cards");
const { Fire_Card } = require("./cards_fire");
const { Ice_Card } = require("./cards_ice");
const { Earth_Card } = require("./cards_earth");

class Mage {
  constructor() {
    this.hand = [];
    this.deck = [];
    this.cardsToPlay = [];
    this.HP = 35;
    for (let i = 0; i < 2; i++) {
      this.deck.push(new Fire_Card());
      this.deck.push(new Ice_Card());
      this.deck.push(new Earth_Card());
    }
    for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
      this.deck.push(new Fire_Card());
    }
    for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
      this.deck.push(new Ice_Card());
    }
    for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
      this.deck.push(new Earth_Card());
    }
    for (let i = this.deck.length; i < 25; i++) {
      this.deck.push(new Mana_Card());
    }
    this.deck.sort(() => Math.random() - 0.5);
  }
  getHand() {
    for (let j = this.hand.length; j < 5; j++) {
      this.hand.push(this.deck.pop());
    }
  }
  aiPlay() {
    this.deck.push(this.hand.pop(), this.hand.pop());
    const card = this.hand.splice(0, 3);
    this.cardsToPlay = card;
    return this.cardsToPlay;
  }

  useCard(str) {
    for (let l = 0; l < this.hand.length; l++) {
      if (this.hand[l].type === str) {
        console.log(`you played ${str} card`);
        let newHand = [...this.hand.slice(0, l)];
        let newHandJoin = [...this.hand.slice(l + 1)];
        const card = this.hand[l];
        this.cardsToPlay.push(card);
        this.hand = [...newHand, ...newHandJoin];
        return this.hand;
      }
    }
  }
}

module.exports = { Mage: Mage };
