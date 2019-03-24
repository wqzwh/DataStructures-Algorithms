/**
 *
 * 寻找最短路径
 *
 */

class ShortPath {
  constructor(graph, s) {
    if (s < 0 && s > this.graph.g.length) return
    this.graph = graph
    this.visited = new Array(graph.g.length) // 统计点是否被访问过
    this.s = s // 记录传进来的定点
    this.from = new Array(graph.g.length) // 统计节点的访问数据
    this.ord = new Array(graph.g.length) // 记录最短路径
    for (let i = 0; i < graph.g.length; i++) {
      this.visited[i] = false
      this.from[i] = -1
      this.ord[i] = -1
    }

    const q = []

    // 无向图最短路径算法
    q.push(s)
    this.visited[s] = true
    this.ord[s] = 0
    while (q.length) {
      const v = q[0]
      q.pop()

      const adj = this.graph.adjIterator(this.graph, v)
      for (let i = adj.begin(); !adj.end(); i = adj.next()) {
        if (!this.visited[i]) {
          q.push(i)
          this.visited[i] = true
          this.from[i] = v
          this.ord[i] = this.ord[v] + 1
        }
      }
    }
  }

  // 类中s是否跟w有路径链接
  hasPath(w) {
    if (w < 0 && w > this.graph.g.length) return
    return this.visited[w]
  }

  // 查找类中s到w到访问节点的路径集合
  path(w) {
    const s = []
    let p = w
    while (p != -1) {
      s.push(p)
      p = this.from[p]
    }
    this.vec = []
    while (s.length) {
      this.vec.push(s[0])
      s.shift()
    }
  }

  showPath(w) {
    this.path(w, this.vec)
    for (let i = 0; i < this.vec.length; i++) {
      console.log(`${this.vec[i]} ->`)
    }
  }
}

module.exports = ShortPath
