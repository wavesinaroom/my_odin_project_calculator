const calculator = require("../calculator.js");

describe("Calculate", () =>{
  test("Sums two integers", () =>{expect(calculator.compute("2+3")).toBe(5);});
  test.skip("Takes away one int from the other", () =>{expect(calculator.compute("5-3")).toBe(2);});
  test.skip("Multiplies two integers", () =>{expect(calculator.compute("2*3")).toBe(6);});
  test.skip("Divides two integers", () => {expect(calculator.compute("6/3")).toBe(2);});
  test.skip("Throws error if operant isn't right", () =>{expect(calculator.compute("#")).toBe("Wrong operator input");});
});
