const math = require('../../dist/math.js');
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
})