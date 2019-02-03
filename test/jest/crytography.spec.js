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
                let newCode = item === ' ' ? ' ' : String.fromCharCode(code <= (65 + 26 + shift) ? code : (code - 26))//A's code is 65
                return acc + newCode
            }, '')
        }
        expect(encode('D')).toBe('A')
        expect(decode('A')).toBe('D')
        expect(encode('E')).toBe('B')
        expect(decode('B')).toBe('E')
        expect(encode('Philipp Dick')).toBe('Mefifmm Af`h')
        expect(decode('Mefifmm Af`h', 5)).toBe('RPQTQXX FQKS')
        expect(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW')
        expect(encode('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD')
    });
});
describe(`In cryptography, a substitution cipher is a method of encrypting by which units of plaintext are replaced with ciphertext, according to a fixed system; the "units" may be single letters (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth. The receiver deciphers the text by performing the inverse substitution.`, () => {
    it(`Substitution of single letters separately—simple substitution—can be demonstrated by writing out the alphabet in some order to represent the substitution`, () => {
        const message = 'flee at once. we are discovered!'
        const substituteCipher = (proclaimed, encode = true) => {
            const PlaintextAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            const CiphertextAlphabet = 'ZEBRASCDFGHIJKLMNOPQTUVWXY'
            const [a, b] = encode ? [PlaintextAlphabet, CiphertextAlphabet] : [CiphertextAlphabet, PlaintextAlphabet]
            return proclaimed.toUpperCase().split('').reduce((acc, item) => {
                let code = b.includes(item) ? b.charAt(a.indexOf(item), 1) : item
                return acc + code
            }, '')
        }
        expect(substituteCipher(message)).toBe('SIAA ZQ LKBA. VA ZOA RFPBLUAOAR!')
        expect(substituteCipher('SIAA ZQ LKBA. VA ZOA RFPBLUAOAR!', false)).toBe(message.toUpperCase())
    })
    it(`In lists and catalogues for salespeople, a very simple encryption is sometimes used to replace numeric digits by letters.`, () => {
        const substituteCipher = (proclaimed, encode = true) => {
            const PlaintextAlphabet = '1234567890'
            const CiphertextAlphabet = 'MAKEPROFIT'
            const [a, b] = encode ? [PlaintextAlphabet, CiphertextAlphabet] : [CiphertextAlphabet, PlaintextAlphabet]
            return proclaimed.toUpperCase().split('').reduce((acc, item) => {
                let code = a.includes(item) ? b.charAt(a.indexOf(item), 1) : item
                return acc + code
            }, '')
        }
        expect(substituteCipher('MAT', false)).toBe('120')
    });
});