const _ = require('lodash')
it(`A higher order function is a function that takes another function as a parameter.`, () => {
    const uppercaseNames = ['milu', 'rantanplan'].map(name => name.toUpperCase())
    expect(uppercaseNames).toEqual(['MILU', 'RANTANPLAN'])
    const filteredNames = ['milu', 'rantanplan'].filter(name => name.length === 4)
    expect(filteredNames).toEqual(['milu'])
    let sumOfLengths = 0
    for (let name of ['milu', 'rantanplan']) {
        sumOfLengths += name.length
    }
    expect(sumOfLengths)
        .toBe(['milu', 'rantanplan'].reduce((accumulator, item) => item.length + accumulator, 0))
        .toBe(['milu', 'rantanplan'].map(item => item.length).reduce((acc, item) => acc + item))
        .toBe(14)
    expect(['milu', 'rantanplan'].reduce((accumulator, item) => {
        accumulator.totalLength += item.length
        accumulator.arr.push(accumulator.totalLength)
        return accumulator
    }, {
            totalLength: 0,
            arr: [0]
        }).arr).toEqual([0, 4, 14])
    const items = ['functional', 'programming', 'rules']

    const process = item => item.length

    let hash = {}
    for (let item of items) {
        hash[item] = process(item)
    }
    expect(hash)
        .toEqual(['functional', 'programming', 'rules'].reduce((acc, item) => ({
            ...acc,
            [item]: item.length
        }), {}))
        .toEqual({ functional: 10, programming: 11, rules: 5 })
});
describe('foo', () => {
    // beforeAll(async () => {
    //     await page.goto(PATH, { waitUntil: 'load' })
    // })
    // test(`The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.   `, async () => {
    //     const foo = await page.evaluate(() => {
    //         return URL
    //     })
    //     expect(foo.createObjectURL).toBeDefined()
    //     expect(_ => foo.createObjectURL('../../img/mathjs.png')).toThrow()
    //     // expect(URL.createObjectURL).toBeInstanceOf(Function)
    // });
})

it(`Tip: Get the unique values of an array in JavaScript.`, () => {
    const arr = ['Dan', 'Sarah', 'Sophie', 'Sarah']
    const uniqueArray = arr => [...new Set(arr)]
    const uniqueArray2 = arr => Array.from(new Set(arr))
    const seen = new Set()
    const uniqueArray3 = arr => arr.filter(x => {
        if (seen.has(x)) {
            return false;
        }
        seen.add(x)
        return true
    })
    expect(uniqueArray(arr))
        .toEqual(uniqueArray2(arr))
        .toEqual(uniqueArray3(arr))
        .toEqual(['Dan', 'Sarah', 'Sophie'])
});
it(`Use the || operator to set a default value. Remember 0 is a falsy value. So the default value will kick in when it gets to 0.`, () => {
    const generator = function* gen() {
        var i = 3
        while (true) {
            yield i--
        }
    }
    const generator1 = generator()
    for (let time = 3; time >= 0; --time) {
        expect(time).toBe(generator1.next().value)
        if (time === 0) {
            expect(time).toBeFalsy()
        }
    }
});
it(`4 ways to combine strings in JavaScript 🤩`, () => {
    const h = 'hello', s = '🤩'
    expect(h + ' ' + s)
        .toBe('hello 🤩')
        .toBe(`${h} ${s}`)
        .toBe(h.concat(' ').concat(s))
        .toBe([h, s].join(' '))
});
it(`2 ways to repeat strings in JavaScript 🎉`, () => {
    expect('🎉'.repeat(3)).toBe(Array(3).fill('🎉').join('')).toBe('🎉🎉🎉')
});
it(`Why can’t programmers tell the difference between Halloween & Christmas?`, () => {
    expect(parseInt(31, 8)).toBe(parseInt(25, 10)).toBe(25)
});
describe(`5 Tips to Write Better Conditionals in JavaScript`, () => {

    it('1. Use Array.includes for Multiple Criteria', () => {
        const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
        expect(redFruits.includes('cherry')).toBeTruthy()
    });
    it('2. Less Nesting, Return Early', () => {

        function test(fruit, quantity) {
            const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

            // /_ return early when invalid conditions found _/
            if (!fruit) throw new Error('No fruit!'); // condition 1: throw error early
            if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

            // console.log('red');

            // condition 3: must be big quantity
            if (quantity > 10) {
                return ('big quantity');
            }
        }
        expect(test).toThrow()
        expect(test('rice')).toBeUndefined()
        expect(test('apple', 11)).toBe('big quantity')
    })
    it(`3. Use Default Function Parameters and Destructuring`, () => {
        // Include lodash library, you will get _
        function test(fruit) {
            return (_.get(fruit, 'name', 'unknown')); // get property name, if not available, assign default value 'unknown'
        }

        //test results
        expect(test()).toBe(test({})).toBe('unknown')
        expect(test({ name: 'apple', color: 'red' })).toBe('apple')
    });
    it(`4. Favor Map / Object Literal than Switch Statement`, () => {
        const fruits = [
            { name: 'apple', color: 'red' },
            { name: 'strawberry', color: 'red' },
            { name: 'banana', color: 'yellow' },
            { name: 'pineapple', color: 'yellow' },
            { name: 'grape', color: 'purple' },
            { name: 'plum', color: 'purple' }
        ];

        function test(color) {
            // use Array filter to find fruits in color

            return fruits.filter(f => f.color == color);
        }
        expect(test('purple')).toEqual([{ "color": "purple", "name": "grape" }, { "color": "purple", "name": "plum" }]).toHaveLength(2)
    });
    it(`5. Use Array.every & Array.some for All / Partial Criteria`, () => {
        const fruits = [
            { name: 'apple', color: 'red' },
            { name: 'banana', color: 'yellow' },
            { name: 'grape', color: 'purple' }
        ];

        function test() {
            // condition: if any fruit is red
            const isAnyRed = fruits.some(f => f.color == 'red');

            return (isAnyRed); // true
        }
        expect(test(fruits)).toBeTruthy()
    });
});