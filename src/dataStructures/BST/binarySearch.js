/**
 *
 * 二分查找法
 * 必须针对有序的数组
 *
 */
/**
 *
 * @param {*} arr 有序数组
 * @param {*} n 数组个数
 * @param {*} target 查找目标
 * 能找到就返回target的索引否则返回-1
 */
const binarySearch = (arr, n, target) => {
  // arr[l...r]区间查找
  let l = 0,
    r = n - 1
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2)
    if (arr[mid] === target) return mid
    if (target < arr[mid]) {
      // arr[l...mid-1]区间查找
      r = mid - 1
    } else {
      // arr[mid+1...r]区间查找
      l = mid + 1
    }
  }
  return -1
}
