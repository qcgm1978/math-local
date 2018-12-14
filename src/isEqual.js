const math = require('mathjs')
const isEqual = (str, scope) => {
    if (str.includes('=')) {
        const arr = str.split('=')
        const left = math.eval(arr[0], scope)
        const right = math.eval(arr[1], scope)
        return left === right
    } else {
        return false
    }
}
exports.isEqual = isEqual
