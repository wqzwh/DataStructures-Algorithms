/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // 边界情况，如果s和p都为空，说明处理结束了，返回true，否则返回false
  if (p.length <= 0) {
    return !s.length
  }

  // 对p进行分组
  const reg = /([a-z]\*)|([a-z]+(?=([a-z]\*)|$)|([a-z]\.*)|\.+|\*+)/g
  const _p = p.match(reg)

  let cur = 0
  const sLen = s.length
  for (let i = 0, len = _p.length; i < len; i++) {
    // 将_p中元素变成数组形式 _p将会是以下形式 例如 .* a* bcd
    const m = _p[i].split('')

    if (m.length === 1 && (m[0] === '.' || m[0] === '*')) {
      cur++
    } else {
      if (m[1] === '*') {
        if (m[0] === '.') {
          cur = sLen
          break
        } else {
          while ((s[cur] === m[0] && cur < sLen - 1) || m[cur] === '*') {
            cur++
          }
        }
      } else {
        for (let j = 0, jl = m.length; j < jl; j++) {
          if (m[j] === '.') {
            cur++
          } else {
            if (m[j] !== s[cur]) {
              return false
            } else {
              cur++
            }
          }
        }
      }
    }
  }
  return cur === sLen
}
