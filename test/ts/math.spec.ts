import * as math from 'mathjs'
describe(`https://en.wikipedia.org/wiki/Black-body_radiation`, () => {
    it(`{\displaystyle B_{\nu }(T)={\frac {2h\nu ^{3}}{c^{2}}}{\frac {1}{e^{\frac {h\nu }{kT}}-1}},}`, () => {
        expect(math.eval(`B_(T)=2*h*v ^3/c^2*1/(e^(h*v/(k*T))-1)`)).toEqual(expect.any(Function))
    });
});