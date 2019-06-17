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
