// http://sylvester.jcoglan.com/docs.html
const { Vector, Matrix, Line, Plane, Sylvester } = require('Sylvester')
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