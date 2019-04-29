const {
  twoSum,
  addTwoGenNumbers,
  addTwoNumbers,
  getVal,
  getGenVal,
  findMedianSortedArrays
} = require("../to-jest/algorithm");
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
