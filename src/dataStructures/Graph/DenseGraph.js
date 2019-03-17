/**
 *
 * 稠密图 - 邻接矩阵
 *
 */

class DenseGraph {
  constructor(n, directed) {
    this.n = n // 定点个数
    this.m = 0 // 初始化边的个数
    this.directed = directed
    this.g = [] // 数组矩阵存储
    for (let i = 0; i < n; i++) {
      this.g.push(new Array(n).fill(false))
    }
  }

  // 返回定点方法
  getV() {
    return n
  }
  // 返回边的方法
  getM() {
    return m
  }

  // 添加边的方法
  // v, w 定点之间建立一条边
  addEdge(v, w) {
    if (v < 0 || v > this.m) return
    if (w < 0 || w > this.m) return
    if (this.hasEdge(v, w)) return

    this.g[v][w] = true

    if (!this.directed) {
      this.g[w][v] = true
    }
    this.m++
  }

  // 判断是否v，w是否存在边
  hasEdge(v, w) {
    if (v < 0 || v > this.m) return
    if (w < 0 || w > this.m) return

    return this.g[v][w]
  }
}

// 建立迭代器
class adjIterator {
  constructor(SG, v) {
    this.SG = SG // 图实例
    this.v = v // 定点个数
    this.index = -1 // 迭代的序数，默认是-1
  }

  begin() {
    this.index = -1
    return this.next()
  }

  next() {
    for (this.index += 1; this.index < this.SG[this.v].length; this.index++) {
      if (this.SG[this.v][this.index]) return this.index
    }
    return -1
  }

  end() {
    return this.index >= this.SG[this.v].length
  }
}
