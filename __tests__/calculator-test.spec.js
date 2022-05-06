const calculator = require("../calculator.js");

describe("Addition", () =>{
  test("Sums two integers", () =>{expect(calculator.compute("2+3")).toBe(5);});
  test("Sums more than two integers", () =>{expect(calculator.compute("2+3")).toBe(5);});
});

describe("Substraction", () =>{
  test.skip("Takes away one int from the other", () =>{expect(calculator.compute("5-3")).toBe(2);});
});

describe("Multiplication", () =>{
  test.skip("Multiplies two integers", () =>{expect(calculator.compute("2*3")).toBe(6);});
});

describe("Division", () =>{
  test.skip("Divides two integers", () => {expect(calculator.compute("6/3")).toBe(2);});
});

describe("Wrong input", () =>{
  test.skip("Throws error if operant isn't right", () =>{expect(calculator.compute("#")).toBe("Wrong operator input");});
});
