const tf = require("@tensorflow/tfjs");
require("@tensorflow/tfjs-node");
const BinarySearchTree = require("./binary-tree");
const isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);
it(` get the number of Tensors tracked by TensorFlow.js:`, () => {
  expect(tf.memory().numTensors).toBe(0);
  const a = tf.tensor([[1, 2], [3, 4]]);
  expect(tf.memory().numTensors).toBe(1);
});
it(`tf.tidy() method which cleans up all tf.Tensors that are not returned by a function after executing it, similar to the way local variables are cleaned up when a function is executed`, () => {
  const a = tf.tensor([[1, 2], [3, 4]]);
  const y = tf.tidy(() => {
    const result = a
      .square()
      .log()
      .neg();
    return result;
  });
  expect(y.dtype)
    .toBe(a.dtype)
    .toBe("float32");
});
it(`To destroy the memory of a tf.Tensor, you can use the dispose()method or tf.dispose():`, () => {
  const a = tf.tensor([[1, 2], [3, 4]]);
  const b = tf.tensor([[1, 2], [3, 4]]);
  a.dispose();
  tf.dispose(b);
  expect(a.dataSync).toThrow();
  expect(b.dataSync).toThrow();
});
it(` adding elements of two tf.Tensors element-wise`, () => {
  const a = tf.tensor([1, 2, 3, 4]);
  const b = tf.tensor([10, 20, 30, 40]);
  const y = a.add(b); // equivalent to tf.add(a, b)
  expect(y.arraySync())
    .toEqual(tf.add(a, b).arraySync())
    .toEqual([11, 22, 33, 44]);
});
it(`computing x2 of all elements in a tf.Tensor`, () => {
  const x = tf.tensor([1, 2, 3, 4]);
  const y = x.square(); // equivalent to tf.square(x)
  expect(y.arraySync()).toEqual([1, 4, 9, 16]);
});
it(`get the values from a tf.Tensor using the Tensor.array() or Tensor.data() methods`, done => {
  const a = tf.tensor([[1, 2], [3, 4]]);
  // Returns the multi dimensional array of values.
  expect(a.arraySync()).toEqual([[1, 2], [3, 4]]);
  // Returns the flattened data that backs the tensor.
  expect(a.dataSync()).toEqual(new Float32Array([1, 2, 3, 4]));
  // Returns the multi dimensional array of values.
  a.array().then(array => {
    expect(array).toEqual([[1, 2], [3, 4]]);
  });
  // Returns the flattened data that backs the tensor.
  a.data().then(data => {
    expect(data).toEqual(new Float32Array([1, 2, 3, 4]));
    done();
  });
});
it(` there can be multiple shapes with the same size, it's often useful to be able to reshape a tf.Tensor to another shape with the same size. This can be achieved with the reshape() method:`, () => {
  const a = tf.tensor([[1, 2], [3, 4]]);
  expect(a.shape).toEqual([2, 2]);

  const b = a.reshape([4, 1]);
  expect(b.shape).toEqual([4, 1]);
  expect(b.dataSync()).toEqual(a.dataSync());
  expect(Array.from(b.dataSync()))
    .toEqual(Array.from(a.dataSync()))
    .toEqual([1, 2, 3, 4]);
});
it(`By default, tf.Tensors will have a float32 dtype. tf.Tensors can also be created with bool, int32, complex64, and string dtypes:`, () => {
  const a = tf.tensor([[1, 2], [3, 4]], [2, 2], "int32");
  expect(a.shape).toEqual([2, 2]);
  expect(a.dtype).toBe("int32");
  expect(a.rankType).toBe("2");
});
it(`tf.Tensor can be created from an array with the tf.tensor() method:`, () => {
  // Create a rank-2 tensor (matrix) matrix tensor from a multidimensional array.
  const a = tf.tensor([[1, 2], [3, 4]]);
  expect(a.shape).toEqual([2, 2]);
  expect(a.dataSync()).toEqual(new Float32Array([1, 2, 3, 4]));

  // Or you can create a tensor from a flat array and specify a shape.
  const shape = [2, 2];
  const b = tf.tensor([1, 2, 3, 4], shape);
  expect(b.shape).toEqual([2, 2]);
  expect(b.dataSync()).toEqual(new Float32Array([1, 2, 3, 4]));
});
it(`Creates a Tensor with evenly spaced numbers.`, () => {
  expect(tf.linspace(0, 9, 10).dataSync()).toEqual(
    new Float32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  );
});
it(`Creates a Tensor from Images.`, () => {
  if (isBrowser()) {
    //Currently tf.fromPixels is not supported in Node
    const image = new ImageData(1, 1);
    image.data[0] = 100;
    image.data[1] = 150;
    image.data[2] = 200;
    image.data[3] = 255;
    expect(tf.fromPixels(image).dataSync()).toEqual();
  }
});
it(`Creates a Buffer Tensor.`, () => {
  // Create a buffer and set values at particular indices.
  const buffer = tf.buffer([2, 2]);
  buffer.set(3, 0, 0);
  buffer.set(5, 1, 0); // Convert the buffer back to a tensor. buffer.toTensor()
  const bufferTensor = buffer.toTensor();
  expect(bufferTensor.dataSync()).toEqual(new Float32Array([3, 0, 5, 0]));
  expect(bufferTensor.shape).toEqual([2, 2]);
});
it(` tf.tensor ( values , shape? , dtype? )`, () => {
  // Pass an array of values to create a vector.
  expect(tf.tensor([1, 2, 3, 4]).dataSync()).toEqual(
    new Float32Array([1, 2, 3, 4])
  );
  // Pass a flat array and specify a shape yourself.
  expect(tf.tensor([1, 2, 3, 4], [2, 2]).dataSync()).toEqual(
    new Float32Array([1, 2, 3, 4])
  );
  expect(tf.tensor([1, 2, 3, 4], [2, 2]).shape).toEqual([2, 2]);
});
it(`tf.layers.rnn (args) function`, () => {
  const rnn = tf.layers.rnn;
  expect(rnn).toBeInstanceOf(Function);
  expect(rnn).toThrow();
  const denseLayer = tf.layers.dense({
    units: 1,
    kernelInitializer: "zeros",
    useBias: false
  });
  expect(rnn.bind(denseLayer)).toThrow();
});
it(`binary tree`, () => {
  let BSTtest = new BinarySearchTree();

  //tests

  BSTtest.insertNumberNode(10);

  BSTtest.insertNumberNode(7);

  BSTtest.insertNumberNode(14);

  BSTtest.insertNumberNode(5);

  BSTtest.insertNumberNode(13);

  BSTtest.insertNumberNode(8);

  BSTtest.insertNumberNode(18);

  BSTtest.insertNumberNode(15);

  BSTtest.insertNumberNode(6);

  BSTtest;
  expect(BSTtest.root).toEqual({
    data: 10,
    left: {
      data: 7,
      left: {
        data: 5,
        left: null,
        right: { data: 6, left: null, right: null }
      },
      right: { data: 8, left: null, right: null }
    },
    right: {
      data: 14,
      left: { data: 13, left: null, right: null },
      right: {
        data: 18,
        left: { data: 15, left: null, right: null },
        right: null
      }
    }
  });
});
describe(`some common Tensor transformations for reshaping and type-casting.`, () => {
  it(`Casts a tf.Tensor to a new dtype.`, () => {
    const x = tf.tensor1d([1.5, 2.5, 3]);
    expect(Array.from(tf.cast(x, "int32").dataSync())).toEqual([1, 2, 3]);
  });
});
describe(`tensor.relu`, () => {
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
});
