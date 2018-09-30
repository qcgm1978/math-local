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
    expect(trancingSudoku(obj.arr)).toEqual({
        arr: [[1]],
        ind: 0
    });
});
test(`checking if it is allowed to be there`, () => {
    const arr = trancingSudoku([['']]);
})
