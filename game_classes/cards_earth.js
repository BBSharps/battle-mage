class Earth_Card {
  #type;
  constructor() {
    this.#type = "earth";
  }

  calculateAttack(against) {
    if (against === "ice") return 1;
    return 2;
  }
  get type() {
    return this.#type;
  }
}

module.exports = { Earth_Card: Earth_Card };
