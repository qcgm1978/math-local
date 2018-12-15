const math = require('../../dist/math.js');

it(`JS doesn't have pointers.

Objects are passed around by passing a copy of a reference. The programmer cannot access any C-like "value" representing the address of an object.

Within a function, one may change the contents of a passed object via that reference, but you cannot modify the reference that the caller had because your reference is only a copy:`, () => {
        var foo = { 'bar': 1 };

        function tryToMungeReference(obj) {
            obj = { 'bar': 2 };  // won't change caller's object
        }
        tryToMungeReference(foo)
        expect(foo.bar).toBe(1)// foo still references original object
        function mungeContents(obj) {
            obj.bar = 2;       // changes _contents_ of caller's object
        }
        mungeContents(foo);
        expect(foo.bar).toBe(2)// object referenced by foo has been modified
    });
it(`The ith power of N`, () => {
    const bin = 1011, dec = 11
    const decimal = bin.toString().split('').reverse().reduce((accumulator, item, index) => {
        return accumulator + (item === '1' ? math.pow(2, index) : 0)
    }, 0)
    expect(decimal)
        .toBe(parseInt(bin, 2))
        .toBe(dec)
    let arr = [];
    //elegant
    // for (let quotient = dec, remainder = 0; quotient; arr.push(quotient % 2), quotient = parseInt(quotient / 2));
    //general
    // for (let quotient = dec; quotient;) {
    //     let remainder = 0
    //     arr.push(quotient % 2);
    //     quotient = parseInt(quotient / 2)
    // };
    //intuitive
    let quotient = dec;
    // while (quotient) {
    //     let remainder = 0
    //     arr.push(quotient % 2);
    //     quotient = parseInt(quotient / 2)
    // }
    //or more intuitive
    do {
        let remainder = 0
        arr.push(quotient % 2);
        quotient = parseInt(quotient / 2)
    } while (quotient);
    expect(arr).toEqual([1, 1, 0, 1])
    const result = +arr.reverse().join('')
    expect(+dec.toString(2))
        .toBe(result)
        .toBe(bin)
});