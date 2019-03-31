module.exports = _ =>
  expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false
        };
      }
    },
    toMatchEvery(received, match) {
      const pass = received.every(item => match(item));
      if (pass) {
        return {
          message: () => `expected ${received} satisfies ${match}`,
          pass: true
        };
      } else {
        return {
          message: () => `${received} not satisfies ${match}`,
          pass: false
        };
      }
    },
    toBelongTo(received, arr) {
      const pass = arr.includes(received);
      if (pass) {
        return {
          message: () => `expected ${received} not to belong to Array ${arr}`,
          pass: true
        };
      } else {
        return {
          message: () => `expected ${received} to belong to Array ${arr}`,
          pass: false
        };
      }
    },
    toStringAndMatch(received, reg) {
      const pass = reg.test(String(received));
      if (pass) {
        return {
          message: () =>
            `expected ${received} match ${reg} after string conversion`,
          pass: true
        };
      } else {
        return {
          message: () => `${received} not match ${reg} after string conversion`,
          pass: false
        };
      }
    }
  });
