/**
 *
 * 并查集
 * 路径压缩
 * 直接指向根节点
 */
const _find = Symbol('_find')
class UnionFind {
  constructor(size) {
    this.parent = new Array(size)
    this.rank = new Array(size) // 以数据i为根的元素的高度
    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i
      this.rank[i] = 1
    }
  }

  isConnected(p, q) {
    return this[_find](p) === this[_find](q)
  }

  unionElement(p, q) {
    const pRoot = this[_find](p)
    const qRoot = this[_find](q)

    if (pRoot === qRoot) return

    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot
    } else {
      this.parent[qRoot] = pRoot
      this.rank[pRoot] += 1
    }
  }

  getSize() {
    return this.parent.length
  }

  // 查找元素p对应的集合编号
  // O(h)复杂度，h为树的高度
  [_find](p) {
    if (p < 0 && p >= this.id.length) return '元素不合法'

    if (p !== this.parent[p]) {
      this.parent[p] = this[_find](this.parent[p])
    }
    return this.parent[p]
  }
}
