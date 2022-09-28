const { default: test } = require("node:test");
const { describe } = require("yargs");
const Calculator = require("./calculator");

describe('calculator', () => {
  describe('add', () => {
    test('can add 2 numbers', () => {
      const result = new Calculator().add(1, 2)
      expect(result).toEqual(3);
    });

    test('can add negative numbers', () => {
      const result = new Calculator().add(1, -2)
      expect(result).toEqual(-1);
    })
  });
  
  describe('subtract', () => {
    test('...', () => {

    });
  })
});