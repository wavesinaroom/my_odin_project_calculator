const sumNumbers = require("../calculator.js")

describe("Operations", () =>{
  test("Sums two integers", () =>{expect(sumNumbers(2,3)).toBe(5);});
  test.skip("Takes away one int from the other", () =>{expect(takeAwayNumbers(5,3)).toBe(2);});
  test.skip("Multiplies two integers", () =>{expect(multiplyNumbers(2,3).toBe(6))});
  test.skip("Divides two integers", () => {expect(dividesNumbers(6,3).toBe(2))});
});
