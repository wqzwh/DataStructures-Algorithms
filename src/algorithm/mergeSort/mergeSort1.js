/**
 *
 * 归并排序
 * @param {*} arr
 * @param {*} l
 * @param {*} r
 */
const insertSort = require('../insertSort')

// 递归使用归并排序，对arr[l...mid] [mid + 1...r]的范围进行排序
const merge = (arr, l, mid, r) => {
  const aux = [r - l + 1]
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  const i = l
  const j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

// 递归使用归并排序，对arr[l...r]的范围进行排序
const splitArray = (arr, l, r) => {
  // if (l >= r) return
  if (r - l <= 15) {
    insertSort(arr, l, r)
    return
  }

  const mid = Math.floor(l + (r - l) / 2) // 计算中间分割
  splitArray(arr, l, mid)
  splitArray(arr, mid + 1, r)
  if (arr[mid] > arr[mid + 1]) {
    merge(arr, l, mid, r)
  }
}

const mergeSort = (arr, n) => {
  return splitArray(arr, 0, n - 1)
}

module.exports = mergeSort
