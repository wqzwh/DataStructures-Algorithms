/**
 *
 * 并查集
 *
 */
const _find = Symbol('_find')
class UnionFind {
  constructor(size) {
    this.parent = new Array(size)
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i
    }
  }

  isConnected(p, q) {
    return this[_find](p) === this[_find](q)
  }

  // O(h)复杂度，h为树的高度
  unionElement(p, q) {
    const pRoot = this[_find](p)
    const qRoot = this[_find](q)

    if (pRoot === qRoot) return
    this.parent[pRoot] = qRoot
  }

  getSize() {
    return this.parent.length
  }

  // 查找元素p对应的集合编号
  // O(h)复杂度，h为树的高度
  [_find](p) {
    if (p < 0 && p >= this.id.length) return '元素不合法'

    while (p !== this.parent[p]) {
      p = this.parent[p]
    }
    return p
  }
}
module.exports = UnionFind
