/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 可能的二分法
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  A.sort((a, b) => a - b)

  let i = 0 // 记录偶数下标
  let j = 1 // 记录奇数下标
  const len = A.length
  const r = [] // 记录最终返回的数组

  for (let k = 0; k < len; k++) {
    if (A[k] % 2 === 1) {
      r[j] = A[k]
      j += 2
    } else {
      r[i] = A[k]
      i += 2
    }
  }

  return r
}
