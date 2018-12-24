/** 
 * 
 * 插入排序
 * O(n^2)复杂度
*/

const insertSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    // for (let j = i; j > 0; j--) {
    //   if(arr[j] < arr[j - 1]) {
    //     let temp = arr[j]
    //     arr[j] = arr[j - 1]
    //     arr[j - 1] = temp
    //   } else {
    //     break
    //   }
    // }

    // 第二版
    let temp = arr[i] // 复制一份待比较的数据
    let j
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      if(arr[j] < arr[j - 1]) {
        arr[j] = arr[j - 1]
      }
    }
    arr[j] = temp
  }
  return arr
}

module.exports = insertSort