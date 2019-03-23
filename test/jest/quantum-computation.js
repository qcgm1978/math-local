const { Vector, Matrix, Line, Plane, Sylvester } = require("Sylvester");
class QuantumCompute {
  constructor() {}
}
QuantumCompute.classicalState = [0, 1];
const qubitState = Matrix.create([[0], [1]]);
QuantumCompute.qubitState = qubitState;
QuantumCompute.qubitState.space = qubitState.dimensions().rows;
module.exports = QuantumCompute;
