/**
 *
 * 联通分量
 *
 */
const _dfs = Symbol('_dfs')

class UnicomComponent {
  constructor(graph) {
    this.graph = graph
    this.visited = new Array(graph.g.length) // 统计点是否被访问过
    this.ccount = 0 // 计算联通分量个数
    this.id = new Array(graph.g.length) // id相同的点则代表两个点相联通
    for (let i = 0; i < graph.g.length; i++) {
      this.visited[i] = false
      this.id[i] = -1
    }

    for (let i = 0; i < graph.g.length; i++) {
      if (!this.visited[i]) {
        this[_dfs](i)
        this.ccount++
      }
    }
  }

  [_dfs](v) {
    this.visited[v] = true
    this.id[v] = this.ccount
    const adj = this.graph.adjIterator(this.graph, v)
    for (let w = adj.begin(); !adj.end(); w = adj.next()) {
      if (!this.visited[w]) {
        this[_dfs][w]
      }
    }
  }

  count() {
    return this.ccount
  }

  isConnected(v, w) {
    if (v < 0 && v > this.graph.g.length) return
    if (w < 0 && w > this.graph.g.length) return
    return this.id[v] === this.id[w]
  }
}

module.exports = UnicomComponent
