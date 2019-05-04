const getNarcissisticNumber = (range = [1, 39]) => {
  if (typeof range === "number") {
    const sumOfDigits = getDigitsSum(range);
    return sumOfDigits === range;
  }
  if (range.length === 1) {
    range.unshift(undefined);
  }
  console.log(range[0]);
  let min = isNaN(range[0])
    ? Math.pow(10, range[1] - 1)
    : Math.floor(Math.pow(10, range[0] - 1));
  console.log(min);
  min = min === 1 ? 0 : min;
  console.log(min);
  const max = Math.pow(10, range[1]) - 1;
  let ret = [];
  console.log("min is %d, max is %d", min, max);
  for (let i = min; i <= max; i++) {
    const sumOfDigits = getDigitsSum(i);
    if (sumOfDigits === i) {
      ret.push(i);
    }
  }
  return ret;
};
const getIntergerFromRange = (min, max) =>
  Array.from(new Array(max - min + 1)).map((item, index) => index + min);
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  return l1.reduce((acc, item, index) => {
    return acc.concat(item, l2[index]);
  }, []);
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = ["(", ")", "{", "}", "[", "]"];
  const arrStr = s.split("");
  if (arrStr.length % 2) {
    return false;
  }
  return arrStr.every((item, ind) => {
    const index = arr.indexOf(item);
    if (index % 2) {
      return true;
    } else {
      var closedSign = arr[index + 1];
    }
    const remaining = arrStr.slice(ind + 1);
    if (remaining.length === 0) {
      return false;
    }
    return findPairedStr({ remaining, item, closedSign, arr });
  });
};
const findPairedStr = ({ remaining, item, closedSign, arr }) => {
  if (remaining.length === 0) {
    return true;
  }
  let isValid = false;
  for (let i = 0, itemNum = 1, closedSignNum = 0; i < remaining.length; i++) {
    const currentSign = remaining[i];
    if (currentSign === item) {
      itemNum++;
    }
    if (currentSign === closedSign) {
      closedSignNum++;
    }
    if (itemNum === closedSignNum) {
      if (i === 0) {
        isValid = true;
        break;
      } else if (remaining.slice(0, i - 1).length)
        isValid = findPairedStr({
          remaining: remaining.slice(1, i - 1),
          item: remaining[1],
          closedSign: arr[arr.indexOf(remaining[1]) + 1],
          arr
        });
      break;
    }
  }
  return isValid;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  return head.slice(0, head.length - n).concat(head.slice(head.length - n + 1));
};
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
function getDigitsSum(i) {
  const strI = i.toString();
  const arr = strI.split("");
  const powerNum = strI.length;
  const sumOfDigits = arr.reduce(
    (acc, item) => acc + Math.pow(item, powerNum),
    0
  );
  return sumOfDigits;
}

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
  fourSum,
  removeNthFromEnd,
  isValid,
  mergeTwoLists,
  getIntergerFromRange,
  getNarcissisticNumber
};
