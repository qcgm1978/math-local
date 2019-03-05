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
describe(``, () => {
  it(`The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. `, () => {
    const buffer = new ArrayBuffer(8);

    expect(buffer.byteLength).toBe(8);
  });
  it(`The ArrayBuffer.isView() method returns true if arg is one of the ArrayBuffer views, such as typed array objects or a DataView; false otherwise.`, () => {
    const data = [0, 1, 2],
      dataBuffer = new ArrayBuffer(data),
      dataBufferView = new Float32Array(data),
      buffer = new ArrayBuffer(16);
    const view = new DataView(buffer);
    expect(ArrayBuffer.isView(data)).toBeFalsy(); //false
    expect(ArrayBuffer.isView(dataBuffer)).toBeFalsy(); //false
    expect(ArrayBuffer.isView(dataBufferView)).toBeTruthy(); //true
    expect(dataBuffer).toBeInstanceOf(ArrayBuffer);
    expect(ArrayBuffer.isView(view)).toBeTruthy();
  });
  it(`In the context of artificial neural networks, the rectifier is an activation function defined as the positive part of its argument:`, () => {
    const getRectifier = para => {
      if (isFinite(para)) {
        return Math.max(0, para);
      } else if (para instanceof Array) {
        return para.map(item => Math.max(0, item));
      } else if (
        //   Object.prototype.toString.call(para) === "[object Float32Array]"
        ArrayBuffer.isView(para)
      ) {
        return Array.from(para.map(item => Math.max(0, item)));
      }
    };
    expect(getRectifier(-5)).toBe(0);
    expect(getRectifier(5)).toBe(5);
    expect(getRectifier([-1, 2, -3, 4])).toEqual([0, 2, 0, 4]);
    expect(getRectifier(new Float32Array([-1, 2, -3, 4]))).toEqual([
      0,
      2,
      0,
      4
    ]);
    expect(getRectifier(new Float64Array([-1, 2, -3, 4]))).toEqual([
      0,
      2,
      0,
      4
    ]);
  });
});
