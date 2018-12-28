/**
 *
 * 快速排序
 * 交换法
 * https://segmentfault.com/a/1190000004410119
 *
 */
const Helper = require('../../helper/index')

// 1，每次取数组的第一项作为基准值，从第二项开始遍历
// 2，start代表开始时第二项的下标索引，start开始向后移动，当发现对应的值大于等于参考值先停下，继续执行3
// 3，end代表数组结尾的索引，开始向后移动，当发现对应的值小于基准值，则与start对应的值进行交换，然后继续执行2，直到start在end后面一位，将基准值与end交换，执行4
// 4，返回此时的end值，然后将数组以end值作为分界线继续递归排序arr[l...end - 1]和arr[end + 1...r]
const _partition = (arr, l, r) => {
  const pivot = l
  let end = r
  let start = l + 1
  while (start <= end) {
    while (arr[start] <= arr[pivot] && start <= end) start++
    while (arr[end] > arr[pivot] && start <= end) end--
    if (arr[start] >= arr[pivot] && arr[end] < arr[pivot] && start < end) {
      Helper.swap(arr, end, start)
    }
  }

  Helper.swap(arr, end, pivot)
  return end
}

// 通过_partition返回的边界再次对数组剩余未排序的部分递归排序
const _quickSort = (arr, l, r) => {
  if (l > r) return
  const p = _partition(arr, l, r)
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
  return arr
}

const quickSort3 = (arr, n) => {
  return _quickSort(arr, 0, n - 1)
}

module.exports = quickSort3
