/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

function combination(arr) {
  const res = []
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      res.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }

  arr.splice(0, 2, res)
  if (arr.length > 1) {
    combination(arr)
  } else {
    return res
  }

  return arr[0]
}

var letterCombinations = function(digits) {
  digits = String(digits)
  if (digits.length < 1) return []
  const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  if (digits.length < 2) return map[digits].split('')

  const arr = digits.split('')

  const newArr = []
  arr.map(item => {
    if (map[item]) {
      newArr.push(map[item])
    }
  })

  return combination(newArr)
}
