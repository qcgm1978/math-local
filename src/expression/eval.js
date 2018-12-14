const math = require('mathjs')
const unicodeMath = require('unicode-math')
const evalTex = (str, scope) => {
    return str.replace(/mathbb|{|}/g,'').split(/\s+/).map(item => {
        const unicode = unicodeMath[`\\${item}`];
        if (/\w+/.test(item) && unicode) {
            return String.fromCodePoint(unicode.codePoint)
        } else {
            return item
        }
    }).join(' ')
}
exports.evalTex = evalTex
