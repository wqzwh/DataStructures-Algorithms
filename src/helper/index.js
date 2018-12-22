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
   *
   * @param  {[type]} n     [n个元素]
   * @param  {[type]} rangL [每个元素的左边界]
   * @param  {[type]} rangR [每个元素的右边界]
   * @return {[type]}       [生成后的数组]
   * parseInt(Math.random()*(max-min+1)+min,10);
   */
  sortTest(n, rangL, rangR) {
    if (rangL > rangR) return
    const arr = new Array(n)
    for (const i = 0; i < n; i++) {
      arr[i] = parseInt(Math.random() * (rangR - rangL + 1) + rangL, 10);
    }
    return arr
  }
}
