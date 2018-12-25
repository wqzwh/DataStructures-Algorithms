/**
 *
 * 归并排序
 * 1、分割数组达到最细粒度
 * 2、然后再进行排序并合并数组
 *
 * 先分割后合并
 *
 */

// 合并排序的数组方法
// shift直接运行，每次对比数组头位就行
const merge = (left, right) => {
  if (!left || !right) return
  let ret = [] // 返回排序好的数组
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      ret.push(left.shift())
    } else {
      ret.push(right.shift())
    }
  }
  ret = ret.concat(left).concat(right)
  return ret
}

// 分割数组到最细粒度
// slice直接分割，就不用循环生成数组
const splitArray = (arr, n) => {
  if (n === 1) return arr
  const mid = Math.floor(n / 2) // 从中间开始分割
  const leftArr = []
  const rightArr = []
  // for (let i = 0; i < mid; i++) {
  //   leftArr.push(arr[i])
  // }

  // for (let j = mid; j < n; j++) {
  //   rightArr.push(arr[j])
  // }
  leftArr.slice(0, mid)
  rightArr.slice(mid)
  return merge(splitArray(leftArr, mid), splitArray(rightArr, n - mid))
}

const mergeSort = (arr, n) => {
  return splitArray(arr, n)
}

module.exports = mergeSort
