module.exports = _ => expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
    toBelongTo(received, arr) {
        const pass = arr.includes(received)
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to belong to Array ${arr}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to belong to Array ${arr}`,
                pass: false,
            };
        }
    },
})