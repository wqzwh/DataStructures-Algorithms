/**
 *
 * 希尔排序
 * 插入排序的一种优化方案
 *
 */

const shellSort = (arr, n) => {
  let temp
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (var i = gap; i < n; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

module.exports = shellSort
