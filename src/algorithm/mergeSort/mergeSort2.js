/**
 *
 * 归并排序
 * https://zhuanlan.zhihu.com/p/31595437
 * 通过数组序数完成
 *
 */

// 合并
// 合并arr数组中[l...mid]和[mid+1...r]分段的有序数组
const merge = (arr, l, mid, r) => {
  const aux = []
  for (let i = l; i <= r; i++) {
    aux[i] = arr[i]
  }
  let i = l // 游标i,开始时指向待排序序列中左半边的头元素
  let j = mid + 1 // 游标j,开始时指向待排序序列中右半边的头元素

  for (let k = l; k <= r; k++) {
    if (i > mid) { // 左半边用尽
      arr[k] = aux[j]
      j++
    } else if (j > r) { // 右半边用尽
      arr[k] = aux[i]
      i++
    } else if (aux[i] < aux[j]) {
      arr[k] = aux[i] // 右半边当前元素大于等于左半边当前元素，取左半边元素
      i++
    } else {
      arr[k] = aux[j] // 右半边当前元素小于左半边当前元素， 取右半边元素
      j++
    }
  }
  return arr
}

// 分割
// 分割arr[l...r]区间的数组
const splitArray = (arr, l, r) => {
  if (l >= r) return
  const mid = Math.floor(l + (r - l) / 2) // 计算中间分割
  splitArray(arr, l, mid) // 左边分割
  splitArray(arr, mid + 1, r) // 右分割
  if (arr[mid] > arr[mid + 1]) {
    return merge(arr, l, mid, r)
  }
}

const mergeSort2 = (arr, n) => {
  return splitArray(arr, 0, n - 1)
}

module.exports = mergeSort2
