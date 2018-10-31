
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