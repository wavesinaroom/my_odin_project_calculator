const calculator = require("../calculator.js");

describe("Sum", () =>{
  test("Sums two integers", () =>{expect(calculator.sumNumbers(2,3)).toBe(5);});
});

describe("Substract", () =>{
  test("Takes away one int from the other", () =>{expect(calculator.takeAwayNumbers(5,3)).toBe(2);});
});

describe("Multiply", () =>{
  test("Multiplies two integers", () =>{expect(calculator.multiplyNumbers(2,3)).toBe(6);});
});

describe("Divide", () =>{
  test("Divides two integers", () => {expect(calculator.dividesNumbers(6,3)).toBe(2);});
});

describe("Operate", () =>{
  test.skip("Sums two integers", () =>{expect(calculator.operate(2,3,"+")).toBe(5);});
  test.skip("Takes away one int from the other", () =>{expect(calculator.operate(5,3,"-")).toBe(2);});
  test.skip("Multiplies two integers", () =>{expect(calculator.multiplyNumbers(2,3,"*")).toBe(6);});
  test.skip("Divides two integers", () => {expect(calculator.dividesNumbers(6,3,"/")).toBe(2);});
  test.skip("Throws error if operant isn't right", () =>{expect(calculator.operate(6,3,"#").toBe("Wrong operator input"))});
});
