const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
it(`tf.relu (x) function source
Computes rectified linear element-wise: max(x, 0).`, () => {
  const x = tf.tensor1d([-1, 2, -3, 4]);
  const floatArr = x.relu().dataSync();
  expect(floatArr).not.toBeInstanceOf(Float32Array); //But note that will fail if the object originates in a different environment (like another frame), because different environments have different Float32Array constructors (even though they do the same thing).

  expect(Object.prototype.toString.call(floatArr)).toBe(
    "[object Float32Array]"
  );
  expect(Array.from(floatArr)).toEqual([0, 2, 0, 4]);
});
