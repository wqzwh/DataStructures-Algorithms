/**
 *
 * 红黑树
 *
 */
const RED = true
const BLACK = false
class Node {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
    this.color = RED
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
const _isRed = Symbol('_isRed')
const _leftRotate = Symbol('_leftRotate')
const _rightRotate = Symbol('_rightRotate')
const _flipColors = Symbol('_flipColors')

class RBTree {
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

  // 判断node节点的颜色
  [_isRed](node) {
    if (node === null) return BLACK
    return node.color
  }

  // 红黑树左旋转
  /**
   *           y                          x
   *          / \                        / \
   *         T4  x                      y   T2
   *            / \      向左旋转（y）    / \
   *           T3  T2  - - - - - - - ->T4 T3
   *
   *   y.right = x.left
   *   x.left = y
   *   x.color = y.color
   *   y.color = red
   *
   *  返回的是新树，但是并不保证是红黑树
   */
  [_leftRotate](node) {
    const x = node.right
    const T3 = x.left

    node.right = T3
    x.left = node
    x.color = node.color
    node.color = RED

    return x
  }

  // 翻转颜色
  [_flipColors](node) {
    node.color = RED
    node.left.color = BLACK
    node.right.color = BLACK
    return node
  }

  // 右旋转
  /**
   *           y                          x
   *          / \                        /  \
   *         x  T4                      z    y
   *        / \         向右旋转（y）    / \   / \
   *       z  T3     - - - - - - - -> T1 T2 T3 T4
   *      / \
   *     T1 T2
   *
   *   T3 = x.right
   *   x.right = y
   *   y.left = T3
   *   x.color = node.color
   *   node.color = red
   */
  [_rightRotate](node) {
    const x = node.left
    const T3 = x.right

    x.right = node
    node.left = T3
    x.color = node.color
    node.color = RED

    return x
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
    this.root.color = BLACK // 保持根节点为黑色
  }

  [_add](node, key, value) {
    if (node === null) {
      this.size++
      return new Node(key, value)
    }

    if (key < node.key) {
      node.left = this[_add](node.left, key, value)
    } else if (key > node.key) {
      node.right = this[_add](node.right, key, value)
    } else {
      node.value = value
    }

    // 红黑树维护
    // 右子节点是红色并且左子节点不是红色 左旋转
    if (this[_isRed](node.right) && !this[_isRed](node.left)) {
      node = this[_leftRotate](node)
    }

    // 左子节点是红色并且左子节点的左节点是红色 右旋转
    if (this[_isRed](node.left) && this[_isRed](node.left.left)) {
      node = this[_rightRotate](node)
    }

    // 左子节点是红色并且右子节点也是红色 颜色翻转
    if (this[_isRed](node.left) && this[_isRed](node.right)) {
      node = this[_flipColors](node)
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

  contains(key) {
    return this[_getNode](this.root, key) !== null
  }

  get(key) {
    const node = this[_getNode](this.root, key)
    return node === null ? null : node.value
  }

  set(key, value) {
    const node = this[_getNode](this.root, key)
    if (node === null) return '不存在'
    node.value = value
  }
}
module.exports = RBTree
