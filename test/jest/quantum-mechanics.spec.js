const QuantumCompute = require("./quantum-computation");
it(`a bit as an abstract entity, whose state is 0 or 1`, () => {
  const quantum = new QuantumCompute();
  expect(quantum).toBeInstanceOf(Object);
  expect(quantum.classicalState).toBeUndefined();
  expect(QuantumCompute.classicalState)
    .toBeInstanceOf(Array)
    .toContain(0)
    .toContain(1);
});
