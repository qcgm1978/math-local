const _ = require('lodash')
const Mock = require('mockjs')
it(`Mock.js is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.`, () => {
    const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    })
    expect(data.list.length).toBeLessThan(11).toBeGreaterThan(0)
});
it(`chunk`, () => {
    let arr = _.chunk([1, 2, 3])
    expect(arr).toEqual([[1], [2], [3]])
    arr = _.chunk([1, 2, 3], 2)
    expect(arr).toEqual([[1, 2], [3]])
});