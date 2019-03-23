// const math = require("../../dist/math");
const math = require("mathjs");
const isEqual = require("../../lib/expression/isEqual.js");
const calcMatrix = require("../../lib/expression/calcMatrix.js");
math.import({
  calcMatrix
});
math.import({
  isEqual
});
const { Vector, Matrix, Line, Plane, Sylvester } = require("Sylvester");
const QuantumCompute = require("./quantum-computation");
const quantum = new QuantumCompute();
it(`a bit as an abstract entity, whose state is 0 or 1`, () => {
  expect(quantum).toBeInstanceOf(Object);
  expect(quantum.classicalState).toBeUndefined();
  expect(QuantumCompute.classicalState)
    .toBeInstanceOf(Array)
    .toContain(0)
    .toContain(1);
});
it(`the state of a qubit is a vector in a two-dimensional vector space (known as state space).`, () => {
  expect(QuantumCompute.qubitState)
    .toBeInstanceOf(Matrix)
    .toBeInstanceOf(Object);
  expect(QuantumCompute.qubitState.elements)
    .toContainEqual([0])
    .toContainEqual([1]);
  expect(QuantumCompute.qubitState.dimensions()).toEqual({ cols: 1, rows: 2 });
  expect(QuantumCompute.qubitState.space).toBe(2);
});
it(`This notation with |∣ and \rangle⟩ is called the ket notation, and things like |0\rangle∣0⟩ are called kets. `, () => {
  const expression = "|1>:=vector",
    vector = QuantumCompute.qubitState.elements;
  const mathEqual = math.isEqual(expression, {
    vector
  });
  expect(mathEqual).toBeTruthy();
  const matrix = Matrix.create([[1], [0]]);
  expect(quantum.isQubitState(matrix))
    .toBe(quantum.isQubitState(QuantumCompute.qubitState))
    .toBeTruthy();
});
