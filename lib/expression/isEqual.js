const math = require("mathjs");
const { Vector, Matrix, Line, Plane, Sylvester } = require("Sylvester");
const isEqual = (str, scope) => {
  if (str.includes("=")) {
    const arr = str.split("=");
    let left = null;
    if (arr[0].includes("|1>:")) {
      return scope[arr[1]][0][0] === 0 && scope[arr[1]][1][0];
    } else {
      left = math.eval(arr[0], scope);
    }
    const right = math.eval(arr[1], scope);
    return left === right;
  } else {
    return false;
  }
};

exports.isEqual = isEqual;
