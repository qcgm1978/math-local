const { Vector, Matrix, Line, Plane, Sylvester } = require("Sylvester");
class QuantumCompute {
  constructor() {}
}
QuantumCompute.classicalState = [0, 1];
QuantumCompute.qubitState = Matrix.create([[0], [1]]);
module.exports = QuantumCompute;
