const _ = require('lodash')
it(`Using an inline function that modifies the matched characters`,()=>{
    function styleHyphenFormat(propertyName) {
        function upperToHyphenLower(match, offset, string) {
            return (offset > 0 ? '-' : '') + match.toLowerCase();
        }
        return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
    }
    expect(styleHyphenFormat('borderTop')).toBe('border-top')
    expect(styleHyphenFormat('borderTop: Fifteen')).toBe('border-top: -fifteen')
    expect(styleHyphenFormat('BorderTop: Fifteen')).toBe('border-top: -fifteen')
});
it(`The Set object lets you store unique values of any type, whether primitive values or object references.`, () => {
    const set1 = new Set([1, 2, 3, 4, 5]);

    expect(set1.has(1)).toBeTruthy()
    // expected output: true

    expect(set1.has(5)).toBeTruthy()
    // expected output: true

    expect(set1.has(6)).not.toBeTruthy()
    var mySet = new Set();

    mySet.add(1); // Set [ 1 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add('some text'); // Set [ 1, 5, 'some text' ]
    expect(mySet).toEqual(new Set([1, 5, "some text"]))
    var o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.add({ a: 1, b: 2 }); // o is referencing a different object so this is okay

    expect(mySet.has(1)).toBeTruthy() // true
    expect(mySet.has(3)).toBe(false); // false, 3 has not been added to the set
    expect(mySet.has(5)).toBe(true);              // true
    expect(mySet.has(Math.sqrt(25))).toBeTruthy();  // true
    expect(mySet.has('Some Text'.toLowerCase())).toBeTruthy(); // true
    expect(mySet.has(o)).toBe(true); // true

    expect(mySet.size).toBe(5); // 5

    mySet.delete(5); // removes 5 from the set
    expect(mySet.has(5)).toBe(false);    // false, 5 has been removed

    expect(mySet.size).toBe(4); // 4, we just removed one value
    expect(mySet).toEqual(new Set([1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 },])).not.toEqual(new Set(['some text', 1, { a: 1, b: 2 }, { a: 1, b: 2 },]))
});
it(`Relation with Array objects`, () => {
    var myArray = ['value1', 'value2', 'value3'];

    // Use the regular Set constructor to transform an Array into a Set
    var mySet = new Set(myArray);

    expect(mySet.has('value1')).toBeTruthy() // returns true

    // Use the spread operator to transform a set into an Array.
    expect([...mySet]).toEqual(['value1', 'value2', 'value3'])
});
it(`Set Relation with Strings`, () => {
    const text = 'India';

    var mySet = new Set(text);
    expect(mySet).toEqual(new Set(['I', 'n', 'd', 'i', 'a']))
    expect(mySet.size).toBe(5)
});
it(`Remove duplicate elements from the array`, () => {
    const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

    expect(([...new Set(numbers)])).toEqual([2, 3, 4, 5, 6, 7, 32])
});
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