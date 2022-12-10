class Fire_Card {
  #type;
  constructor() {
    this.#type = "fire";
  }

  calculateAttack(against) {
    if (against === "earth") return 1;
    return 2;
  }
  get type() {
    return this.#type;
  }
}

module.exports = { Fire_Card: Fire_Card };
