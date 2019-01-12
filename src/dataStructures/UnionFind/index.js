/**
 *
 * 并查集
 *
 */
const _find = Symbol('_find')
class UnionFind {
  constructor(size) {
    this.id = new Array(size)
    for (let i = 0; i < this.id.length; i++) {
      this.id[i] = i
    }
  }

  isConnected(p, q) {
    return this[_find](p) === this[_find](q)
  }

  unionElement(p, q) {
    const PID = this[_find](p)
    const QID = this[_find](q)

    if (PID === QID) return
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === PID) {
        this.id[i] === QID
      }
    }
  }

  getSize() {
    return this.id.length
  }

  // 查找元素p对应的集合编号
  [_find](p) {
    if (p < 0 && p >= this.id.length) return '元素不合法'
    return this.id[p]
  }
}
