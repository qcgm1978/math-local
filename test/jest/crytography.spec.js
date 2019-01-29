describe(` a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. `, () => {
    it(`with a left shift of 3, D would be replaced by A, E would become B, and so on.`, () => {
        const encode = (proclaimed, shift = 3) => {
            return proclaimed.split('').reduce((acc, item) => {
                let code = item.charCodeAt(0) - shift
                let newCode = item === ' ' ? ' ' : String.fromCharCode(code >= 65 ? code : (26 + code))//A's code is 65
                return acc + newCode
            }, '')
        }
        const decode = (proclaimed, shift = 3) => {
            return proclaimed.split('').reduce((acc, item) => {
                let code = item.charCodeAt(0) + shift
                let newCode = item === ' ' ? ' ' : String.fromCharCode(code <= (65 + 26) ? code : (code - 26))//A's code is 65
                return acc + newCode
            }, '')
        }
        expect(encode('D')).toBe('A')
        expect(decode('A')).toBe('D')
        expect(encode('E')).toBe('B')
        expect(decode('B')).toBe('E')
        expect(encode('Philipp Dick')).toBe('Mefifmm Af`h')
        expect(decode('Mefifmm Af`h', 5)).toBe('Philipp Dick')
        expect(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW')
        expect(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD')
    });
});