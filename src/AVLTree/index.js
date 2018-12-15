/**
 *
 * AVL 树
 * 每个节点的左右节点的高度差不能超过1，就是平衡二叉树
 *
 */

class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
    this.height = 1
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
const _remove = Symbol('_remove')
const _findMin = Symbol('_findMin')
const _removeMin = Symbol('_removeMin')
const _getHeight = Symbol('_getHeight')
const _getBalanceFactor = Symbol('_getBalanceFactor')
class AVLTree {
  constructor() {
    this.root = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
  }

  [_add](node, key, value) {
    if(node === null) {
      this.size++
      return new Node(key, value)
    }

    if(key < node.key) {
      node.left = this[_add](node.left, key, value)
    } else if(key > node.key) {
      node.right = this[_add](node.right, key, value)
    } else {
      node.value = value
    }

    // 更新height
    node.height = 1 + Math.max(this[_getHeight](node.left), this[_getHeight](node.right))

    // 更新平衡因子
    const balanceFactor = this[_getBalanceFactor](node)

    if(Math.abs(balanceFactor) > 1) return '不是平衡二叉树'

    return node
  }

  // 获取节点的高度值
  [_getHeight](node) {
    if(node === null) return 0
    return node.height
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if(node === null) return null
    if(key === node.key) return node
    if(key < node.key) return this[_getNode](node.left, key)
    if(key > node.key) return this[_getNode](node.right, key)
  }

  // 计算每个节点的平衡因子
  [_getBalanceFactor](node) {
    if(node === null) return 0
    return this[_getHeight](node.left) - this[_getHeight](node.right)
  }

  contains(key) {
    return this[_getNode](this.root, key) !== null
  }

  get(key) {
    let node = this[_getNode](this.root, key)
    return node === null ? null : node.value
  }

  set(key, value) {
    let node = this[_getNode](this.root, key)
    if(node === null) return '不存在'
    node.value = value
  }

  // 删除操作
  // 返回删除的元素
  remove(key, value) {
    let node = this[_getNode](this.root, key)
    if(node === null) return null
    this.root = this[_remove](this.root, key)
    return node.value
  }

  [_remove](node, key) {
    if(node === null) {
      return null
    }

    if(key < node.key) {
      node.left = this[_remove](node.left, key)
      return node
    } else if(key > node.key) {
      node.right = this[_remove](node.right, key)
      return node
    } else {
      // key === node.key

      // 左子树为空
      if(node.left === null) {
        let nodeRight = node.right
        node.right = null
        this.size--
        return nodeRight
      }
      // 右子树为空
      if(node.right === null) {

        let nodeLeft = node.left
        node.left = null
        this.size--
        return nodeLeft
      }
      // 左子树和右子树都不为空
      // 找到比待删除节点大的最小节点，即待删除元素节点右子树的最小节点
      // 用这个节点代替待删除节点
      let successor = this[_findMin](node.right)
      successor.right = this[_removeMin](node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor
    }
  }

  [_removeMin](node) {
    if(node.left === null) {
      let rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this[_removeMin](node.left)
    return node
  }

  [_findMin](node) {
    if(node.left === null) return node
    return this[_findMin](node.left)
  }
}
