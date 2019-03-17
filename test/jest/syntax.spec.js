const _ = require("lodash");
const generateNewMatches = require("./matchers");
generateNewMatches();
const jsPointer = require("js-pointer");
it(`通过函数的call/apply方法间接调用, call/apply方法的第一个参数是调用上下文，在函数体内，通过this获得对它的引用`, () => {
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
it(`作为构造函数调用，构造函数试图初始化这个新创建的对象，并将这个对象作为其调用上下文，this 指向这个新创建的对象`, () => {
  var q = "window";

  function Func() {
    this.q = "instance prop";
    expect(this.q).toBe("instance prop");
  }

  var obj = new Func(); //Func

  expect(this.q).toBeUndefined();
});
it(`作为对象的方法调用，该对象即为调用上下文，this指向该对象`, () => {
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
it(`作为函数调用，this指向全局对象`, () => {
  var q = "window";
  var func = function() {
    expect(this.q).toBe();
    expect(this.process.title).toBe("node");
  };

  func();
});
describe(`There are 2 types of array cloning: shallow & deep`, () => {
  it(`Shallow copies only cover the 1st level of the array and the rest are referenced. If you want a true copy of nested arrays, you’ll need a deep clone`, () => {
    const numbers = [1, [2], [3, [4]], 5];
    // Using JavaScript
    const jsonCopy = JSON.parse(JSON.stringify(numbers));
    // Using Lodash
    const lodashCopy = _.cloneDeep(numbers);
    expect(jsonCopy)
      .toEqual(lodashCopy)
      .toEqual(numbers);
  });
  it(`what you copied over is not the array itself but the pointer to the memory space the array occupies. `, () => {
    let array = [1, 2, 3];
    let arrayCopy = array; // create copy
    expect(arrayCopy).toEqual([1, 2, 3]);
    // Change 1st element of the array
    arrayCopy[0] = "👻";
    expect(arrayCopy)
      .toEqual(array)
      .toEqual(["👻", 2, 3]);
  });
  it(`So the solution is to copy over the value NOT the pointer`, () => {
    let array = [1, 2, 3];
    let arrayCopy = [...array]; // create TRUE copy
    expect(arrayCopy).toEqual(array); // [1,2,3];
    // Change 1st element of the array
    arrayCopy[0] = "👻";
    expect(arrayCopy)
      .not.toEqual(array)
      .toEqual(["👻", 2, 3]);
  });
  it(`spread ... to copy an array, I'm only creating a shallow copy. If the array is nested or multi-dimensional, it won't work`, () => {
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
  it(`So the solution is to do a deep clone`, () => {
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
it(`Difference between Spread vs Concat`, () => {
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
it(`push, it manipulates or changes the existing array. It does NOT create a new array`, () => {
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
describe(`The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.`, () => {
  it(`callback hell`, done => {
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
  it(`Promise`, done => {
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
  it(`Promise without param`, done => {
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
  it(`The async function keyword can be used to define async functions inside expressions.`, done => {
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
describe(`pointer`, () => {
  it(`Within a function, one may change the contents of a passed object via that reference, but you cannot modify the reference that the caller had because your reference is only a copy`, () => {
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
  it(` objects are pointers.`, () => {
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
  it(`spec compliant implementation of the JSON Pointer`, () => {
    let object = { one: { two: 3 } };
    object1 = { one: { two: 3 } };
    expect(jsPointer.get(object, "/one/two")).toBe(3);
    expect(object)
      .toEqual({ one: { two: 3 } })
      .not.toBe({ one: { two: 3 } })
      .not.toBe(object1);
    object = { one: { two: [3] } };
    expect(jsPointer.get(object, "/one/two/0")).toBe(3);
    object = { one: { two: [{ three: 4 }] } };
    expect(jsPointer.get(object, "/one/two/0/three")).toBe(4);
  });
  it(`    Since the only thing you're using the pointer for is to dereference it to access another variable, you can just encapsulate it in a property.`, () => {
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
    var p = malloc(); // p points to a variable we just allocated from the heap
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
it(`The add() method appends a new element with a specified value to the end of a Set object.`, () => {
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
it(`A higher order function is a function that takes another function as a parameter.`, () => {
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

it(`Tip: Get the unique values of an array in JavaScript.`, () => {
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
it(`Use the || operator to set a default value. Remember 0 is a falsy value. So the default value will kick in when it gets to 0.`, () => {
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
it(`4 ways to combine strings in JavaScript 🤩`, () => {
  const h = "hello",
    s = "🤩";
  expect(h + " " + s)
    .toBe("hello 🤩")
    .toBe(`${h} ${s}`)
    .toBe(h.concat(" ").concat(s))
    .toBe([h, s].join(" "));
});
it(`2 ways to repeat strings in JavaScript 🎉`, () => {
  expect("🎉".repeat(3))
    .toBe(
      Array(3)
        .fill("🎉")
        .join("")
    )
    .toBe("🎉🎉🎉");
});
it(`Why can’t programmers tell the difference between Halloween & Christmas?`, () => {
  expect(parseInt(31, 8))
    .toBe(parseInt(25, 10))
    .toBe(25);
});
describe(`5 Tips to Write Better Conditionals in JavaScript`, () => {
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
  it(`3. Use Default Function Parameters and Destructuring`, () => {
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
  it(`4. Favor Map / Object Literal than Switch Statement`, () => {
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
  it(`5. Use Array.every & Array.some for All / Partial Criteria`, () => {
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
