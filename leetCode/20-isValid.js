/**
 *
 * 20. 有效的括号
 *
 */
const CArray = require('../src/array/index')

const isValid = (str) => {
  let array = new CArray()
  for (let i = 0; i < str.length; i++) {
    let c = str[i].charAt()
    if (c === '(' || c === '[' || c === '{') {
      array.addLast(c)
    } else {
      if (array.isEmpty()) {
        return false
      } else {
        let topChart = array.removeLast()
        if (c === ')' && topChart !== '(') return false
        if (c === ']' && topChart !== '[') return false
        if (c === '}' && topChart !== '{') return false
      }
    }
  }
  return array.isEmpty()
}
