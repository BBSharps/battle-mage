const { Mana_Card } = require("../game_classes/cards");
const { Earth_Card } = require("../game_classes/cards_earth");
const { Fire_Card } = require("../game_classes/cards_fire");
const { Ice_Card } = require("../game_classes/cards_ice");
const { Mage } = require("../game_classes/mage");

describe("Mage class test", () => {
  test("Mage is an Object", () => {
    expect(new Mage()).toBeInstanceOf(Object);
  });
});

describe("Mage method test", () => {
  test("Mage.deck should return a deck with 25 cards", () => {
    const player = new Mage();
    expect(player.deck.length).toBe(25);
  });
  test("Mage.getHand() should make Mage.hand an array with 5 cards", () => {
    const player = new Mage();
    player.getHand();
    const result = player.hand;
    expect(result).toEqual([{}, {}, {}, {}, {}]);
  });
  test("Mage.useCard(mana) should be able to remove the first card from the hand and return a hand with 4 cards", () => {
    const player = new Mage();
    const m = new Mana_Card();
    const f = new Fire_Card();
    player.hand = [f, f, m, m, m];
    player.useCard("mana");
    expect(player.hand.length).toBe(4);
    expect(player.cardsToPlay.length).toBe(1);
  });
  test("Mage.useCard() should be able to be used more than once and return the correct hand size", () => {
    const player = new Mage();
    const m = new Mana_Card();
    player.hand = [m, m, m, m, m];
    player.useCard("mana");
    player.useCard("mana");
    player.useCard("mana");
    expect(player.hand.length).toBe(2);
    expect(player.cardsToPlay.length).toBe(3);
  });
  test("Mage.useCard() when given a card that is not in the hand nothig should change", () => {
    const player = new Mage();
    const m = new Mana_Card();
    player.hand = [m, m, m, m, m];
    player.useCard("fire");
    player.useCard("earth");
    player.useCard("ice");
    expect(player.hand.length).toBe(5);
    expect(player.cardsToPlay.length).toBe(0);
  });
  test("Mage.useCard() should work with each card type", () => {
    const player = new Mage();
    const m = new Mana_Card();
    const f = new Fire_Card();
    const e = new Earth_Card();
    const i = new Ice_Card();
    player.hand = [f, i, m, e, m];
    player.useCard("fire");
    player.useCard("earth");
    player.useCard("ice");
    console.log(player.cardsToPlay);
    expect(player.hand.length).toBe(2);
    expect(player.cardsToPlay.length).toBe(3);
  });
  describe("ai methods", () => {
    test("aiPlay() should play 3 cards from the mage to represent the ai's turn", () => {
      const ai = new Mage();
      const m = new Mana_Card();
      ai.hand = [m, m, m, m, m];
      const result = ai.aiPlay();
      expect(result).toEqual([m, m, m]);
    });
    test.only("aiPlay() should work with getHand() and the unused cards should go back in the deck", () => {
      const ai = new Mage();
      ai.getHand();
      ai.aiPlay();
      console.log(ai);
      expect(ai.cardsToPlay.length).toEqual(3);
      expect(ai.deck.length).toEqual(22);
    });
  });
  describe("Methods used in battle", () => {
    test("ai and player after they have played cards should have 3 cards each in their cards to play", () => {
      const ai = new Mage();
      ai.getHand();
      ai.aiPlay();
      const player = new Mage();
      player.getHand();
      player.useCard(player.hand[0].type);
      player.useCard(player.hand[0].type);
      player.useCard(player.hand[0].type);
      expect(ai.cardsToPlay.length).toBe(3);
      expect(player.cardsToPlay.length).toBe(3);
    });
  });
});
