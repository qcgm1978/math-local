const {
  Vector,
  Matrix,
  Line,
  Plane,
  Sylvester
} = require("@kaosat-dev/sylvester");

it(`矩阵最初的目的，只是为线性方程组提供一个简写形式`, () => {
  const equationSet = ["2x-y=0", "x+y=2"];
  const getMatrixEquation = arr => {
    const X = Matrix.create([["x"], ["y"]]);
    const coefficients = arr.reduce((acc, item) => {
      let x = /(-?(\d+)?)x/.exec(item);
      let y = /(-?(\d+)?)y/.exec(item);
      const ele = [x, y].map(it => {
        if (it) {
          if (it[1] === "-") {
            return -1;
          } else if (it[1] === "") {
            return 1;
          } else {
            return +it[1];
          }
        }
      });

      return [...acc, ele];
    }, []);
    const A = Matrix.create(coefficients);
    const results = arr.map(item => [+item.split("=")[1]]);
    const b = Matrix.create(results);
    return {
      paramMatrix: X,
      coefficientMatrix: A,
      resultMatrix: b,
      presentation: "AX=b"
    };
  };
  expect(getMatrixEquation(equationSet)).toMatchObject({
    presentation: "AX=b",
    paramMatrix: { elements: [["x"], ["y"]] },
    coefficientMatrix: { elements: [[2, -1], [1, 1]] },
    resultMatrix: { elements: [[0], [2]] }
  });
});
