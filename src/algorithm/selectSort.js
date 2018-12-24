/** 
 * 
 * 选择排序
 * O(n^2)复杂度
*/
const selectSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}

module.exports = selectSort

