/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const arr = Object.values(obj).reverse();
  const nextScale = arr.find(
    (item, index) => num <= item && num >= arr[index + 1]
  );
  const prevScale = arr[arr.indexOf(nextScale) + 1];
  const prop = getKeyByValue(obj, nextScale);
    const unit = getKeyByValue(obj, 1) + "";
    const remain = nextScale - prevScale;
  if (remain < nextScale - prevScale) {
    return unit.repeat(num);
  } else {
    return unit + prop;
  }
};
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let relativeIndex = 0;
  const num = nums.find((item, index) => {
    const relativeVal = target - item;
    const otherNum = nums.slice(index + 1);
    if (otherNum.includes(relativeVal)) {
      relativeIndex = index + otherNum.indexOf(relativeVal) + 1;
      return true;
    } else {
      return false;
    }
  });
  return [nums.indexOf(num), relativeIndex];
};
let getVal = null;

let addTwoNumbers = null;
// implemented by Generator
getVal = function*(arr) {
  let index = 0;
  while (true) {
    yield arr[index++];
  }
};
addTwoGenNumbers = function(l1, l2) {
  let l1Arr = [],
    l2Arr = [],
    item = null;
  while ((item = l1.next().value)) {
    l1Arr.push(item);
  }
  while ((item = l2.next().value)) {
    l2Arr.push(item);
  }
  const sum = +l1Arr.reverse().join("") + +l2Arr.reverse().join("");
  const sumArr = (sum + "")
    .split("")
    .reverse()
    .map(item => +item);
  return getVal(sumArr);
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * implemented to test case
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const getGenVal = function(arr) {
  arr.val = arr[0];
  arr.next = getVal(arr).next.value;
};
addTwoNumbers = function(l1, l2) {
  let l1Arr = [],
    l2Arr = [],
    item = null;
  while (l1 && (item = l1.val)) {
    l1Arr.push(item);
    l1 = l1.next;
  }
  while (l2 && (item = l2.val)) {
    l2Arr.push(item);
    l2 = l2.next;
  }
  const sum = +l1Arr.reverse().join("") + +l2Arr.reverse().join("");
  const sumArr = (sum + "")
    .split("")
    .reverse()
    .map(item => +item);
  return getGenVal(sumArr);
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
  const mid1 = nums1.length
    ? nums1.reduce((acc, item) => acc + item) / nums1.length
    : 0;
  const mid2 = nums2.length
    ? nums2.reduce((acc, item) => acc + item) / nums2.length
    : 0;
  return (mid1 + mid2) / (mid1 && mid2 ? 2 : 1);
};
module.exports = {
  twoSum,
  addTwoGenNumbers,
  addTwoNumbers,
  getVal,
  getGenVal,
  findMedianSortedArrays,
  intToRoman
};
