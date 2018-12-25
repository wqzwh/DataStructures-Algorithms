/**
 *
 * 希尔排序
 * 插入排序的一种优化方案
 * 将一段数据按比例分成区块（gap）来排序，直至gap为1
 *
 */

const shellSort = (arr, n) => {
  let temp
  let j, i
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (i = gap; i < n; i++) {
      temp = arr[i]
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

module.exports = shellSort
