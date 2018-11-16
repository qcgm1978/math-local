const performance = require('perf_hooks').performance;
const util = require('util');
const debug = util.debuglog('performance');
const math = require('../../dist/math.js');

it(`the run-times of function1 as O(
n^2), function2 as O(n) and function3 as O(1).`, () => {
        foo1(10)
        function foo1(n) {

            performance.mark('Beginning sanity check');
            let a = 0
            for (i = 0; i < n; i += 1) {
                for (j = 0; j < n; j += 1) {
                    a += 1
                }
            }
            performance.mark('Ending sanity checks');
            performance.measure('Inputs validation', 'Beginning sanity check', 'Ending sanity checks');
            const measurements = performance.getEntriesByType('measure');
            measurements.forEach(measurement => {
                // I'm going to make the logs colour-coded, in this case I'm using Green
                debug('\x1b[32m%s\x1b[0m', measurement.name + ' ' + measurement.duration);
            })
            return a

        }

        function foo2(n) {
            a = 0
            for (i = 0; i < n; i += 1) {
                a += n
            }
            return a
        }

        function foo3(n) {
            return n * n
        }
    });
it(`The RSA algorithm involves four steps: key generation, key distribution, encryption and decryption.`, () => {
    const m = 2, e = 3, d = 4
    const scope = { m, e, d }
    const product = math.eval('(m^e)^d', scope)
    expect(product).toBe(4096).toBe(Math.pow(Math.pow(m, e), d))
    const minus = product - m
    expect(minus).toBe(4094)
    const n = 2
    expect(minus % n).toBe(0)
    const publicKey = { n, e }, message = m
    const exponent = math.pow(message, publicKey.e)
    expect(exponent).toBe(8)
    const result = (product - message) / publicKey.n
    expect(result).toBe(2047)
    const decry = result * publicKey.n + message
    expect(decry).toBe(product).toBe(4096)
    expect(d).toBe(math.log(decry, exponent)).toBe(4)
    const expon1 = Math.log(4096), expon2 = Math.log(8)
    expect(Math.round(Math.pow(Math.E, expon1))).toBe(4096)
    expect(Math.round(Math.pow(Math.E, expon2))).toBe(8)
    const str = 'e^x/e^y', str1 = 'e^(x-y)', scopeExpon = { x: e, y: d, e: Math.E }
    expect(math.eval(str, scopeExpon)).toBe(math.eval(str1, scopeExpon))

});
const obj = {
    "arr": [
        [
            "5",
            "3",
            "",
            "",
            "2",
            "",
            "9",
            "",
            ""
        ],
        [
            "",
            "",
            "9",
            "",
            "7",
            "5",
            "",
            "",
            "6"
        ],
        [
            "6",
            "",
            "",
            "",
            "",
            "",
            "",
            "4",
            ""
        ],
        [
            "",
            "1",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "3",
            "8",
            "",
            "",
            "5",
            "",
            "",
            "2",
            "7"
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "8",
            ""
        ],
        [
            "",
            "9",
            "",
            "",
            "",
            "",
            "",
            "",
            "8"
        ],
        [
            "4",
            "",
            "",
            "1",
            "9",
            "",
            "5",
            "",
            ""
        ],
        [
            "",
            "",
            "1",
            "",
            "4",
            "",
            "",
            "7",
            ""
        ]
    ],
    "ind": 8
}
const obj1 = { ...obj };
const GetSudokuSolution = class {
    constructor(table) {

    }
    // todo metrics should be applied
    getRegions(table) {
        const regions = table.reduce((accumulator, item, index) => {
            if (index % 3) {
                accumulator.push([])
            }
        }, [])
    }
    //             checking if it is allowed to be there
    isAllowed(num) {

    }
    // advances to the next cell, and places a "1" in that cell.
    advanceNext() {

    }
}
const trancingSudoku = (table) => {
    const sequentailArr = Array.from({ length: 9 }, (v, i) => i + 1 + '');
    return table.reduce((accumulator, item, index) => {
        const accumulatorInner = item.reduce((accumulatorInner, itemInner, indexInner) => {
            if (itemInner === '') {
                const validNumsRow = item.map(num => !item.includs(num));
                const valColumn = table.map(item => item[indexInner] !== '');
                const validNumsColumn = valColumn.filter(num => !sequentailArr.includs(num));
                const regionsRow = Math.floor(indexInner / 3);
                const regionCol = Math.floor(index / 3);
                const valRegion = table.slice(regionsRow * 3)
                const val = String(validNums[0]);
            }
            accumulatorInner.push(itemInner);
            return accumulatorInner;
        }, [])
        accumulator.arr[index] = accumulatorInner;
        return accumulator;
    }, { arr: [], ind: 0 })
}
test(`Secretary problem`, () => {
    const getStart = (num) => {
        const actual = num * probability
        const ceil = math.ceil(actual)
        return ceil === actual ? ceil + 1 : ceil
    }
    const probability = (1 / math.E).toFixed(3)
    expect(probability * 100 + '%').toBe('36.8%')
    let n = 3
    let start = getStart(n)
    expect(start).toBe(2)
    n = 4
    expect(getStart(n)).toBe(2)
    n = 5
    expect(getStart(n)).toBe(2)
    n = 6
    expect(getStart(n)).toBe(3)
    n = 10
    expect(getStart(n)).toBe(4)
    n = 100
    expect(getStart(n)).toBe(37)
    n = 1000
    expect(getStart(n)).toBe(369)
})
test('solve a puzzle by placing the digit "1" in the first cell ', () => {
    // expect(trancingSudoku(obj.arr)).toEqual({
    //     arr: [[1]],
    //     ind: 0
    // });
});
test(`checking if it is allowed to be there`, () => {
    // const arr = trancingSudoku([['']]);
})
const setEquality = (x) => {
    const arr = Array.from({ length: 9 }, (item, i) => i + 1);
    const operators = ['+', '-', ''];
    const arr1 = arr.reduce((accumulator, item, index) => {
        const accum = operators.reduce((accum, it) => {
            accum.push(it + item);
            return accum;
        }, []);
        accumulator.push(accum)
    }, [])
    return arr1;
}
test(`在1 2 3 4 5 6 7 8 9=x等号左边的空格中填入+ -或者不填，使得等式成立。若不填则将连续若干个数看作一个数（如1 2 + 3 + 4 ... + 9中的1 2看作12）`, () => {
    // expect(setEquality()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
});
test(`https://www.maa.org/sites/default/files/pdf/cmj_ftp/CMJ/November%202010/5%20Capsules/1%20Richmond/10-027_Richmond.pdf`, () => {
    var px = '5x^3+2x^2+7';
    expect(math.eval(px.replace(/x/g, '*1'))).toBe(14);
    expect(math.eval(px.replace(/x/g, '*14'))).toBe(14119);
    expect((14119).toString(14)).toBe('5207');
    expect(math.rationalize(px, {}, true).coefficients.reverse().join('')).toEqual('5207');
    var px = '5x^3+2x^2+7';
    const p1 = math.eval(px.replace(/x/g, '*1'));
    const pa = math.eval(px.replace(/x/g, `*${p1}`));
    expect((pa).toString(p1)).toBe(math.rationalize(px, {}, true).coefficients.reverse().join('')).toBe('5207')
});
describe(`BOSS Zhuo`, () => {
    it(`no the max prime number`, () => {
        const getPrimeNum = (num) => {
            let arr = [];
            for (let m = 2; m <= num; m++) {
                let isPrime = true;
                for (let i = 2; i <= math.floor(math.sqrt(m)); i++) {
                    if (!(m % i)) {
                        isPrime = false;
                        break;
                    }
                }
                isPrime && arr.push(m);
            }
            return arr;
        }
        let primeNumArr = getPrimeNum(10);
        expect(primeNumArr).toEqual([2, 3, 5, 7]);
        const product = primeNumArr.reduce((a, b) => a * b, 1);
        expect(product).toBe(210);
        const maxPrimeNum = primeNumArr.pop()
        const largerNum = product + 1;
        expect(largerNum).toBeGreaterThan(maxPrimeNum)
    });
});
const convertDecimal = (arr, base = 10) => {
    return arr instanceof Array ? arr.reduce((a, b, index) => {
        return a - '' + b * math.pow(base, (arr.length - index - 1))
    }, 0) : +(arr).toString(base);
}
const calKnuthNotation = expression => {
    const arr = expression.split(/↑+/);
    const arrowNum = /↑+/.exec(expression)[0].length;
    let ret = 0;
    if (arrowNum === 1) {
        ret = math.pow(arr[0], arr[1])
    } else if (arrowNum === 2) {
        ret = math.pow(arr[0], calKnuthNotation(`${arr[0]}↑${arr[1]}`))
    } else if (arrowNum === 3) {

    }
    return ret;
}
describe(`Mathematical Reasoning`, () => {
    it(`The mathematical abstraction we make leads to the definition of base-b expansion.`, () => {

        const d10 = 245;
        expect(d10 + '').toBe('245');
        expect('245'.split('')).toEqual(['2', '4', '5'])
        const arr = ['2', '4', '5'];
        const sumByBase = convertDecimal(arr)
        expect(sumByBase).toBe(245);
        const d2 = (d10).toString(2);
        expect(d2).toBe("11110101");
        const arr2 = "11110101".split('')
        const sumByBaseBinary = convertDecimal(arr2, 2)
        expect(sumByBaseBinary).toBe(245);
        const d8 = (d10).toString(8);
        expect(d8).toBe("365");
        const arr8 = "365".split('')
        const sumByBaseOctal = convertDecimal(arr8, 8)
        expect(sumByBaseOctal).toBe(245)
        expect(convertDecimal(['1', '0', '2', '3'])).toBe(1023)
        expect(convertDecimal('1111111111'.split(''), 2)).toBe(1023);
        expect(convertDecimal([28, 15], 36)).toBe(1023);
        expect(calKnuthNotation('2↑↑4')).toBe(65536)

    });
    it(`triple arrow is iterated tetration (pentation)`, () => {
        // expect(calKnuthNotation('2↑↑↑3')).toBe(65536)

    });
    it(`1023 = 1111111111(2) = 1101220(3) = 1777(8) = 1023(10) = 3FF(16) = SF(36)`, () => {
        const convertNumSystems = (num, base) => {
            return parseInt(num, base)
        }
        const d10 = 1023, d2 = 1111111111, d3 = 1101220, d8 = 1777, d16 = '3FF', d36 = 'SF';
        expect(convertDecimal(1023, 2)).toBe(d2);
        expect(convertNumSystems(d2, 2))
            .toBe(convertNumSystems(d3, 3))
            .toBe(convertNumSystems(d8, 8))
            .toBe(convertNumSystems(d16, 16))
            .toBe(convertNumSystems(d36, 36))
            .toBe(d10)
    });
    it(`the harmonic series is diverging`, () => {
        const str = new Array(9).fill('').reduce((accumulator, item, index) => {
            return accumulator + ` + 1 / ${(index + 2)}`
        }, 1)
        const str1 = new Array(9).fill('').reduce((accumulator, item, index) => {
            const pow = math.log(index + 2, 2)
            return accumulator + ` + 1 / ${(pow === parseInt(pow && pow > 1) ? index : math.pow(2, math.ceil(pow)))}`
        }, 1)
        expect(str).toBe("1 + 1 / 2 + 1 / 3 + 1 / 4 + 1 / 5 + 1 / 6 + 1 / 7 + 1 / 8 + 1 / 9 + 1 / 10")
        expect(math.log10(10)).toBe(1)
        expect(math.log(8, 2)).toBe(3)
        expect(str1).toBe("1 + 1 / 2 + 1 / 4 + 1 / 4 + 1 / 8 + 1 / 8 + 1 / 8 + 1 / 8 + 1 / 16 + 1 / 16")
        expect((math.eval(str1) - 0).toFixed(2)).toBe('2.63')
        expect((math.eval(str) - 0).toFixed(2) - 0).toBe(2.93).toBeGreaterThan((math.eval(str1) - 0))

    });
    it(`1-1/2+1/3-1/4+1/5-1/6+……=?`, () => {

    });
});

describe(`A single arrow means exponentiation (iterated multiplication), more than one arrow means iterating the operation associated with one less arrow.`, () => {
    it(`single arrow is iterated multiplication (exponentiation) `, () => {
        expect(calKnuthNotation('2↑4')).toBe(16)
    });

});
it(`double arrow is iterated exponentiation (tetration) `, () => {
});