/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 非重叠矩形中的随机点
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
// var hasGroupsSizeX = function(deck) {
//   let result = true
//   if (deck.length <= 1) return false
//   deck.sort((a, b) => a - b)

//   let min = Number.MAX_SAFE_INTEGER
//   const dst = [] // 存放分组的数组

//   for (let i = 0, len = deck.length; i < len; i++) {
//     const temp = []
//     temp.push(deck[i])

//     for (let j = i + 1; j < len; j++) {
//       if (deck[i] === deck[j]) {
//         temp.push(deck[j])

//         if (j === len - 1) {
//           if (min > temp.length && temp.length !== 1) {
//             min = temp.length
//           }
//           dst.push([].concat(temp))
//           i = j - 1
//           break
//         }
//       } else {
//         if (min > temp.length && temp.length !== 1) {
//           min = temp.length
//         }
//         dst.push([].concat(temp))
//         temp.length = 0
//         i = j - 1
//         break
//       }
//     }
//   }

//   for (const v of dst) {
//     if (v.length % min !== 0) {
//       result = false
//       return result
//     }
//   }
//   return result
// }

var hasGroupsSizeX = function(deck) {
  // 存储每张卡牌的总数
  // 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
  const group = []
  const tmp = {}
  deck.forEach(item => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  for (const v of Object.values(tmp)) {
    group.push(v)
  }
  // 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
  // 求两个数的最大公约数
  const gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    const a = group.shift()
    const b = group.shift()
    const v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}
