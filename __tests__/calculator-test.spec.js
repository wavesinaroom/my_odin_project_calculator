const calculator = require("../calculator.js");

describe("Sum", () =>{
  test("Sums two integers", () =>{expect(calculator.sumNumbers(2,3)).toBe(5);});
  test.skip("Multiplies two integers", () =>{expect(multiplyNumbers(2,3).toBe(6))});
  test.skip("Divides two integers", () => {expect(dividesNumbers(6,3).toBe(2))});
});

describe("Substract", () =>{
  test("Takes away one int from the other", () =>{expect(calculator.takeAwayNumbers(5,3)).toBe(2);});
});
