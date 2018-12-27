/**
 *
 * 快速排序
 * https://segmentfault.com/a/1190000004410119
 * 填坑法
 *
 */

// 将arr[l...r]该区间的数组进行排序，返回的是递归排序数组的左边界
const _partition = (arr, l, r) => {
  const pivot = arr[l]
  let start = l
  let end = r

  while (start < end) {
    // arr[end] >= pivot 主要是找到小于或等于基准值的值然后做一次数据交换
    while (arr[end] >= pivot && start < end) end--
    arr[start] = arr[end]
    // arr[end] < pivot 主要是找到比基准值大的值然后做一次数据交换
    while (arr[start] < pivot && start < end) start++
    arr[end] = arr[start]
  }
  arr[start] = pivot
  return start
}

// 通过_partition返回的边界再次对数组剩余未排序的部分递归排序
const _quickSort = (arr, l, r) => {
  if (l >= r) return
  const p = _partition(arr, l, r)
  _quickSort(arr, l, p)
  _quickSort(arr, p + 1, r)
  return arr
}

const quickSort = (arr, n) => {
  return _quickSort(arr, 0, n - 1)
}

module.exports = quickSort
