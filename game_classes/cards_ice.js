class Ice_Card {
  #type;
  constructor() {
    this.#type = "ice";
  }

  calculateAttack(against) {
    if (against === "fire") return 1;
    return 2;
  }
  get type() {
    return this.#type;
  }
}

module.exports = { Ice_Card: Ice_Card };
