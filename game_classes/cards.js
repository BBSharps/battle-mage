class Mana_Card {
  #type;
  constructor() {
    this.#type = "mana";
  }

  calculateAttack(against) {
    return 1;
  }
  get type() {
    return this.#type;
  }
}

module.exports = { Mana_Card: Mana_Card };
