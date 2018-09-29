describe(`https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/`, () => {
    it(`Basic Syntax with Multiple Parameters`, () => {
        // (param1, param2, paramN) => expression

        // ES5
        var multiplyES5 = function (x, y) {
            return x * y;
        };

        // ES6
        const multiplyES6 = (x, y) => { return x * y };
        expect(multiplyES6).toEqual(expect.any(Function))
    });
    it(`Parentheses are optional when only one parameter is present`, () => {
        //ES5
        var phraseSplitterEs5 = function phraseSplitter(phrase) {
            return phrase.split(' ');
        };

        //ES6
        const phraseSplitterEs6 = phrase => phrase.split(" ");

        expect(phraseSplitterEs6("ES6 Awesomeness")).toEqual(['ES6', 'Awesomeness']);
    });
    it(`Parentheses are required when no parameters are present.`, () => {
        //ES5
        var docLogEs5 = function docLog() {
            console.log(document);
        };

        //ES6
        var docLogEs6 = () => { return (document); };
        expect(docLogEs6().location.href).toEqual("about:blank");
    });
    it(`return an object literal expression. The only caveat is that the body needs to be wrapped in parentheses, in order to distinguish between a block and an object (both of which use curly brackets).`, () => {
        var setNameIdsEs5 = function setNameIds(id, name) {
            return {
                id: id,
                name: name
            };
        };

        // ES6
        var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

        expect(setNameIdsEs6(4, "Kyle")).toEqual({
            id: 4,
            name: 'Kyle'
        });
    });
    it(`An arrow function is more concise and easier to read`, () => {
        const smartPhones = [
            { name: 'iphone', price: 649 },
            { name: 'Galaxy S6', price: 576 },
            { name: 'Galaxy Note 5', price: 489 }
        ];
        const prices = smartPhones.map(smartPhone => smartPhone.price);
        expect(prices).toEqual([649, 576, 489]); // 
    });
    it(`Arrow functions should similarly simplify callback-laden NodeJS code.`, () => {
        expect(new Promise(resolve => { }).then(() => () => { }).then(() => new Promise(resolve => { }))).toEqual(expect.any(Promise))
    });
});