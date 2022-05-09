const calculator = require("../calculator.js");

describe("Addition", () =>{
  test("Sums two integers", () =>{expect(calculator.compute("2+3")).toBe(5);});
  test("Sums even number of integers", () =>{expect(calculator.compute("2+3+5+6")).toBe(16);});
  test("Sums odd number of integers", () =>{expect(calculator.compute("2+3+5")).toBe(10);});
  test("Sums large integers", () =>{expect(calculator.compute("25498+135748+543541")).toBe(704787);});
  test("Sums floats", () =>{expect(calculator.compute("2.52+0.674+12.45+654.5455")).toBe(670.1895);});
});

describe("Substraction", () =>{
  test("Takes away two integers", () =>{expect(calculator.compute("5-3")).toBe(2);});
  test("Takes away even number of integers", () =>{expect(calculator.compute("10-3-4-2")).toBe(1);});
  test("Takes away odd number of integers", () =>{expect(calculator.compute("5-3-2")).toBe(0);});
  test("Takes away large integers", () =>{expect(calculator.compute("321564-3541-354-1000")).toBe(316669);});
  test.skip("Takes away floats", () =>{expect(calculator.compute("45.285-20.15-5.54")).toBe(19.595);});
});

describe("Multiplication", () =>{
  test.skip("Multiplies two integers", () =>{expect(calculator.compute("2*3")).toBe(6);});
  test.skip("Multiplies even number of integers", () =>{expect(calculator.compute("2*3*4*8")).toBe(192);});
  test.skip("Multiplies odd number of integers", () =>{expect(calculator.compute("2*3*5")).toBe(30);});
  test.skip("Multiplies large numbers", () =>{expect(calculator.compute("204*36*456*65")).toBe(217676160);});
  test.skip("Multiplies floats", () =>{expect(calculator.compute("2.32*3.78*5.65")).toBe(49.54824);});
});

describe("Division", () =>{
  test.skip("Divides two integers", () => {expect(calculator.compute("6/3")).toBe(2);});
  test.skip("Divides even number of integers", () => {expect(calculator.compute("8/4/2")).toBe(1);});
  test.skip("Divides odd number of integers", () => {expect(calculator.compute("30/2/5/3")).toBe(1);});
  test.skip("Divides large numbers", () => {expect(calculator.compute("144000/1200")).toBe(120);});
  test.skip("Divides floats", () => {expect(calculator.compute("25.42/3.6")).toBe(7.061111111);});
});

describe("Wrong input", () =>{
  test.skip("Throws error if operant isn't right", () =>{expect(calculator.compute("#")).toBe("Wrong operator input");});
});
