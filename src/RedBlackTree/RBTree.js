/**
 *
 * 红黑树
 *
 */

class Node {
  RED = true
  BLACK = false
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
    this.color = this.RED
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
const _remove = Symbol('_remove')
const _findMin = Symbol('_findMin')
const _removeMin = Symbol('_removeMin')
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
    if(node === null) return this.BLACK
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
    node.color = this.RED

    return x
  }

  // 翻转颜色
  [_flipColors](node) {
    node.color = this.RED
    node.left.color = this.BLACK
    node.right.color = this.BLACK
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
    node.color = this.RED

    return x
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
    this.root = this.BLACK // 保持根节点为黑色
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

    // 红黑树维护
    // 右子节点是红色并且左子节点不是红色 左旋转
    if(this[_isRed](node.right) && !this[_isRed](node.left)) {
      node = this[_leftRotate](node)
    }

    // 左子节点是红色并且左子节点的左节点是红色 右旋转
    if(this[_isRed](node.left) && this[_isRed](node.left.left)) {
      node = this[_rightRotate](node)
    }

    // 左子节点是红色并且右子节点也是红色 颜色翻转
    if(this[_isRed](node.left) && this[_isRed](node.right)) {
      node = this[_flipColors](node)
    }

    return node
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if(node === null) return null
    if(key === node.key) return node
    if(key < node.key) return this[_getNode](node.left, key)
    if(key > node.key) return this[_getNode](node.right, key)
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
