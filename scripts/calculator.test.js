const calculator = require("./calculator");

describe("Calculate Two Numbers", () => {
  it("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it("should subtract two numbers", () => {
    expect(calculator.subtract(9, 6)).toBe(3);
  });

  it("should multiply two numbers", () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });

  it("should divide two numbers", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
});

describe("Calculate More Than Two Numbers", () => {
  it("should add six numbers", () => {
    expect(calculator.add(1, 1, 2, 2, 3, 3)).toBe(12);
  });

  it("should subtract five numbers", () => {
    expect(calculator.subtract(15, 5, 3, 2, 1)).toBe(4);
  });

  it("should multiply four numbers", () => {
    expect(calculator.multiply(1, 2, 3, 4)).toBe(24);
  });

  it("should divide three numbers", () => {
    expect(calculator.divide(100, 25, 2)).toBe(2);
  });
});
