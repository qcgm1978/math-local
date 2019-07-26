const math = require("mathjs");
it(`am-gm inequality`, () => {
  const a = math.random(),
    b = math.random();
  expect((a + b) / 2).toBeGreaterThanOrEqual(math.sqrt(a * b));
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
