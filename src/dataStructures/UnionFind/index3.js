/**
 *
 * 并查集
 *
 */
const _find = Symbol('_find')
class UnionFind {
  constructor(size) {
    this.parent = new Array(size)
    this.sz = new Array(size) // 以数据i为根的元素的个数
    for(let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i
      this.sz[i] = 1
    }
  }

  isConnected(p, q) {
    return this[_find](p) === this[_find](q)
  }

  unionElement(p, q) {
    const pRoot = this[_find](p)
    const qRoot = this[_find](q)

    if(pRoot === qRoot) return

    if(this.sz[pRoot] < this.sz[qRoot]) {
      this.parent[pRoot] = qRoot
      this.sz[qRoot] += this.sz[pRoot]
    } else {
      this.parent[qRoot] = pRoot
      this.sz[pRoot] += this.sz[qRoot]
    }
  }

  getSize() {
    return this.parent.length
  }

  // 查找元素p对应的集合编号
  // O(h)复杂度，h为树的高度
  [_find](p) {
    if(p < 0 && p >= this.id.length) return '元素不合法'

    while(p !== this.parent[p]) {
      p = this.parent[p]
    }
    return p
  }
}
