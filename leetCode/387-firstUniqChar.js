/**
 *
 * 387. 字符串中的第一个唯一字符
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const frequency = new Array(26)
  for (let i = 0; i < s.length; i++) {
    if (!frequency[s.charCodeAt(i) - 'a'.charCodeAt()]) { frequency[s.charCodeAt(i) - 'a'.charCodeAt()] = 0 }
    frequency[s.charCodeAt(i) - 'a'.charCodeAt()]++
  }
  for (let i = 0; i < s.length; i++) {
    if (frequency[s.charCodeAt(i) - 'a'.charCodeAt()] === 1) {
      return i
      break
    }
  }
  return -1
}
