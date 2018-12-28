/**
 *
 * 快速排序
 * 顺序遍历
 * https://segmentfault.com/a/1190000004410119
 */

const Helper = require('../../helper/index')

// 1、取数组的开始的位置为start，storeIndex，取数组的最后一项为基准值
// 2、start向右移动，当遇到arr[start] < arr[pivot]，则stroeIndex和start做交换，并且stroeIndex++
// 3、当start === pivot，将storeIndex和pivot的值交换，然后返回storeIndex，剩余数组将以storeIndex为边界分别递归执行1，2，3
const _partition = (arr, l, r) => {
  const pivot = r
  let storeIndex = l
  let start = l
  for (start = l; start < r; start++) {
    if (arr[start] < arr[pivot]) {
      Helper.swap(arr, start, storeIndex)
      storeIndex++
    }
  }
  Helper.swap(arr, storeIndex, pivot)
  return storeIndex
}

// 通过_partition返回的边界再次对数组剩余未排序的部分递归排序
const _quickSort = (arr, l, r) => {
  if (l > r) return
  const p = _partition(arr, l, r)
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
  return arr
}

const quickSort4 = (arr, n) => {
  return _quickSort(arr, 0, n - 1)
}

module.exports = quickSort4
