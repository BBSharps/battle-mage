const { Mana_Card } = require("../game_classes/cards");
const { Fire_Card } = require("../game_classes/cards_fire");
const { Ice_Card } = require("../game_classes/cards_ice");
const { Earth_Card } = require("../game_classes/cards_earth");
const { Mage } = require("../game_classes/mage");
const { Battle } = require("../game_classes/battle");

describe("battle inputs", () => {
  test("battle should be an Object", () => {
    expect(typeof new Battle()).toBe("object");
  });
  test("battle.ai should be an Object", () => {
    const ai = new Mage();
    const battle = new Battle(ai);
    expect(typeof battle.ai).toBe("object");
  });
  test("battle.player should be an Object", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    expect(typeof battle.player).toBe("object");
  });
});

describe("battle methods", () => {
  test("ai and player should be able to pass 3 cards into the battle", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    const m = new Mana_Card();
    ai.getHand();
    ai.aiPlay();
    player.hand = [m, m, m, m, m];
    player.useCard("mana");
    player.useCard("mana");
    player.useCard("mana");
    expect(battle.ai.cardsToPlay.length).toBe(3);
    expect(battle.player.cardsToPlay.length).toBe(3);
  });
  test("ai and player should be able to deal 3 damage when given a hand of mana cards", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    const m = new Mana_Card();
    ai.hand = [m, m, m, m, m];
    ai.aiPlay();
    player.hand = [m, m, m, m, m];
    player.useCard("mana");
    player.useCard("mana");
    player.useCard("mana");
    battle.calculateDamageForAi(battle.ai.cardsToPlay);
    battle.calculateDamageForplayer(battle.player.cardsToPlay);
    expect(battle.aiDamage).toBe(3);
    expect(battle.playerDamage).toBe(3);
  });
  test("calculateDamageForPlayer() should be able to take a hands where the player has the advantage and calculate damage cottectly", () => {
    const ai = new Mage();
    const player = new Mage();
    const m = new Mana_Card();
    const f = new Fire_Card();
    const i = new Ice_Card();
    ai.hand = [i, m, m, m, m];
    player.hand = [f, m, m, m, m];
    const battle = new Battle(ai, player);
    ai.aiPlay();
    player.useCard("fire");
    player.useCard("mana");
    player.useCard("mana");
    console.log(battle.ai.cardsToPlay, "ai cards");
    battle.calculateDamageForAi(battle.ai.cardsToPlay);
    battle.calculateDamageForplayer(battle.player.cardsToPlay);
    expect(battle.aiDamage).toBe(3);
    expect(battle.playerDamage).toBe(4);
  });
  test("calculateDamageForai() should be able to take a hands where the ai has the advantage and calculate damage cottectly", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    const m = new Mana_Card();
    const e = new Earth_Card();
    const i = new Ice_Card();
    ai.hand = [i, m, m, m, m];
    ai.aiPlay();
    player.hand = [e, m, m, m, m];
    player.useCard("earth");
    player.useCard("mana");
    player.useCard("mana");
    battle.calculateDamageForAi(battle.ai.cardsToPlay);
    battle.calculateDamageForplayer(battle.player.cardsToPlay);
    expect(battle.aiDamage).toBe(4);
    expect(battle.playerDamage).toBe(3);
  });
  test("doDamage() should take the Damage values and apply them to the Mage's HP", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    battle.aiDamage = 3;
    battle.playerDamage = 3;
    battle.doDamage();
    expect(battle.ai.HP).toBe(32);
    expect(battle.player.HP).toBe(32);
  });
  test("doDamage() should be able to calculate diffrent values when ai and player have diffrent damage and damage should be applied to the other", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    battle.aiDamage = 6;
    battle.playerDamage = 4;
    battle.doDamage();
    expect(battle.ai.HP).toBe(31);
    expect(battle.player.HP).toBe(29);
  });
  test("at the end of damage calculation player and ai should have taken the correct damage", () => {
    const ai = new Mage();
    const player = new Mage();
    const battle = new Battle(ai, player);
    const m = new Mana_Card();
    const f = new Fire_Card();
    const e = new Earth_Card();
    const i = new Ice_Card();
    ai.hand = [i, i, f, m, m];
    ai.aiPlay();
    player.hand = [e, f, e, m, m];
    player.useCard("earth");
    player.useCard("fire");
    player.useCard("earth");
    battle.calculateDamageForAi(battle.ai.cardsToPlay);
    battle.calculateDamageForplayer(battle.player.cardsToPlay);
    battle.doDamage();
    expect(battle.aiDamage).toBe(4);
    expect(battle.ai.HP).toBe(30);
    expect(battle.playerDamage).toBe(5);
    expect(battle.player.HP).toBe(31);
  });
  test("at the end of damage calculation player and ai should have their cards returned to their deck and cards to play should be empty", () => {
    const ai = new Mage();
    const player = new Mage();
    const m = new Mana_Card();
    const f = new Fire_Card();
    const e = new Earth_Card();
    const i = new Ice_Card();
    ai.deck = [m, m, m, m, m];
    player.deck = [m, m, m, m, m];
    ai.hand = [i, i, f, m, m];
    player.hand = [e, f, e, m, m];
    ai.aiPlay();
    player.useCard("earth");
    player.useCard("fire");
    player.useCard("earth");
    const battle = new Battle(ai, player);
    battle.calculateDamageForAi(battle.ai.cardsToPlay);
    battle.calculateDamageForplayer(battle.player.cardsToPlay);
    battle.doDamage();
    expect(battle.ai.deck.length).toBe(10);
    expect(battle.ai.cardsToPlay.length).toBe(0);
    expect(battle.player.deck.length).toBe(8);
    expect(battle.player.cardsToPlay.length).toBe(0);
  });
});
