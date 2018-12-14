const math = require('../../dist/math')
const unicodeMath = require('unicode-math')
const unicons = require("unicons");
it(`v \approx \mathbb { E } [ z | s ]`, () => {
    expect(math.isEqual).toBeInstanceOf(Function)
    expect(math.evalTex).toBeInstanceOf(Function)
    expect(unicodeMath['\\neg'].codePoint).toBe(172)
    expect(unicodeMath['\\approx'].codePoint).toBe(8776)
    expect(String.fromCodePoint(172)).toBe("¬")
    expect(String.fromCodePoint(8776)).toBe("≈");
    const str = 'v \approx \mathbb { E } [ z | s ]';
    expect(math.evalTex(str.replace('\\', '\\\\'))).toBe(1);
});
