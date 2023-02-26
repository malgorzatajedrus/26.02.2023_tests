// plik testowy

const calculator = require('./calc');

describe("Calculator", () => {
  test("adding 1 + 2 and return 3", () => {
    expect(calculator.sum(1,2)).toBe(3)
  }); //* it = test ale zamiast should do it a do test powinno byc adding*//
test("adding 4 + 5 and not return 3", () => {
expect(calculator.sum(4,5)).not.toBe(3); //* zaprzeczenie - ma sie nie rownac//
});
test("adding 4 + 5 and return less than 10", () => {
    expect(calculator.sum(4,5)).toBeLessThan(10)
});

test("subtracting 3 - 1 should return 2", () => {
expect(calculator.diff(3,1)).toBe(2);
});
test("mulitiplying 4 * 4 should return 16", () => {
    expect(calculator.multi(4,4)).toBe(16);
});
});