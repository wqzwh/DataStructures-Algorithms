/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const res = []

  const len = ops.length
  let prev1 // 记录上一个值
  let prev2 // 记录上上一个值
  for (let i = 0; i < len; i++) {
    if (ops[i] === 'C') {
      if (res.length) res.pop()
    } else if (ops[i] === 'D') {
      prev1 = res.pop()
      res.push(prev1, prev1 * 2)
    } else if (ops[i] === '+') {
      prev1 = res.pop()
      prev2 = res.pop()
      res.push(prev2, prev1, prev1 + prev2)
    } else {
      res.push(Number(ops[i]))
    }
  }
  return res.reduce((t, n) => t + n)
}
