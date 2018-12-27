/**
 *
 * 快速排序
 *
 * 基于数组实现
 *
 * 取数组的第一项为基准，然后遍历数组将剩余的每个元素都与这个基准进行比较，大的放在基准的右边，小的放在基准的左边，最后合并数组
 *
 */

const _quickSort = (arr) => {
  if (arr.length <= 1) { return arr }
  const pivot = arr[0]

  const left = []
  const right = []

  for (let i = 1, l = arr.length; i < l; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return _quickSort(left).concat(pivot, quickSort(right))
}

const quickSort = (arr, n) => {
  return _quickSort(arr)
}

module.exports = quickSort
