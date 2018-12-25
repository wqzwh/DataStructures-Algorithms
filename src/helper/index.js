const Helper = {
  /**
   *
   * @param  {[type]} q       [队列实例化后的实例]
   * @param  {[type]} opCount [队列中的测试数据量]
   * @return {[type]}         [执行时间差]
   */
  queueTest(q, opCount) {
    const startTime = new Date()

    for (let i = 0; i < opCount; i++) {
      q.enqueue(parseInt(Math.random() * (opCount + 1), 10))
    }

    for (let i = 0; i < opCount; i++) {
      q.dequeue()
    }

    const endTime = new Date()

    return (endTime - startTime) / 1000
  },

  /**
   * 随机生成数据的方法
   * @param  {[type]} n     [n个元素]
   * @param  {[type]} rangL [每个元素的左边界]
   * @param  {[type]} rangR [每个元素的右边界]
   * @return {[type]}       [生成后的数组]
   * parseInt(Math.random()*(max-min+1)+min,10);
   */
  radomArray(n, rangL, rangR) {
    if (rangL > rangR) return
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = parseInt(Math.random() * (rangR - rangL + 1) + rangL, 10);
    }
    return arr
  },

  /**
   * 测试算法性能函数
   * @param {*} sortName 排序名称
   * @param {*} sort 排序方法
   * @param {*} arr 数组
   * @param {*} n 数组中元素个数
   */
  testSort(sortName, sort, arr, n) {
    const startTime = new Date()
    const sortArr = sort(arr, n)
    const endTime = new Date()
    if(!this.isSorted(sortArr, n)) throw '数据未排序'
    const ret = `${sortName}: ${(endTime - startTime) / 1000}s`
    console.log(ret)
  },

  /**
   *
   * 是否有序
   *
   */
  isSorted(arr, n) {
    for (let i = 0; i < n - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  }
}

module.exports = Helper
