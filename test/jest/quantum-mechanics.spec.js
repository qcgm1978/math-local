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
  expect(QuantumCompute.qubitState).toBeInstanceOf(Matrix);
  expect(QuantumCompute.qubitState.elements)
    .toContainEqual([0])
    .toContainEqual([1]);
  expect(QuantumCompute.qubitState.dimensions()).toEqual({ cols: 1, rows: 2 });
});
