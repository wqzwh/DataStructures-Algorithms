const _dfs = Symbol('_dfs')

class Path {
  constructor(graph, s) {
    if (s < 0 && s > this.graph.g.length) return
    this.graph = graph
    this.visited = new Array(graph.g.length) // 统计点是否被访问过
    this.s = s // 记录传进来的定点
    this.from = new Array(graph.g.length) // 统计节点的访问数据
    for (let i = 0; i < graph.g.length; i++) {
      this.visited[i] = false
      this.from[i] = -1
    }
    this.vec = []
    this[_dfs](s)
  }

  [_dfs](v) {
    this.visited[v] = true
    const adj = this.graph.adjIterator(this.graph, v)
    for (let w = adj.begin(); !adj.end(); w = adj.next()) {
      if (!this.visited[w]) {
        this[_dfs][w]
      } else {
        this.from[i] = v
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

module.exports = Path
