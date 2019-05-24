/* eslint-disable no-undef */

const math = require("../../dist/math");
it(`The gigawatt (GW) is equal to one billion (109) watts or 1 gigawatt = 1000 megawatts`, () => {
  const energyPerMeter2 = {
    energy: [2000, 3000],
    orderWatt: 1e3,
    unit: "kilowatt hours/square meter/year"
  };
  const areaSahara = {
    number: 9,
    order: 1e6,
    areaUnit: 1e9, // 1km2/1m2
    unit: "km2"
  };
  const energyPerYear =
    energyPerMeter2.energy[1] *
    areaSahara.number *
    areaSahara.order *
    areaSahara.areaUnit;
  const gigawatt = 1e9;
  expect(+energyPerYear.toString().length).toBe(
    (22 * 1e9 * gigawatt).toFixed(0).length
  );
});
it(`N a scale of temperatures in which 32° represents the melting point of ice and 212° represents the boiling point of pure water under standard atmospheric pressure 华氏温标
`, () => {
  const FahrenheitToCelsius = fahr => {
    const fahrIcePoint = 32;
    const fahrBoilingPoint = 212;
    const liquidWater = fahrBoilingPoint - fahrIcePoint;
    return (fahr - fahrIcePoint) / (liquidWater / 100);
  };
  expect(+FahrenheitToCelsius(97).toFixed(2)).toBe(36.11);
});
it("This is the only known solution to n! = a!b! apart from the general pattern, (n!)! = n!(n! - 1)!", () => {
  const calFactorial = num => {
    const arr = Array.from(new Array(num), (val, index) => index + 1);

    return arr.reduce((acc, item) => {
      return acc * item;
    });
  };
  expect(calFactorial(10))
    .toBe(calFactorial(6) * calFactorial(7))
    .toBe(3628800);
});
it("But the LHCb experiment has now managed to observe such an asymmetry in particles called D-meson – which are comprised of charm quarks – for the first time. This is made possible by the unprecedented amount of charm particles produced directly in the LHC collisions, which I pioneered a decade ago. The result indicates that the chance of this being a statistical fluctuation is about 50 in a billion.", () => {
  const asymmetryStatFulctuate = 50 / 1e9;
  expect(asymmetryStatFulctuate).toBe(5e-8);
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
it("Cyclomatic complexity measures the number of linearly independent paths through a program’s source code. This rule allows setting a cyclomatic complexity threshold.", () => {
  const edge = 30,
    node = 23,
    component = 1,
    cyclomaticComplexity = "edge - node + 2 * component",
    maxPaths = 9,
    EulerFormulaFaces = "E-V+2";
  expect(
    math.eval(EulerFormulaFaces, {
      E: edge,
      V: node
    })
  )
    .toBe(
      math.eval(cyclomaticComplexity, {
        edge,
        node,
        component
      })
    )
    .toBe(9)
    .toBeLessThanOrEqual(maxPaths);
});
