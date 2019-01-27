const math = require('mathjs')
const isEqual = require('../../lib/expression/isEqual.js')
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