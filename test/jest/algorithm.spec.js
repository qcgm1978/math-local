const {
  twoSum,
  addTwoGenNumbers,
  addTwoNumbers,
  getVal,
  getGenVal,
  findMedianSortedArrays,
  intToRoman,
  threeSumClosest,
  letterCombinations,
  genCharArray,
  getTelBtns,
  fourSum
} = require("../to-jest/algorithm");
it(`reverse string`, () => {
  const reverseStr = str =>
    str
      .split("")
      .reverse()
      .join("");
  expect(reverseStr("mac")).toBe("cam");
});
it(`Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.`, () => {
  // expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual(3);
  // expect(fourSum([1, 0, -1, 0, -2, 2], 0).length).toBe(3);
});
it(``, () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  expect(threeSumClosest([1, 1, 1, 0], -100)).toBe(2);
});
it(``, () => {
  expect(getTelBtns()).toMatchObject({});
  expect(genCharArray("a", "z")).toEqual([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]);
});
it(``, () => {
  //   expect(intToRoman(3)).toBe("III");
  //   expect(intToRoman(4)).toBe("IV");
  //   expect(intToRoman(9)).toBe("IX");
  //   expect(intToRoman(8)).toBe("VIII");
  //   expect(intToRoman(58)).toBe("LVIII");
});
it(`Given an array of integers, return indices of the two numbers such that they add up to a specific target.`, () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
it(`Add the two numbers and return it as a linked list.`, () => {
  let gen = addTwoGenNumbers(getVal([2, 4, 3]), getVal([5, 6, 4]));
  expect(gen.next().value).toBe(7);
  expect(gen.next().value).toBe(0);
  expect(gen.next().value).toBe(8);
  //   const arr1 = [2, 4, 3];
  //   const arr2 = [5, 6, 4];
  //   getGenVal(arr1);
  //   getGenVal(arr2);
  //   gen = addTwoNumbers(arr1, arr2);
  //   expect(gen.next).toBe(7);
  //   expect(gen.next).toBe(0);
  //   expect(gen.next).toBe(8);
});
it(``, () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  expect(findMedianSortedArrays([], [1])).toBe(1);
});
