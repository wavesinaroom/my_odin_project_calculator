const calculator = require("../calculator.js");

describe("Calculate two numbers", () =>{
  beforeEach(()=>{
    calculator.numbers = [];
    calculator.symbols = [];
  })

  test("Sums two integers", () =>{expect(calculator.compute("2+3")).toBe(5);});
  test("Sums two integers", () =>{expect(calculator.compute("2+2")).toBe(4);});
  test("Takes away one int from the other", () =>{expect(calculator.compute("5-3")).toBe(2);});
  test("Multiplies two integers", () =>{expect(calculator.compute("2*3")).toBe(6);});
  test("Divides two integers", () => {expect(calculator.compute("6/3")).toBe(2);});
  test("Throws error if operant isn't right", () =>{expect(calculator.compute("#")).toBe("Wrong operator input");});
});
