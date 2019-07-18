const { Vector, Matrix, Line, Plane, Sylvester } = require("Sylvester-es6");
class QuantumCompute {
  constructor() {}
  isQubitState(matrix) {
    const elements = matrix.elements;
    const order = elements.map(item => item[0]);
    return order.length == 2 && order.includes(0) && order.includes(1);
  }
}
QuantumCompute.classicalState = [0, 1];
const qubitState = Matrix.create([[0], [1]]);
QuantumCompute.qubitState = qubitState;
QuantumCompute.qubitState.space = qubitState.dimensions().rows;
module.exports = QuantumCompute;
