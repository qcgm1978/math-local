const math = require('mathjs')
const isEqual = (str, scope = {
    precision:false
}) => {
    if (str.includes('=')) {
        const arr = str.split('=').map(item => item.replace(/(math\.\w+)/g, match => math[match.split('.')[1]]))
        const left = math.eval(arr[0], scope)
        const right = math.eval(arr[1], scope)
        const precision = scope.precision
        const result = precision ? ((left).toFixed(precision) === right.toFixed(precision)) : (left === right)
        result.left = left
        result.right = right
        return result
    } else {
        return false
    }
}
exports.isEqual = isEqual
