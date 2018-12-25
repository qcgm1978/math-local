const _ = require('lodash')
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