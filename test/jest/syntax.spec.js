/* eslint-disable no-undef */

const _ = require("lodash");
const generateNewMatches = require("./matchers");
const { getRandomInt } = require("../for-jest/algorithms");
const { getAnimal } = require("./pattern");
generateNewMatches();
it(`Private Fields`, () => {});
it(`90625 is the only 5-digit automorphic number not beginning with a 0 - its square ends in the same digits`, () => {
  expect((90625 ** 2).toString()).toMatch(/90625$/);
  arr = [];
  for (let i = 1e4; i < 1e5; i++) {
    if ((i ** 2).toString().endsWith(i.toString())) {
      arr.push(i);
    }
  }
  expect(arr).toEqual([90625]);
});
it(``, () => {
  const dog = getAnimal("dog");
  const nullClass = getAnimal(null);
  expect(dog.sound).toBeInstanceOf(Function);
  expect(nullClass.sound).toBeInstanceOf(Function);
  expect(dog.sound()).toBe("bark");
  expect(nullClass.sound()).toBeNull();
});
it(`considered to be a true constant, therefore it has to be written in SCREAMING_CASE. Otherwise, camelCase is used to denote mutable and immutable variables that store temporaries, aliases, calculations, and the output of a runtime variability`, () => {
  // Immutable Variables
  const obj = {
    userInput: "42",
    hasDevto: /dev\.to/g.test("dev.to"),

    // True Constants
    WEBSITE_NAME: "dev.to",
    TAU: 2 * Math.PI
  };
  for (let p in obj) {
    if (/[a-zA-Z_]+/.test(p)) {
      expect(typeof obj[p]).toMatch(/number|string|boolean/);
    }
  }
});
it(`In most cases, numbers, strings, and individual objects are named with the most appropriate singular noun.Arrays and other collection-like data structures (such as Map and Set) are named with the most appropriate plural noun in camelCase`, () => {
  const obj = {
    usernameInputField: "username-field",
    username: "usernameInputField.value",
    hypotenuse: Math.sqrt(3 ** 2 + 4 ** 2),
    profileData: {
      name: "Presto",
      type: "Dog"
    },
    dogs: ["Presto", "Lucky", "Sparkles"],

    // Here, we can use collective nouns
    // for better readability.
    herdOfCows: ["Bessie", "Bertha", "Boris"],
    // The names for booleans are usually in the form of a yes-or-no question, as if we are personally asking the boolean variable itself about its state
    isDog: true,
    hasJavaScriptEnabled: false,
    canSupportSafari: false,
    isAdmin: false,
    hasPremium: true,

    // Functions or methods that return booleans
    // are also named in a similar fashion
    isOdd(num) {
      return Boolean(num % 2);
    },
    // Functions are written with the intent to associate them with actions. This is why they are usually named as a combination of two parts: a transitive verb and a direct object
    getSum(a, b) {
      return a + b;
    },
    findBanana(str) {
      return str.indexOf("banana");
    },
    getAverage(numbers) {
      const total = numbers.reduce((prev, curr) => prev + curr);
      return total / numbers.length;
    },
    User: class {},
    Admin: class {},
    Player: class {}
  };
  for (let p in obj) {
    if (p.endsWith("s")) {
      expect(obj[p].length).toBeGreaterThan(1);
    }
    if (/^is|has|can/.test(p)) {
      if (obj[p] instanceof Function) {
        expect(typeof obj[p]()).toBe("boolean");
      } else {
        expect(typeof obj[p]).toBe("boolean");
      }
    }
    if (/^get|find/.test(p)) {
      expect(obj[p]).toBeInstanceOf(Function);
    }
    if (/^[A-Z]/.test(p)) {
      expect(obj[p].constructor).toBeInstanceOf(Function);
    }
  }
});
it(`Returns a random integer between min (inclusive) and max (inclusive)`, () => {
  expect(getRandomInt(5, 10))
    .toBeGreaterThanOrEqual(5)
    .toBeLessThan(11);
});
it(`The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.`, () => {
  var a, b, rest;
  [a, b] = [10, 20];
  expect(a).toBe(10); // 10
  expect(b).toBe(20); // 20

  [a, b, ...rest] = [10, 20, 30, 40, 50];
  expect(a).toBe(10); // 10
  expect(b).toBe(20); // 20
  expect(rest).toEqual([30, 40, 50]); // [30, 40, 50]

  ({ a, b } = { a: 10, b: 20 });
  expect(a).toBe(10); // 10
  expect(b).toBe(20); // 20

  // Stage 4(finished) proposal
  ({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
  expect(a).toBe(10); // 10
  expect(b).toBe(20); // 20
  expect(rest).toEqual({ c: 30, d: 40 });
  // //swap variables
  let c = 1,
    d = 0;
  [c, d] = [d, c];
  expect(c).toBe(0);
  expect(d).toBe(1);
});
it(`With Template Literals, it's super easy to create multi-line strings. Previously, we had to use "\n" which was messy and difficult to read`, () => {
  const str = "abc\ndef";
  const str1 = `abc
def`;
  expect(str).toBe(str1);
});
it(`Formatting dates with JavaScript`, () => {
  let date = new Date(
    new Date(1555861886106).toLocaleString("en-US", {
      timeZone: "Asia/Shanghai"
    })
  );
  const month = date.getMonth();
  expect(month).toBe(3);
  expect(month >= 10 ? month.toString() : `0${month}`).toBe("03");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  expect(months[month]).toBe("April");
  expect(date.getFullYear()).toBe(2019); // Year
  const dayOfMonth = date.getDate();
  expect(dayOfMonth).toBe(21);
  function getOrdinal(number) {
    const lastDigitOfNumber = number % 10;
    switch (lastDigitOfNumber) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  expect(dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth.toString()).toBe("21");
  expect(`${dayOfMonth}${getOrdinal(dayOfMonth)}`).toBe("21st");
  const day = date.getDay();
  expect(day).toBe(0);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  expect(weekDays[day]).toBe("Sunday");
  expect(date.getHours()).toBe(23);
  expect(date.getMinutes()).toBe(51);
  expect(date.getSeconds()).toBe(26);
  const formatDetailTime = ({ date, is12Hour = true }) => {
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let str = "";
    time[0] = time[0] ? time[0] : 12;
    if (is12Hour) {
      str = time[0] > 12 ? "pm" : "am";
    }
    const hour = is12Hour ? time[0] % 12 : time[0];
    time[0] = hour ? hour : 12;
    time = time.map(item => (item < 10 ? `0${item}` : item.toString()));
    return `${time[0]}:${time[1]}:${time[2]}${str}`;
  };
  expect(formatDetailTime({ date })).toBe("11:51:26pm");
  date.setHours(0);
  expect(formatDetailTime({ date })).toBe("12:51:26am");
  date.setMinutes(1);
  expect(formatDetailTime({ date })).toBe("12:01:26am");
});
it(` <derived class> or <base class>`, () => {
  class Dog {
    constructor() {}
    bark() {
      return "bark";
    }
  }

  class EnclosureSpace {
    constructor({ surface }) {
      this.surface = surface;
    }
    getSurface() {
      return this.surface;
    }
  }
  class House extends EnclosureSpace {
    constructor(config) {
      super(config);
    }
    dogBark() {
      return new Dog().bark();
    }
  }
  const house = new House({ surface: 4 });
  expect(house.dogBark()).toBe("bark");
  expect(house.getSurface()).toBe(4);
});
it("How to Capitalize a Word in JavaScript", () => {
  let name = "samantha";
  let result = name.toUpperCase();
  expect(result).toBe("SAMANTHA");
  const arr = [null, undefined, ["hi"], 45];
  arr.map(item => {
    expect(_ => item.toUpperCase()).toThrow();
  });
  name = "samantha";
  result = name.charAt(0);
  expect(result.toUpperCase()).toBe("S");
  const CapitalizeWordFirstLetter = word =>
    word.charAt(0).toUpperCase() + word.slice(1);
  expect(CapitalizeWordFirstLetter(name)).toBe("Samantha");
});
it("check and see if two separate data structures have the same content", () => {
  const arraysAreEqual = (array1, array2) => {
    return array1.every((el, index) => el === array2[index]);
  };
  expect(arraysAreEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
});
it("Every odd integer is the difference of 2 squares", () => {
  const num = Math.trunc(Math.random() * 10);
  expect(num)
    .toBeGreaterThanOrEqual(0)
    .toBeLessThan(10);
  const odd = 2 * num + 1;
  const squaresDifference = (num + 1) ** 2 - num ** 2;
  expect(odd).toBe(squaresDifference);
  expect(Math.trunc("80.1")).toBe(80); // 80
  expect(parseInt("80.1")).toBe(80); // 80
  expect(parseInt(80.1)).toBe(80); // 80
  expect(Math.trunc("hello")).toBeNaN(); // NaN
  expect(Math.trunc(NaN)).toBeNaN(); // NaN
  expect(Math.trunc(undefined)).toBeNaN(); // NaN
  expect(Math.trunc()).toBeNaN(); // NaN
  // parseInt. When you pass in an argument that's not a string, in our case a number, it will first convert the value to a string using the toString() abstract operation.
  const number = 1000000000000000000000.5;
  const result = parseInt(number);
  expect(result).toBe(1);
  const str = number.toString();
  expect(str).toBe("1e+21");
  expect(parseInt(str))
    .toBe(parseInt(number))
    .toBe(1);
  // Bitwise Operator Solutions
  const truncNum = Math.trunc(number);
  expect(truncNum)
    .toBe(1e21)
    .toBe(1000000000000000000000);
  expect(~~80.6)
    .toBe(80.6 | 0)
    .toBe(80);
  expect(~~number)
    .toBe(number | 0)
    .toBe(-559939584)
    .not.toBe(truncNum);
});
it('Use "Math.trunc()" to truncate a floating point number and return its integer part. This function doesn\'t do any rounding, it simply removes all the digits following the decimal. Now you have a whole number, yay 🎊', () => {
  const number = 80.6;
  expect(Math.trunc(number)).toBe(80);
});
it("extension methods are, they allow us to tack on methods to existing classes without extending the class directly", () => {
  function Dog(name) {
    this.name = name;
  }

  var dog1 = new Dog("Gabby");
  expect(dog1 + "").toBe("[object Object]");
  Dog.prototype.toString = function dogToString() {
    return "" + this.name;
  };

  expect(dog1 + "")
    .toBe(dog1.toString())
    .toBe("Gabby");
});
it("macros allow us to modify the language directly by adding rules to the abstract syntax tree", () => {
  var de = false; // true when debugging
  function bug(msg) {
    return true;
  }
  expect(de && bug("hello world")).toBeFalsy();
});
it("automatic properties are just shorthand for getters and setters in object oriented programming languages.", () => {
  let handler = {};
  let p = handler;
  p.a = 1;
  p.b = undefined;
  expect(p.a).toBe(1);
  expect(p.b).toBeUndefined();
  handler = {
    get: function(obj, prop) {
      return prop in obj ? obj[prop] : 42;
    }
  };

  p = new Proxy({}, handler);
  p.a = 1;
  p.b = undefined;
  expect(p.a).toBe(1);
  expect(p.b).toBeUndefined();
  expect("c" in p).toBeFalsy();
  expect(p.c).toBe(42);
});
it("The Math.log() function returns the natural logarithm (base e) of a number", () => {
  expect(Math.E.toFixed(2)).toBe("2.72");
  const num = Math.log(Math.E);
  const num2 = (2 * Math.log(Math.E)) / 2;
  expect(num).toBe(1);
  expect(num2).toBe(1);
  const num1 = Math.log(0.1220095068291097);
  expect(num1.toFixed(1)).toBe("-2.1");
});
it("The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. ", () => {
  var float32 = new Float32Array(2);
  float32[0] = 42;
  expect(float32[0]).toBe(42); // 42
  expect(float32.length).toBe(2); // 2
  expect(float32.BYTES_PER_ELEMENT).toBe(4);
});
it("The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range", () => {
  const num = Math.random();
  expect(num)
    .toBeGreaterThanOrEqual(0)
    .toBeLessThan(1);
  expect(num.toString().length).toBeWithinRange(15, 21);
});
it("If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number ", () => {
  const arr = new Array(5);
  expect(arr).toEqual([undefined, undefined, undefined, undefined, undefined]);
});

it("\\w any character that is A-Z, a-z, or 0-9", () => {
  let hideWords = function(string) {
    return string.replace(/\w/g, "#");
  };

  let exampleSentence = "A ~ a ~ 0 ~";

  expect(hideWords(exampleSentence)).toBe("# ~ # ~ # ~");
});
it("prefer the || operator", () => {
  let isHappyHour = "🍺";
  // Logical Operator
  let isHappyHour1 = isHappyHour || "🍵"; // '🍺'
  // Ternary
  let isHappyHour2 = isHappyHour ? isHappyHour : "🍵"; // '🍺'
  // If/Else
  if (isHappyHour) {
    isHappyHour3 = isHappyHour;
  } else {
    isHappyHour3 = "🍵";
  }
  expect(isHappyHour)
    .toBe(isHappyHour1)
    .toBe(isHappyHour2)
    .toBe(isHappyHour3)
    .toBe("🍺");
});
it("通过函数的call/apply方法间接调用, call/apply方法的第一个参数是调用上下文，在函数体内，通过this获得对它的引用", () => {
  var q = "window";

  function func() {
    expect(this.q).toStringAndMatch(/undefined|obj/);
  }

  var obj = {
    q: "obj"
  };

  func.apply(); //window
  func.call(); //window

  func.apply(obj); //obj
  func.call(obj);
});
it("作为构造函数调用，构造函数试图初始化这个新创建的对象，并将这个对象作为其调用上下文，this 指向这个新创建的对象", () => {
  var q = "window";

  function Func() {
    this.q = "instance prop";
    expect(this.q).toBe("instance prop");
  }

  var obj = new Func(); //Func

  expect(this.q).toBeUndefined();
});
it("作为对象的方法调用，该对象即为调用上下文，this指向该对象", () => {
  var q = "window";
  var func = function() {
    expect(this.q).toMatch(/obj|anotherObj/);
  };

  var obj = {
    q: "obj",
    func: func,
    anotherObj: {
      q: "anotherObj",
      func: func
    }
  };

  obj.func(); //obj
  obj.anotherObj.func();
});
it("作为函数调用，this指向全局对象", () => {
  var q = "window";
  var func = function() {
    expect(this.q).toBe();
    expect(this.process.title).toMatch(/node|\/usr\/local\/bin\/node/);
  };

  func();
});
describe("There are 2 types of array cloning: shallow & deep", () => {
  it("Shallow copies only cover the 1st level of the array and the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone", () => {
    const numbers = [1, [2], [3, [4]], 5];
    // Using JavaScript
    const jsonCopy = JSON.parse(JSON.stringify(numbers));
    // Using Lodash
    const lodashCopy = _.cloneDeep(numbers);
    expect(jsonCopy)
      .toEqual(lodashCopy)
      .toEqual(numbers);
  });
  it("what you copied over is not the array itself but the pointer to the memory space the array occupies. ", () => {
    let array = [1, 2, 3];
    let arrayCopy = array; // create copy
    expect(arrayCopy).toEqual([1, 2, 3]);
    // Change 1st element of the array
    arrayCopy[0] = "👻";
    expect(arrayCopy)
      .toEqual(array)
      .toEqual(["👻", 2, 3]);
  });
  it("So the solution is to copy over the value NOT the pointer", () => {
    let array = [1, 2, 3];
    let arrayCopy = [...array]; // create TRUE copy
    expect(arrayCopy).toEqual(array); // [1,2,3];
    // Change 1st element of the array
    arrayCopy[0] = "👻";
    expect(arrayCopy)
      .not.toEqual(array)
      .toEqual(["👻", 2, 3]);
  });
  it("spread ... to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work", () => {
    let nestedArray = [1, [2], 3];
    let arrayCopy = [...nestedArray];
    // Make some changes
    arrayCopy[0] = "👻"; // change shallow element
    arrayCopy[1][0] = "💩"; // change nested element
    expect(arrayCopy)
      .not.toEqual(nestedArray)
      .toEqual(["👻", ["💩"], 3]);
    // ❌ Nested array got affected
    expect(nestedArray).toEqual([1, ["💩"], 3]);
  });
  it("So the solution is to do a deep clone", () => {
    let nestedArray = [1, [2], 3];
    let arrayCopy = JSON.parse(JSON.stringify(nestedArray));
    // Make some changes
    arrayCopy[0] = "👻"; // change shallow element
    arrayCopy[1][0] = "💩"; // change nested element
    expect(arrayCopy).toEqual(["👻", ["💩"], 3]);
    // ✅ Nested array NOT affected
    expect(nestedArray).toEqual([1, [2], 3]);
  });
});
it("Difference between Spread vs Concat", () => {
  function combineArray(array1, array2) {
    return [...array1, ...array2];
  }
  function combineArrayByConcat(array1, array2) {
    return [].concat(array1, array2);
  }
  const isArray = [1, 2, 3];
  const notArray = "random";
  expect(combineArray(isArray, notArray)).toEqual([
    1,
    2,
    3,
    "r",
    "a",
    "n",
    "d",
    "o",
    "m"
  ]);
  expect(combineArrayByConcat(isArray, notArray)).toEqual([1, 2, 3, "random"]);
});
it("push, it manipulates or changes the existing array. It does NOT create a new array", () => {
  const cars = ["🚗", "🚙"];
  const trucks = ["🚚", "🚛"];
  const combined = cars.push(...trucks);
  expect(combined).toBe(4);
  // ☝when you use push, it returns the LENGTH of the combined array
  expect(cars).toEqual(["🚗", "🚙", "🚚", "🚛"]);
  expect(trucks).toEqual(["🚚", "🚛"]);
  cars.push(trucks);
  expect(cars).toEqual(["🚗", "🚙", "🚚", "🚛", ["🚚", "🚛"]]);
  cars.push(...trucks);
  expect(cars).toEqual(["🚗", "🚙", "🚚", "🚛", ["🚚", "🚛"], "🚚", "🚛"]);
  // ✅ cars: [ '🚗', '🚙', '🚚', '🚛' ]
});
describe("The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.", () => {
  it("callback hell", done => {
    const a = 0,
      getData = callback => callback(a),
      getMoreData = (foo, callback) => setTimeout(_ => callback(++foo), 10);
    getData(a => {
      getMoreData(a, b => {
        getMoreData(b, c => {
          getMoreData(c, d => {
            getMoreData(d, e => {
              expect(e).toBe(4);
              done();
            });
          });
        });
      });
    });
  });
  it("Promise", done => {
    const a = 0,
      getData = foo => new Promise(resolve => resolve(foo)),
      getMoreData = foo =>
        new Promise(resolve => setTimeout(_ => resolve(++foo), 10));
    getData(a)
      .then(a => getMoreData(a))
      .then(b => getMoreData(b))
      .then(c => getMoreData(c))
      .then(d => getMoreData(d))
      .then(e => {
        expect(e).toBe(4);
        done();
      });
  });
  it("Promise without param", done => {
    const getData = _ => new Promise(resolve => resolve(a)),
      getMoreData = foo =>
        new Promise(resolve => setTimeout(_ => resolve(++foo), 10));
    let a = 0;
    getData()
      .then(getMoreData)
      .then(getMoreData)
      .then(getMoreData)
      .then(getMoreData)
      .then(e => {
        expect(e).toBe(4);
        done();
      });
  });
  it("The async function keyword can be used to define async functions inside expressions.", done => {
    const getData = _ => new Promise(resolve => resolve(a)),
      getMoreData = foo =>
        new Promise(resolve => setTimeout(_ => resolve(++foo), 10));
    let a = 0;
    (async () => {
      const a = await getData();
      const b = await getMoreData(a);
      const c = await getMoreData(b);
      const d = await getMoreData(c);
      const e = await getMoreData(d);
      expect(e).toBe(4);
      done();
    })();
  });
  it(`In real situations, the promise may take some time before it rejects. So await will wait, and then throw an error.

We can catch that error using try..catch, the same way as a regular throw:`, done => {
    const getData = _ => new Promise(resolve => resolve(0)),
      getMoreData = foo =>
        new Promise(resolve => setTimeout(_ => resolve(++foo), 10));
    (async () => {
      try {
        const a = await getData();
        const b = await getMoreData(a);
        const c = await getMoreData(b);
        const d = await getMoreData(c);
        const e = await getMoreData(d);
        expect(e).toBe(4);
        throw new Error(0);
      } catch (err) {
        expect(err.message).toBe("0");
      }
    })();
    (async () => {
      try {
        const a = await getData();
        const b = await getMoreData(a);
        expect(b).toBe(1);
        throw new Error(0);
      } catch (err) {
        expect(err.message).toBe("0");
        done();
      }
    })();
  });
});
describe("pointer", () => {
  it("Within a function, one may change the contents of a passed object via that reference, but you cannot modify the reference that the caller had because your reference is only a copy", () => {
    var foo = { bar: 1 };

    function tryToMungeReference(obj) {
      obj = { bar: 2 }; // won't change caller's object
    }

    function mungeContents(obj) {
      obj.bar = 2; // changes _contents_ of caller's object
    }

    tryToMungeReference(foo);
    expect(foo.bar).toBe(1); // true - foo still references original object

    mungeContents(foo);
    expect(foo.bar).toBe(2); // true - object referenced by foo has been modified
    let obj = { bar: { a: 1 } };
    mungeContents(obj);
    expect(obj.bar).toBe(2);
    const changeObj = obj => {
      obj.a = { a: "a" };
    };
    let a = { a: { a: 1 } };
    changeObj(a);
    expect(a).toEqual({ a: { a: "a" } });
  });
  it(" objects are pointers.", () => {
    const object2 = { a: 2 };
    //this will make object1 point to the memory location that object2 is pointing at
    const object1 = object2;
    expect(object1).not.toBe({ ...object2 });
    //this will make object2 point to the memory location that object1 is pointing at
    const myfunc = object2 => object2;
    const myfunc2 = object2 => ({ ...object2 });
    expect(myfunc(object1))
      .toEqual(myfunc2(object1))
      .not.toBe(myfunc2(object1))
      .toBe(object1)
      .toBe(object2);
  });
  // it(`spec compliant implementation of the JSON Pointer`, () => {
  //   let object = { one: { two: 3 } };
  //   object1 = { one: { two: 3 } };
  //   expect(jsPointer.get(object, "/one/two")).toBe(3);
  //   expect(object)
  //     .toEqual({ one: { two: 3 } })
  //     .not.toBe({ one: { two: 3 } })
  //     .not.toBe(object1);
  //   object = { one: { two: [3] } };
  //   expect(jsPointer.get(object, "/one/two/0")).toBe(3);
  //   object = { one: { two: [{ three: 4 }] } };
  //   expect(jsPointer.get(object, "/one/two/0/three")).toBe(4);
  // });
  it("    Since the only thing you're using the pointer for is to dereference it to access another variable, you can just encapsulate it in a property.", () => {
    function createPointer(read, write) {
      return {
        get value() {
          return read();
        },
        set value(v) {
          return write(v);
        }
      };
    }
    // To create a pointer, pass the accessor methods which read and write the variable being pointed to.

    var i;
    var p = createPointer(
      function() {
        return i;
      },
      function(v) {
        i = v;
      }
    );
    // p is now a "pointer" to i
    // To dereference a pointer, access its value.In other words, where in C you would write * p here you write p.value.

    i = "initial";
    expect(p.value).toBe("initial"); // alerts "initial"
    p.value = "update";
    expect(i).toBe("update"); // alerts "update"
    p.value += "2";
    expect(i).toBe("update2"); // alerts "update2"
    // You can create multiple pointers to the same variable.

    var q = createPointer(
      function() {
        return i;
      },
      function(v) {
        i = v;
      }
    );
    // q is also a "pointer" to i
    expect(q.value).toBe("update2"); // alerts "update2"
    q.value = "written from q";
    expect(p.value).toBe("written from q"); // alerts "written from q"
    // You can change what a pointer points to by simply overwriting the pointer variable with another pointer.

    var j = "other";
    q = createPointer(
      function() {
        return j;
      },
      function(v) {
        j = v;
      }
    );
    // q is now a "pointer" to j
    // You can swap two variables through pointers.

    function swap(x, y) {
      var t = x.value;
      x.value = y.value;
      y.value = t;
    }
    // Let's swap the values of i and j by using their pointers.

    swap(p, q);
    expect(i).toBe("other"); // alerts "other"
    expect(j).toBe("written from q"); // alerts
    // You can create pointers to local variables.

    function example() {
      var myVar = "myVar as local variable from example";
      var r = createPointer(
        function() {
          return myVar;
        },
        function(v) {
          myVar = v;
        }
      );
      swap(p, r);
      expect(i).toBe("myVar as local variable from example"); // alerts "myVar as local variable from example"
      expect(myVar).toBe("other"); // alerts "other"
    }
    example();
    // Through the magic of closures, this gives you a way to simulate malloc.

    function malloc() {
      var i;
      return createPointer(
        function() {
          return i;
        },
        function(v) {
          i = v;
        }
      );
    }
    p = malloc(); // p points to a variable we just allocated from the heap
    p.value = 2; // write a 2 into it
    // Your magic trick works too:

    var flowers = new Misdirection(
      createPointer(
        function() {
          return flowers;
        },
        function(v) {
          flowers = v;
        }
      )
    );
    flowers.abracadabra();
    expect(flowers + "").toBe("Eh... what's up doc?");

    function Misdirection(flowers) {
      this.abracadabra = function() {
        flowers.value = new Rabbit();
      };
    }

    function Rabbit() {
      this.toString = function() {
        return "Eh... what's up doc?";
      };
    }
  });
});
test("numeric ranges", () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  // expect({ apples: 6, bananas: 3 }).toEqual({
  //     apples: expect.toBeWithinRange(1, 10),
  //     bananas: expect.not.toBeWithinRange(11, 20),
  // });
});
it("The add() method appends a new element with a specified value to the end of a Set object.", () => {
  const set1 = new Set();

  set1.add(42);
  set1.add(42);
  set1.add(13);

  for (let item of set1) {
    expect(item).toBelongTo([42, 13]);
  }
  var mySet = new Set();

  mySet.add(1);
  mySet.add(5).add("some text"); // chainable
  expect(mySet).toEqual(new Set([1, 5, "some text"]));
});
it("A higher order function is a function that takes another function as a parameter.", () => {
  const uppercaseNames = ["milu", "rantanplan"].map(name => name.toUpperCase());
  expect(uppercaseNames).toEqual(["MILU", "RANTANPLAN"]);
  const filteredNames = ["milu", "rantanplan"].filter(
    name => name.length === 4
  );
  expect(filteredNames).toEqual(["milu"]);
  let sumOfLengths = 0;
  for (let name of ["milu", "rantanplan"]) {
    sumOfLengths += name.length;
  }
  expect(sumOfLengths)
    .toBe(
      ["milu", "rantanplan"].reduce(
        (accumulator, item) => item.length + accumulator,
        0
      )
    )
    .toBe(
      ["milu", "rantanplan"]
        .map(item => item.length)
        .reduce((acc, item) => acc + item)
    )
    .toBe(14);
  expect(
    ["milu", "rantanplan"].reduce(
      (accumulator, item) => {
        accumulator.totalLength += item.length;
        accumulator.arr.push(accumulator.totalLength);
        return accumulator;
      },
      {
        totalLength: 0,
        arr: [0]
      }
    ).arr
  ).toEqual([0, 4, 14]);
  const items = ["functional", "programming", "rules"];

  const process = item => item.length;

  let hash = {};
  for (let item of items) {
    hash[item] = process(item);
  }
  expect(hash)
    .toEqual(
      ["functional", "programming", "rules"].reduce(
        (acc, item) => ({
          ...acc,
          [item]: item.length
        }),
        {}
      )
    )
    .toEqual({ functional: 10, programming: 11, rules: 5 });
});
describe("foo", () => {
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
});

it("Tip: Get the unique values of an array in JavaScript.", () => {
  const arr = ["Dan", "Sarah", "Sophie", "Sarah"];
  const uniqueArray = arr => [...new Set(arr)];
  const uniqueArray2 = arr => Array.from(new Set(arr));
  const seen = new Set();
  const uniqueArray3 = arr =>
    arr.filter(x => {
      if (seen.has(x)) {
        return false;
      }
      seen.add(x);
      return true;
    });
  const uniqueArray4 = arr =>
    Array.from(
      arr.reduce((seen, x) => (seen.has(x) ? seen : seen.add(x)), new Set())
    );
  const uniqueArray5 = arr =>
    Array.from(
      arr.reduce((seen, x) => (seen.includes(x) ? seen : seen.concat([x])), [])
    );
  expect(uniqueArray(arr))
    .toEqual(uniqueArray2(arr))
    .toEqual(uniqueArray3(arr))
    .toEqual(uniqueArray4(arr))
    .toEqual(uniqueArray5(arr))
    .toEqual(["Dan", "Sarah", "Sophie"]);
});
it("Use the || operator to set a default value. Remember 0 is a falsy value. So the default value will kick in when it gets to 0.", () => {
  const generator = function* gen() {
    var i = 3;
    while (true) {
      yield i--;
    }
  };
  const generator1 = generator();
  for (let time = 3; time >= 0; --time) {
    expect(time).toBe(generator1.next().value);
    if (time === 0) {
      expect(time).toBeFalsy();
    }
  }
});
it("4 ways to combine strings in JavaScript 🤩", () => {
  const h = "hello",
    s = "🤩";
  expect(h + " " + s)
    .toBe("hello 🤩")
    .toBe(`${h} ${s}`)
    .toBe(h.concat(" ").concat(s))
    .toBe([h, s].join(" "));
});
it("2 ways to repeat strings in JavaScript 🎉", () => {
  expect("🎉".repeat(3))
    .toBe(
      Array(3)
        .fill("🎉")
        .join("")
    )
    .toBe("🎉🎉🎉");
});
it("Why can’t programmers tell the difference between Halloween & Christmas?", () => {
  expect(parseInt(31, 8))
    .toBe(parseInt(25, 10))
    .toBe(25);
});
describe("5 Tips to Write Better Conditionals in JavaScript", () => {
  it("1. Use Array.includes for Multiple Criteria", () => {
    const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
    expect(redFruits.includes("cherry")).toBeTruthy();
  });
  it("2. Less Nesting, Return Early", () => {
    function test(fruit, quantity) {
      const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

      // /_ return early when invalid conditions found _/
      if (!fruit) throw new Error("No fruit!"); // condition 1: throw error early
      if (!redFruits.includes(fruit)) return; // condition 2: stop when fruit is not red

      // console.log('red');

      // condition 3: must be big quantity
      if (quantity > 10) {
        return "big quantity";
      }
    }
    expect(test).toThrow();
    expect(test("rice")).toBeUndefined();
    expect(test("apple", 11)).toBe("big quantity");
  });
  it("3. Use Default Function Parameters and Destructuring", () => {
    // Include lodash library, you will get _
    function test(fruit) {
      return _.get(fruit, "name", "unknown"); // get property name, if not available, assign default value 'unknown'
    }

    //test results
    expect(test())
      .toBe(test({}))
      .toBe("unknown");
    expect(test({ name: "apple", color: "red" })).toBe("apple");
  });
  it("4. Favor Map / Object Literal than Switch Statement", () => {
    const fruits = [
      { name: "apple", color: "red" },
      { name: "strawberry", color: "red" },
      { name: "banana", color: "yellow" },
      { name: "pineapple", color: "yellow" },
      { name: "grape", color: "purple" },
      { name: "plum", color: "purple" }
    ];

    function test(color) {
      // use Array filter to find fruits in color

      return fruits.filter(f => f.color == color);
    }
    expect(test("purple"))
      .toEqual([
        { color: "purple", name: "grape" },
        { color: "purple", name: "plum" }
      ])
      .toHaveLength(2);
  });
  it("5. Use Array.every & Array.some for All / Partial Criteria", () => {
    const fruits = [
      { name: "apple", color: "red" },
      { name: "banana", color: "yellow" },
      { name: "grape", color: "purple" }
    ];

    function test() {
      // condition: if any fruit is red
      const isAnyRed = fruits.some(f => f.color == "red");

      return isAnyRed; // true
    }
    expect(test(fruits)).toBeTruthy();
  });
});
