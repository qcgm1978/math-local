const math = require('../../dist/math')
it(`Math.js contains the following constants.`, () => {
    var names = []
    for (let i in math) {
        if (math[i] instanceof Function) {
            continue
        }
        names.push(i.toString())
    }
    names.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
    expect(names).toContain('e').toContain('E')
    expect(math.e).toBe(math.E)
});
it(`Quantum mechanics and General Relativity `, () => {
    expect(math.phy.NUM).toEqual({ "ATTO": 1e-18, "AVOGADRO": 6.02214199e+23, "EXA": 1000000000000000000, "FEMTO": 1e-15, "FINE_STRUCTURE": 0.007297352533, "GIGA": 1000000000, "KILO": 1000, "MEGA": 1000000, "MICRO": 0.000001, "MILLI": 0.001, "NANO": 1e-9, "PETA": 1000000000000000, "PICO": 1e-12, "TERA": 1000000000000, "YOCTO": 1e-24, "YOTTA": 1e+24, "ZEPTO": 1e-21, "ZETTA": 1e+21 })
    const SchwarzschildRadius = '2*G/c^2'
    const scopeArea = {
        G: math.phy.CGS.GRAVITATIONAL_CONSTANT,
        c: math.phy.CGS.SPEED_OF_LIGHT
    }
    const blackSurfaceArea = math.eval(SchwarzschildRadius, scopeArea);
    expect(blackSurfaceArea).toBeLessThan(1e-27).toBeGreaterThan(1e-29)
    const HawkingBekensteinFormula = 'π*A*k*c^3/2*h*G'
    const equation = `S=${HawkingBekensteinFormula}`

    const scope = {
        π: math.pi,
        c: math.phy.CGS.SPEED_OF_LIGHT,
        A: blackSurfaceArea,
        k: math.phy.CGS.BOLTZMANN,
        h: math.phy.CGSM.PLANCKS_CONSTANT_H,
        G: math.phy.CGS.GRAVITATIONAL_CONSTANT,
    }
    expect(math.eval(HawkingBekensteinFormula, scope)).toBeLessThan(3e-45).toBeGreaterThan(3e-47)
});