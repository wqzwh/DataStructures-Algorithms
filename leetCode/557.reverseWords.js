/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(' ')
  const res = arr.map(item => {
    return item
      .split('')
      .reverse()
      .join('')
  })
  return res.join(' ')
}
