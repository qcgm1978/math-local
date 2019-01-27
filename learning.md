1. What new technology/concept would be certainly profitable in my day to day job in the next 3-6 months?

* Promise, await
* Refactor
* Data structure

2. What field do I want to **deepen** my knowledge in?

* Tensorflow
* Animation
- Motion knowledge
* Git
* Optical illusion
* Quantum theory
* Neural network
* Matrix
* Math
* Tools
* Database

3. What piece of technology/concept **excites** me and makes me want to try it?

* Mysql
* Nodejs
* basic machine learning algorithms
* Tensorflow.js
* D3.js

# Tensorflow (0/5)

* How to apply deep learning with Tensorflow.js?
* How to add althorithm to tensorflow.js?
* How to requestAnimationFrame requesting?
* How to passing learning parameters?
* What's the difference between deep learning/logic coding?
* How to divide learning components?
* What is a deep learning algorithm?
* What are generic algorithm of deep learning?

**What is a difference between deep learning and task-specific algorithms?**

Parameters Deep learning (also known as deep structured learning or hierarchical learning) is part of a broader family of machine learning methods based on learning data representations, as opposed to task-specific algorithms.

const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
    await a.forEach(e => {
        expect(e.shape).toEqual([4])
        done()
    })

task-specific algorithms: In mathematics and computer science, an algorithm (/ˈælɡərɪðəm/ (About this soundlisten)) is an unambiguous specification of how to solve a class of problems.

 const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const len = arr.length / 4
    expect(arr.reduce((acc, item, i) => {
        if (i % len) {

            acc[acc.length - 1].push(item)
        } else {
            acc.push([item])
        }
        return acc
    }, [])).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]])
