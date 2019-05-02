/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const zeroNums = nums.map(item => item - target);
  const natural = zeroNums.filter(item => item > 0);
  const other = zeroNums.filter(item => item <= 0);
  let big = [];
  for (let i = 0; i < natural.length; i++) {
    for (let m = i + 1; m < natural.length; m++) {
      big.push({ [natural[i] + natural[m]]: [natural[i], natural[m]] });
    }
  }
  let small = [];
  for (let i = 0; i < other.length; i++) {
    for (let m = i + 1; m < other.length; m++) {
      small.push({ [natural[i] + natural[m]]: [natural[i], natural[m]] });
    }
  }
  const smallKeys = Object.keys(small);
  // console.table(big);
  return big.reduce((acc, item) => {
    // console.log("prop is %d", prop);
    const key = Object.keys(item)[0];
    const arr = small.filter(it => {
      const itKey = Object.keys(it)[0];
      return Math.abs(itKey) === Number(key);
    });
    return arr.length
      ? acc.concat(
          arr.map(t => {
            return [...t[key], ...item[key]];
          })
        )
      : acc;
  }, []);
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const btns = 8;
  const factorial = alphabet.reduce((acc, item, index) => {
    const arr = alphabet.slice(index).map(it => item + it);
    return acc.concat(arr);
  }, []);
  return factorial;
};
const getTelBtns = _ => {
  const alphabet = genCharArray("a", "z");
  let obj = {};
  for (let i = 2, m = 0; i < 10; i++) {
    if (i === 7 || i === 9) {
      obj[i] = alphabet.slice(m, m + 4);
    } else {
      obj[i] = alphabet.slice(m, m + 3);
    }
  }
  return obj;
};
function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let tempOffset = Infinity,
    tempThreeSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let m = i + 1; m < nums.length; m++) {
      const twoSum = nums[i] + nums[m];
      for (let n = m + 1; n < nums.length; n++) {
        const threeSum = twoSum + nums[n];
        const offset = Math.abs(threeSum - target);
        if (offset < tempOffset) {
          tempOffset = offset;
          tempThreeSum = threeSum;
        }
      }
    }
  }
  return tempThreeSum;
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
  intToRoman,
  threeSumClosest,
  letterCombinations,
  genCharArray,
  getTelBtns,
  fourSum
};
