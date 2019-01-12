/**
 *
 * 归并排序
 * 自下而上
 *
 */

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

const mergeSortBU = (arr, n) => {
  for (let i = 1; i <= n; i += i) {
    for (let j = 0; j + i < n; j += i + i) {
      merge(arr, j, j + i - 1, Math.min(j + i + i - 1, n - 1))
    }
  }
  return arr
}

module.exports = mergeSortBU
