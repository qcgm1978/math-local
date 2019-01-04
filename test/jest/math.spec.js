const math = require('../../dist/math')
it(`extend math and add physical constants`, () => {
    expect(math.more).toBeInstanceOf(Object)
    expect(math.phy).toBeInstanceOf(Object)
});
it(`Count the number of elements of a (multi)set. When a second parameter is ‘true’, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.`, () => {
    expect(math.setSize([1, 2, 2, 4])).toBe(4)
    expect(math.setSize([1, 2, 2, 4], true)).toBe(3)
    expect(math.setSize([[1, 2, 2, 4], [1, 1, 7]], true)).toBe(4)
});
it(`Function sum can compute the sum of a matrix`, () => {
    expect(math.sum([[2, 5], [4, 3], [1, 7]])).toBe(22)
});
it(`isEqual`, () => {
    // math.import({
    //     isEqual
    // })
    expect(math.isEqual).toBeInstanceOf(Function)
    expect(math.isEqual('a^2+b^2c^2')).toBeFalsy()
    expect(math.isEqual('a^2+b^2=c^2', {
        a: 3,
        b: 4,
        c: 5
    })).toBeTruthy()
    expect(math.isEqual('a^2+b^2=c^2', {
        a: 3,
        b: 4,
        c: 6
    })).toBeFalsy()
    expect(math.isEqual('A=4*math.PI*r^2', {
        r: 1,
        A: 12.57,
        precision:2
    })).toBeTruthy()
});
describe(`https://en.wikipedia.org/wiki/Black-body_radiation`, () => {
    it(`{\displaystyle B_{\nu }(T)={\frac {2h\nu ^{3}}{c^{2}}}{\frac {1}{e^{\frac {h\nu }{kT}}-1}},}`, () => {
        expect(math.eval(`B_(T)=2*h*v ^3/c^2*1/(e^(h*v/(k*T))-1)`)).toEqual(expect.any(Function))
    });
});
describe(`http://mathjs.org/docs/reference/functions/random.html`, () => {
    it(`Return a random number larger or equal to min and smaller than max using a uniform distribution.`, () => {
        expect(math.random()).toBeLessThan(1)
        expect(math.random(100)).toBeLessThan(100);    // returns a random number between 0 and 100
        expect(math.random(30, 40)).toBeLessThan(40); // returns a random number between 30 and 40
        expect(math.random([2, 3]).length).toEqual(2); // returns a 2x3 matrix with random numbers between 0 and 1
        expect(math.random([2, 3])[0].length).toEqual(3); // returns a 2x3 matrix with random numbers between 0 and 1

    });
});
it(`The probability density of the normal distribution is`, () => {
    expect(math.eval(`1/sqrt (2*pi *sigma ^2)*e^(-(x-u )^2/(2*sigma ^2))`, {
        sigma: 0.5,
        x: 1,
        u: 5
    })).toEqual(1.0104542167073798e-14)
});