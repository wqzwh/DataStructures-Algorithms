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
      arr[i] = parseInt(Math.random() * (rangR - rangL + 1) + rangL, 10)
    }
    return arr
  },

  /**
   *
   * 生成几乎有序的数组
   * @param {*} n
   * @param {*} swapTimes
   */
  nearlyOrderArray(n, swapTimes) {
    const arr = new Array(n)
    for (let i = 0; i < n; i++) {
      arr[i] = i
    }

    for (let i = 0; i < swapTimes; i++) {
      const a = parseInt(Math.random() * (n + 1), 10) % n
      const b = parseInt(Math.random() * (n + 1), 10) % n
      Helper.swap(arr, a, b)
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
    const newArr = sort(arr, n)
    const endTime = new Date()
    if (!this.isSorted(newArr, n)) throw '数据未排序'
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
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  },

  /**
   *
   * swap交换位置方法
   * b > a
   *
   */
  swap(arr, a, b) {
    const tem = arr[b]
    arr[b] = arr[a]
    arr[a] = tem
  },

  /**
   *
   * 范围随机数
   * max - 期望的最大值
   * min - 期望的最小值
   *
   */
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

module.exports = Helper
