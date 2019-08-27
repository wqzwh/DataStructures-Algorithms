/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0
  const temp = []
  for (let i = 0; i < s.length;) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i])
    } else {
      temp.shift()
      continue
    }
    res = Math.max(res, temp.length)
    i++
  }
  return res
}
