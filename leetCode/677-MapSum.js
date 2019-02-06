/**
 *
 * 677. 键值映射
 *
 */

class BSTNode {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
class BSTMap {
  constructor() {
    this.root = null
    this.size = 0
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
  }

  [_add](node, key, value) {
    if (node === null) {
      this.size++
      return new BSTNode(key, value)
    }

    if (key < node.key) {
      node.left = this[_add](node.left, key, value)
    } else if (key > node.key) {
      node.right = this[_add](node.right, key, value)
    } else {
      node.value = value
    }
    return node
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if (node === null) return null
    if (key === node.key) return node
    if (key < node.key) return this[_getNode](node.left, key)
    if (key > node.key) return this[_getNode](node.right, key)
  }

  get(key) {
    const node = this[_getNode](this.root, key)
    return node === null ? null : node.value
  }
}

class Node {
  constructor(isWord = false, value = null) {
    this.isWord = isWord
    this.value = value
    this.next = new BSTMap()
  }
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.root = new Node()
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let cur = this.root
  for (let i = 0; i < key.length; i++) {
    const c = key.charAt(i)
    if (cur.next.get(c) === null) cur.next.add(c, new Node())
    cur = cur.next.get(c)
  }
  if (!cur.isWord) {
    cur.isWord = true
  }
  cur.value = val
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let cur = this.root
  for (let i = 0; i < prefix.length; i++) {
    const c = prefix.charAt(i)
    if (cur.next.get(c) === null) return 0
    cur = cur.next.get(c)
  }
  return this._sum(cur)
}

MapSum.prototype._sum = function(node) {
  let res = node.value
  for (const key in node.next.root) {
    if (key === 'key') {
      const c = node.next.root[key]
      res += this._sum(node.next.get(c))
    }
  }
  return res
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
