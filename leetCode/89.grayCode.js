/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const _fn = n => {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

    const prev = _fn(n - 1) // 计算n-1的格雷编码
    const result = [] // 收集最终格雷编码的结果
    const len = Math.pow(2, n) - 1 // 格雷编码长度，-1为了符合数组索引

    for (let i = 0, l = prev.length; i < l; i++) {
      result[i] = `0${prev[i]}`
      result[len - i] = `1${prev[i]}`
    }

    return result
  }
  const res = []

  for (const v of _fn(n)) {
    res.push(parseInt(v, 2))
  }
  return res
}
