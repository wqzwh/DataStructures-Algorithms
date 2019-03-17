/**
 *
 * 稀疏图 - 邻接表
 *
 */

class SparseGraph {
  constructor(n, directed) {
    this.n = n // 定点个数
    this.m = 0 // 初始化边的个数
    this.directed = directed
    this.g = [] // 数组存储链接的点
    for (let i = 0; i < n; i++) {
      this.g[i] = []
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

    this.g[v].push(w)

    if (!this.directed) {
      this.g[w].push(v)
    }
    this.m++
  }

  // 判断是否v，w是否存在边
  hasEdge(v, w) {
    if (v < 0 || v > this.m) return
    if (w < 0 || w > this.m) return

    return this.g[v].join().includes(w)
  }
}

// 建立迭代器
class adjIterator {
  constructor(SG, v) {
    this.SG = SG // 图实例
    this.v = v // 定点个数
    this.index = 0 // 迭代的序数，默认是0
  }

  begin() {
    this.index = 0
    if (this.SG[this.v].length) return this.SG[this.v][this.index]
    return -1
  }

  next() {
    this.index++
    if (this.index < this.SG[this.v].length) return this.SG[this.v][this.index]
    return -1
  }

  end() {
    return this.index >= this.SG[this.v].length
  }
}
