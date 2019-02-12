const tf = require('@tensorflow/tfjs-node');
// it(`But what about concepts? Yeah, most of them are impossible to be "found" in a very short time and require a significant amount of learning effort.`, async function (done) {
// const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
// await a.forEach(e => {
//     expect(e.shape).toEqual([4])
//     done()
// })
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// const len = arr.length / 4
// expect(arr.reduce((acc, item, i) => {
//     if (i % len) {

//         acc[acc.length - 1].push(item)
//     } else {
//         acc.push([item])
//     }
//     return acc
// }, [])).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]])
// })
it(`Computes the softmax normalized vector given the logits.`, () => {
    const a = tf.tensor1d([1, 2, 3]);
    expect(a.dataSync())

        .toEqual(new Float32Array([1, 2, 3]))
    expect(a.softmax().toString()).toEqual()  // or tf.softmax(a)
    // a.softmax().print();  // or tf.softmax(a)
});
