/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 *
 * ["flower","flow","flight"]  'fl'
 *
 * 1、如果字符串数组为空，我们就直接返回一个空字符串。
 * 2、如果字符串数组只有一项，如["aa"]，那么就直接返回该字符串即可。
 * 3、如果字符串数组有多项，我们可以先取得第一项，然后再依次将第一项字符串的每个字符与后面每一个字符串的相应位置的字符进行比较；
 *   如果有不同，就不再进行后续判断，而是直接返回结果即可；
 *   如果在这一轮迭代中相应位置的字符相同，则记录下来。
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  if (strs.length === 1) return strs[0]

  const fStr = strs[0]
  let res = ''
  for (let i = 0; i < fStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (fStr[i] !== strs[j][i]) {
        return res
      }
    }
    res += fStr[i]
  }
  return res
}
