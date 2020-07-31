const sum = (a, b) => a + b;

describe("sum", () => {
  it("should sum", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

module.exports = { sum };
