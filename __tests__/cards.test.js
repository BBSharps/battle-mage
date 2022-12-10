const { Mana_Card } = require("../cards");
const { Fire_Card } = require("../cards_fire");
const { Ice_Card } = require("../cards_ice");
const { Earth_Card } = require("../cards_earth");

describe("Mana_Card class test", () => {
  test("Mana_Card is a Object", () => {
    expect(new Mana_Card()).toBeInstanceOf(Object);
  });
  test("should show as Mana_Card {} with all properties hidden", () => {
    const mana = new Mana_Card();
    expect(mana).toEqual({});
  });
});

describe("Element Cards class test", () => {
  test("Card is a Object", () => {
    expect(new Fire_Card()).toBeInstanceOf(Object);
  });
  test("should show as {} with all properties hidden", () => {
    const fire = new Fire_Card();
    const ice = new Ice_Card();
    const earth = new Earth_Card();
    expect(fire).toEqual({});
    expect(ice).toEqual({});
    expect(earth).toEqual({});
  });
});

describe("Mana_Card class methods", () => {
  test(".type returns type", () => {
    const mana = new Mana_Card();
    expect(mana.type).toBe("mana");
  });
  test(".calculateAttack() shoud be able to get the attack value and return it", () => {
    const mana = new Mana_Card();
    const result = mana.calculateAttack();
    expect(result).toBe(1);
  });
});

describe("Fire_Card class methods", () => {
  test(".calculateAttack() shoud return 2", () => {
    const fire = new Fire_Card();
    const ice = new Ice_Card();
    const earth = new Earth_Card();
    expect(fire.calculateAttack()).toBe(2);
    expect(ice.calculateAttack()).toBe(2);
    expect(earth.calculateAttack()).toBe(2);
  });
  test(".type returns type", () => {
    const fire = new Fire_Card();
    const ice = new Ice_Card();
    const earth = new Earth_Card();
    expect(fire.type).toBe("fire");
    expect(ice.type).toBe("ice");
    expect(earth.type).toBe("earth");
  });
  test(".calculateAttack() shoud return 1 if against negative type", () => {
    const fire = new Fire_Card();
    const ice = new Ice_Card();
    const earth = new Earth_Card();
    expect(fire.calculateAttack(earth.type)).toBe(1);
    expect(ice.calculateAttack(fire.type)).toBe(1);
    expect(earth.calculateAttack(ice.type)).toBe(1);
  });
});
