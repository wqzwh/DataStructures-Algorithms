/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */
/**
 * @param {string} s
 * @return {number}
 *
 */
var countBinarySubstrings = function(s) {
  let cur = 0 // 记录当前数字出现的连续次数
  let prev = 0 // 记录之前数字出现的连续次数
  let res = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cur += 1
    } else {
      prev = cur
      cur = 0
    }
    if (prev >= cur) {
      res += 1
    }
  }
  return res
}
