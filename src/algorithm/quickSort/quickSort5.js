/**
 *
 * 快速排序
 * 三路快速排序
 * https://blog.csdn.net/qq_37664986/article/details/79428945
 */

const Helper = require('../../helper/index')

// 三路排序处理arr[l...r]数据
// 将arr[l...r]分成三个部分
//  <pivot(arr[l + 1...lt])
//  =pivot(arr[lt + 1...gt])
//  >pivot(arr[gt + 1...r])三个部分
// 递归处理<pivot >pivot部分的数组
const _quickSort = (arr, l, r) => {
  if (l > r) return

  // partition
  // nl是随机生成的序数
  const nl = parseInt(Math.random() * (r - l + 1) + l, 10)
  Helper.swap(arr, l, nl)
  const pivot = l

  /**
   *
   * 小于 arr[l...lt] < arr[pivot]
   * 等于 arr[lt + 1, gt] = arr[pivot]
   * 大于 arr[gt + 1...r] > arr[pivot]
   *
   * 1、当arr[i] < arr[pivot] arr[lt + 1]，arr[i] 交换 i++ lt++
   * 2、当arr[i] = arr[pivot] i++
   * 3、当arr[i] > arr[pivot] i++ arr[i] 和 arr[gt]交换 gt--
   * 4、当i === gt 循环完成，将pivot 和 lt交换位置
   *
   */
  let lt = l
  let gt = r + 1
  let i = l + 1 // 从数组的最左侧开始遍历

  while (i < gt) {
    if (arr[i] < arr[pivot]) {
      Helper.swap(arr, i, lt + 1)
      lt++
      i++
    } else if (arr[i] > arr[pivot]) {
      Helper.swap(arr, i, gt - 1)
      gt--
    } else {
      i++
    }
  }

  Helper.swap(arr, l, lt)

  _quickSort(arr, l, lt - 1)
  _quickSort(arr, gt, r)
  return arr
}

const quickSort5 = (arr, n) => {
  return _quickSort(arr, 0, n - 1)
}

module.exports = quickSort5
