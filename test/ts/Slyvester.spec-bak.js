// http://sylvester.jcoglan.com/docs.html
const { Vector, Matrix, Line, Plane, Sylvester } = require('Sylvester')
const tf = require('@tensorflow/tfjs');

it(`A transformation of an block using the matrix() function is done by multiplying the matrix with each of the corner-coordinates of the block which will give the corners of the new object when the transform-origin is set to 0 0`, () => {
    const iniCoordinates = [[0, 0], [200, 0], [200, 80], [0, 80]]
    const cssMatrix = 'matrix(0.9, -0.05, -0.375, 1.375, 220, 20)'
    const cssNumber = /\((.+)\)/.exec(cssMatrix)[1].split(',').map(item => +item)
    expect(cssNumber).toEqual([0.9, -0.05, -0.375, 1.375, 220, 20])
    const matrixStyle = cssNumber.reduce((accumulator, item, index) => {
        index % 2 ? accumulator[1].push(item) : accumulator[0].push(item)
        return accumulator
    }, [[], []])
    const thirdLine = [0, 0, 1]
    matrixStyle.push(thirdLine)
    expect(matrixStyle).toEqual([[0.9, -0.375, 220], [-0.05, 1.375, 20], [0, 0, 1]])
    const matrix = Matrix.create(matrixStyle)
    expect(matrix.elements).toEqual(matrixStyle)
    expect(matrix.dimensions()).toEqual({ rows: 3, cols: 3 })
    const targetPos = iniCoordinates.map(item => {
        const arr = Vector.create(item).transpose().elements
        arr.push([1])
        const vector = Vector.create(arr)
        return matrix.x(vector).elements.slice(0, 2)
    })
    expect(targetPos).toEqual([[220, 20], [400, 10], [370, 120], [190, 130]])
});
it(`there exist a series of shorthand functions for creating objects in Sylvester`, () => {
    expect(Vector && Matrix && Line && Plane && $V && $M && $L && $P).toBeTruthy()
    expect(Vector.create).toBe($V)
    expect(Line.create).toBe($L)
    expect(Matrix.create).toBe($M)
    expect(Plane.create).toBe($P)

});
it(`By default, Sylvester.precision is set to 1e-6`, () => {
    expect(Sylvester.precision).toBe(1e-6)
});
const v = Vector.create([6, 2, 9]);
describe(`Two geometric vectors →x, →y can be added, such that →x + →y = →z is another geometric vector.`, () => {
    const v1 = Vector.create([60, 20, 90]);
    it(`Class methods: create: Creates and returns new Vector instance from the array elements.
    Instance methods: dimensions: Returns the number of elements the receiver has – that is, the dimensionality of the vector space it inhabits.
    Instance variables: elements – an array containing the vector’s elements`, () => {
            expect(v.dimensions()).toEqual({
                cols: 3,
                rows: 1
            })
            expect(v.elements).toEqual([6, 2, 9])
        });
    it(`add(vector) 0.1.0
If the receiver and vector have the same number of elements, returns a Vector formed by adding them together. Otherwise, returns null.`, () => {

            expect(v.add(v1)).toEqual({ "elements": [66, 22, 99] })
        });
});
describe(`multiplication by a scalar λ →x, λ ∈ R is also a geometric vector`, () => {

    it(`multiply(k) 0.1.0
    Returns the vector obtained by multiplying all the elements of the receiver by the scalar quantity k. Aliased as x(k).`, () => {
            const k = 10
            expect(v.multiply(k)).toEqual({ "elements": [60, 20, 90] })
        });
});
describe(`Matrix Addition and Multiplication`, () => {
    const M = $M([
        [8, 3, 9],
        [2, 0, 7],
        [1, 9, 3]
    ]);
    const M1 = $M([
        [80, 3, 9],
        [2, 0, 7],
        [1, 9, 30]
    ]);
    const M2 = $M([
        [80, 3, 9, 0],
        [2, 0, 7, 0],
        [1, 9, 30, 0]
    ]);
    describe(`The sum of two matrices A ∈ Rm×n , B ∈ Rm×n is defined as the element- wise sum`, () => {
        it(`Matrix.create(elements) 0.1.0
Creates and returns a new Matrix instance from the array elements. elements should be a nested array: the top level array is the rows, and each row is an array of elements.
Instance variables: elements – a nested array containing the matrix’s elements `, () => {
                expect(M.elements).toEqual([[8, 3, 9], [2, 0, 7], [1, 9, 3]])
            });
        it(`add(matrix) 0.1.0
Returns the matrix sum of the receiver and matrix. Thus, A.add(B) is equivalent to A + B. Returns null if the matrices are different sizes.`, () => {
                expect(M.add(M1).elements).toEqual([[88, 6, 18], [4, 0, 14], [2, 18, 33]])
                expect(M.add(M2)).toBeNull()
            });
    })
});