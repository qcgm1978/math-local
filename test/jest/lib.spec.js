const _ = require('lodash')
it(`chunk`, () => {
    let arr = _.chunk([1, 2, 3])
    expect(arr).toEqual([[1], [2], [3]])
    arr = _.chunk([1, 2, 3], 2)
    expect(arr).toEqual([[1, 2], [3]])
});