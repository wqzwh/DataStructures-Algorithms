/**
 *
 * 基于二分搜索树实现映射结构
 *
 */
class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
const _remove = Symbol('_remove')
const _findMin = Symbol('_findMin')
const _removeMin = Symbol('_removeMin')
const _root = Symbol('_root')
const _size = Symbol('_size')
class BSTMap {
  constructor() {
    this[_root] = null
    this[_size] = 0
  }

  getSize() {
    return this[_size]
  }

  isEmpty() {
    return this[_size] === 0
  }

  add(key, value) {
    this[_root] = this[_add](this[_root], key, value)
  }

  [_add](node, key, value) {
    if (node === null) {
      this[_size]++
      return new Node(key, value)
    }

    if (key.charCodeAt() < node.key.charCodeAt()) {
      node.left = this[_add](node.left, key, value)
    } else if (key.charCodeAt() > node.key.charCodeAt()) {
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
    if (key.charCodeAt() < node.key.charCodeAt()) {
      return this[_getNode](node.left, key)
    }
    if (key.charCodeAt() > node.key.charCodeAt()) {
      return this[_getNode](node.right, key)
    }
  }

  contains(key) {
    return this[_getNode](this[_root], key) !== null
  }

  get(key) {
    const node = this[_getNode](this[_root], key)
    return node === null ? null : node.value
  }

  set(key, value) {
    const node = this[_getNode](this[_root], key)
    if (node === null) return '不存在'
    node.value = value
  }

  // 删除操作
  // 返回删除的元素
  remove(key) {
    debugger
    const node = this[_getNode](this[_root], key)
    if (node === null) return null
    this[_root] = this[_remove](this[_root], key)
    return node.value
  }

  [_remove](node, key) {
    if (node === null) {
      return null
    }

    if (key.charCodeAt() < node.key.charCodeAt()) {
      node.left = this[_remove](node.left, key)
      return node
    } else if (key.charCodeAt() > node.key.charCodeAt()) {
      node.right = this[_remove](node.right, key)
      return node
    } else {
      // key === node.key

      // 左子树为空
      if (node.left === null) {
        const nodeRight = node.right
        node.right = null
        this[_size]--
        return nodeRight
      }
      // 右子树为空
      if (node.right === null) {
        const nodeLeft = node.left
        node.left = null
        this[_size]--
        return nodeLeft
      }
      // 左子树和右子树都不为空
      // 找到比待删除节点大的最小节点，即待删除元素节点右子树的最小节点
      // 用这个节点代替待删除节点
      const successor = this[_findMin](node.right)
      successor.right = this[_removeMin](node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor
    }
  }

  [_removeMin](node) {
    if (node.left === null) {
      const rightNode = node.right
      node.right = null
      this[_size]--
      return rightNode
    }
    node.left = this[_removeMin](node.left)
    return node
  }

  [_findMin](node) {
    if (node.left === null) return node
    return this[_findMin](node.left)
  }
}
module.exports = BSTMap
