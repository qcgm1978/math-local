const math = require("mathjs");
it(`132 is the sum of all the 2-digit numbers made from its digits. It is the smallest such number.`, () => {
  const getTotalByDigits = num => {
    const arrNum = num.toString().split("");
    let arr = [];
    for (let i = 0; i < arrNum.length; i++) {
      arrNum.slice(i + 1).map(item => {
        arr.push(arrNum[i] + item, item + arrNum[i]);
      });
    }
    return {
      sum: arr.reduce((acc, item) => +acc + +item),
      arr
    };
  };
  const getAllSumNum = digit => {
    const range = [math.pow(10, digit - 1), math.pow(10, digit) - 1];
    let arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
      const sumObj = getTotalByDigits(i);
      if (sumObj.sum === i) {
        arr.push(i);
      }
    }
    return arr;
  };
  expect(getTotalByDigits(132).sum).toBe(132);
  expect(getTotalByDigits(1188).sum).toBe(594);
  expect(getTotalByDigits(99999).sum).toBe(1980);
  expect(getTotalByDigits(999999).sum).toBe(2970);
  expect(getTotalByDigits(9999).sum)
    .toBe(99 * 12)
    .toBe(1188);
  expect(getTotalByDigits(1099).sum)
    .toBe(627)
    .toBeLessThan(1188);
  expect(getTotalByDigits(132).arr).toEqual([
    "13",
    "31",
    "12",
    "21",
    "32",
    "23"
  ]);
  expect(getAllSumNum(3)).toEqual([132, 264, 396]);
  expect(getAllSumNum(2)).toEqual([]);
  expect(getAllSumNum(4)).toEqual([]);
  expect(getAllSumNum(5)).toEqual([]);
});
it(``, () => {
  // expect(
  //   math.complex("cosœ+i*sinœ", {
  //     cosœ: Math.cos(45),
  //     sinœ: Math.sin(45)
  //   })
  // ).toMatchObject(math.complex(0, math.pow(Math.e, math.i * math.PI)));
  // expect(math.complex(math.cos(45),))
});
it(`2,520 is the smallest number that can be exactly divided by all the numbers 1 to 10`, () => {
  const arr = Array(10)
    .fill()
    .map((item, index) => index + 1);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
it("Every 3rd number is a multiple of 3, Every 2nd number is multiple of 2,  pᵖ is neither of these since p is not a multiple of 2 and 3, exception p=3(29 case). Hence pᵖ+2 is always multiple of 3.", () => {
  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * The value is no lower than min (or the next integer greater than min
   * if min isn't an integer) and no greater than max (or the next integer
   * lower than max if max isn't an integer).
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const n = getRandomInt(30, 10000);
  expect(n)
    .toBeGreaterThanOrEqual(30)
    .toBeLessThan(10000);
  const n1 = getRandomInt(30, 10000);
  const n2 = n1 + 1;
  const n3 = n1 + 2;
  // p is not a multiple of 2 and 3, exception p=3(29 case)
  // 1,2,3|4,5,6|7,8,9
  expect(n1 % 3 && n2 % 3 && n3 % 3)
    .toBe(n1 % 2 && n2 % 2)
    // .toBe(n3 % 3)
    .toBe(0);
});
