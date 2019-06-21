const utils = require("../to-jest/algorithm");
it(`harmonic series`, () => {
  const ret = utils.getTotal({ n: 1 });
  expect(ret.expression).toBe("1 / 1^1 + 1 / 2^1 + 1 / 3^1 + ... + 1 / n^1");
  expect(ret.sum).toBe(Infinity);
  expect(ret.solution).toBe(
    "1 / 1^1 + 1 / 2^1 + (1 / 4^1 + 1 / 4^1 )  + (1 / 7^1 + 1 / 6^1 + 1 / 7^1 + 1 / 8^1"
  );
});
it(`Pascal's Triangle`, () => {
  expect(utils.getPascalTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ]);
  expect(typeof utils.getPascalTriangleGraph(5)).toBe("string");
});
it(`Unwanted connections are destroyed by switching their attached modifiers to interrupt mode`, () => {
  class BTypeTraining {
    constructor(A, B) {
      this.A = A;
      this.B = B;
    }
    set interuptMod(nutron) {
      this[nutron + "IsInterrupt"] = true;
    }
    getTuringConectMod() {
      const a = this.AIsInterrupt ? 1 : this.A;
      const b = this.BIsInterrupt ? 1 : this.B;
      return +!(a & b);
    }
  }
  const bType = new BTypeTraining(1, 0);
  expect(bType.getTuringConectMod()).toBe(1);
  bType.interuptMod = "B";
  expect(bType.getTuringConectMod()).toBe(0);
});
it(` interrupt mode. In this mode, the output of the box is always 1, no matter what its input.`, () => {
  expect(+true).toBe(1);
  expect(+false).toBe(0);
  expect(1 & 1).toBe(1);
  expect(+!(1 & 1)).toBe(0);
  expect(0 & 1).toBe(0);
  expect(+!(0 & 1)).toBe(1);
  expect(+!(1 & 0)).toBe(1);
  expect(+!(1 & 0)).toBe(1);
  // so a Turing connection-modifier is:
  const getTuringConectMod = (first, second) => {
    return +!(first & second);
  };
  expect(getTuringConectMod(1, 1)).toBe(0);
  expect(getTuringConectMod(1, 0)).toBe(1);
  expect(getTuringConectMod(0, 1)).toBe(1);
  expect(getTuringConectMod(0, 0)).toBe(1);
});
it(`the network computes what logicians call the inclusive disjunction of the inputs.`, () => {
  const getInclusiveDisjunction = (A, B) => {
    return +(A | B);
  };
  expect(getInclusiveDisjunction(1, 1)).toBe(1);
  expect(getInclusiveDisjunction(0, 1)).toBe(1);
  expect(getInclusiveDisjunction(1, 0)).toBe(1);
  expect(getInclusiveDisjunction(0, 0)).toBe(0);
});
it(`the output takes the same value as A, no matter what the value of B`, () => {
  const getBInterruptMod = (A, B = B => 1) => {
    return +A;
  };
  expect(getBInterruptMod(1)).toBe(1);
  expect(getBInterruptMod(1, 0)).toBe(1);
  expect(getBInterruptMod(1, 1)).toBe(1);
  expect(getBInterruptMod(0, 1)).toBe(0);
  expect(getBInterruptMod(0, 0)).toBe(0);
});
it("Salary", () => {
  const notTaxIncome = 5000;
  const taxRate = [
    { "3%": 3000 },
    { "10%": 12000 },
    { "20%": 25000 },
    { "25%": 35000 },
    { "30%": 55000 },
    { "35%": 80000 },
    { "45%": Infinity }
  ];
  let income = 20000,
    security = 2000;
  const getTax = ({ income, security }) => {
    let taxIncome = income - notTaxIncome - security;
    let tax = 0,
      remaining = taxIncome;
    for (let i = 0; i < taxRate.length; i++) {
      const value = Object.values(taxRate[i])[0];
      const preValue = i ? Object.values(taxRate[i - 1])[0] : 0;
      const key = Object.keys(taxRate[i])[0];
      if (taxIncome > value) {
        tax += (value - preValue) * parseInt(key) * 0.01;
        remaining -= value;
      } else {
        tax += (taxIncome - preValue) * parseInt(key) * 0.01;
        break;
      }
    }
    return tax;
  };
  expect(getTax({ income, security })).toBe(1190);
});
