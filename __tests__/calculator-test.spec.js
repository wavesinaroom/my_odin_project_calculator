const calculator = require("../calculator.js");

describe("Wrong input", () =>{
  test("Throws error when trying to parse non digit o non sign", () =>{
    function parse(){
      calculator.compute("1&321354+54654");
    }
    expect(parse).toThrowError("Wrong input");
  });

  test("Parses a single positive integer", () =>{expect(calculator.compute("3246")).toBe(3246);});
  test("Parses a single negative integer", () =>{expect(calculator.compute("-3246")).toBe(-3246);});

  test("Throws error if it starts with an +,*,/", () =>{
    function parse(){
      calculator.compute("/65435+48674");
    }
    expect(parse).toThrowError("Wrong input");
  });

  test("Throws error if it ends with an +,*,/", () =>{
    function parse(){
      calculator.compute("65435+48674-");
    }
    expect(parse).toThrowError("Wrong input");
  });

  test("Throws error if more than one sign is added", () =>{
    function parse(){
      calculator.compute("1456+87618**456");
    }
    expect(parse).toThrowError("Wrong input");
  });

  test("Parses negative number at the beginning of the expression", () =>{expect(calculator.compute("-100/2+50")).toBe(0);});
  test("Parses negative number at any point of the expression", () =>{expect(calculator.compute("30*-100+50")).toBe(-250);});
});

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
  test("Takes away floats", () =>{expect(calculator.compute("45.285-20.15-5.54")).toBe(19.595);});
});

describe("Multiplication", () =>{
  test("Multiplies two integers", () =>{expect(calculator.compute("2*3")).toBe(6);});
  test("Multiplies even number of integers", () =>{expect(calculator.compute("2*3*4*8")).toBe(192);});
  test("Multiplies odd number of integers", () =>{expect(calculator.compute("2*3*5")).toBe(30);});
  test("Multiplies large numbers", () =>{expect(calculator.compute("204*36*456*65")).toBe(217676160);});
  test("Multiplies floats", () =>{expect(calculator.compute("2.32*3.78*5.65")).toBe(49.54824);});
});

describe("Division", () =>{
  test("Divides two integers", () => {expect(calculator.compute("6/3")).toBe(2);});
  test("Divides even number of integers", () => {expect(calculator.compute("8/4/2")).toBe(1);});
  test("Divides odd number of integers", () => {expect(calculator.compute("30/2/5/3")).toBe(1);});
  test("Divides large numbers", () => {expect(calculator.compute("144000/1200")).toBe(120);});
  test("Divides floats", () => {expect(calculator.compute("25.42/3.6")).toBe(7.06111 );});
});


describe("Mixed operators", () =>{
  test("Works with positive number", () =>{expect(calculator.compute("100/2+50*2-100")).toBe(100);});
  test("Works with starting negative number", () =>{expect(calculator.compute("-100/2+75*3")).toBe(75);});
  test("Works with negative numbers in the middle", () =>{expect(calculator.compute("30*-100+50")).toBe(-250);});
});
