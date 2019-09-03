/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (!matrix.length) return 0

  const res = [] // 记录交集后的结果
  const reg = /1{2,}/g

  matrix = matrix.map(item => {
    const str = item.join('') // 将二维数组变成字符串
    let r = reg.exec(str)
    const rs = [] // 存放临时结果

    while (r) {
      rs.push([r.index, r.index + r[0].length - 1])
      r = reg.exec(str)
    }

    return rs
  })

  // 对于新生成的结果进行两行进行对比，取交集
  const maxRect = (matrix, res, n = 1) => {
    const top = matrix.pop() // 取出二维数组顶部第一个元素
    const next = matrix.pop() // 取出二维数组顶部第二个元素

    let tt // 代表top数组的临时变量，存放起始和截止点的数组
    let nn // 代表next数组的临时变量，存放起始和截止点的数组
    let start // 记录交叉起始索引
    let end // 记录交叉的结束索引

    let width = 1 // 记录交集的最小宽度
    let maxWidth = 1 // 记录最大的宽度

    n++

    for (let i = 0; i < top.length; i++) {
      tt = top[i]
      for (let j = 0; j < next.length; j++) {
        nn = next[j]
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        if (width >= maxWidth) {
          maxWidth = width
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
        }
      }
    }
    // 如果没有交叉点的情况
    if (start === undefined || end === undefined) {
      if (n < 3) {
        return false
      } else {
        width = top[0][1] - top[0][0] + 1
        if (width > 1) {
          res.push((n - 1) * width)
        }
      }
    } else {
      // 找到交叉点继续下一行
      if (matrix.length > 0) {
        matrix.push([[start, end]])
        maxRect(matrix, res, n++)
      } else {
        // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
        res.push(n * (end - start + 1))
      }
    }
  }

  while (matrix.length > 1) {
    maxRect([].concat(matrix), res)
    matrix.pop()
  }

  // 存最大值
  let max = 0

  let item = res.pop()
  while (item) {
    if (item > max) {
      max = item
    }
    item = res.pop()
  }

  return max > 0 ? max : 0
}
