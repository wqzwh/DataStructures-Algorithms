/**
 *
 * 原地堆排序
 *
 */
const Helper = require('../../helper/index')
const shiftDown = (arr, n, k) => {
  while (2 * k + 1 < n) {
    let j = 2 * k + 1
    if (j + 1 < n && arr[j + 1] > arr[j]) {
      j += 1
    }
    if (arr[k] >= arr[j]) {
      break
    }
    Helper.swap(arr, k, j)
    k = j
  }
}
const heapSort = (arr, n) => {
  for (let i = Math.floor((n - 1) / 2); i >= 0; i--) {
    shiftDown(arr, n, i)
  }

  for (let i = n - 1; i > 0; i--) {
    Helper.swap(arr, 0, n)
    shiftDown(arr, i, 0)
  }

  return arr
}

module.exports = heapSort
