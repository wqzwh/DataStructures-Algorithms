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

const BST = require('../BST/index')

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
const _remove = Symbol('_remove')
const _findMin = Symbol('_findMin')
const _removeMin = Symbol('_removeMin')
const _getHeight = Symbol('_getHeight')
const _inOrder = Symbol('_inOrder')
const _getBalanceFactor = Symbol('_getBalanceFactor')
const _isBalanced = Symbol('_isBalanced')
const _rightRotate = Symbol('_rightRotate')
const _leftRotate = Symbol('_leftRotate')
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

  // 判断该二叉树是否是二分搜索树
  isBST() {
    const keys = new BST()
    this[_inOrder](this.root, keys)

    for (let i = 1; i < keys.getSize(); i++) {
      if (keys.get(i - 1) > keys.get(i) > 0) return false
    }
    return true
  }

  // 中序排序方法
  [_inOrder](node, keys) {
    if (node === null) return
    this[_inOrder](node.left, keys)
    keys.add(node.key)
    this[_inOrder](node.right, keys)
  }

  // 判断二叉树是否是平衡树
  isBalanced() {
    return this[_isBalanced](this.root)
  }

  [_isBalanced](node) {
    if (node === null) return true
    const balanceFactor = this[_getBalanceFactor](node)
    if (Math.abs(balanceFactor) > 1) return false
    return this[_isBalanced](node.left) && this[_isBalanced](node.right)
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
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

    // 更新height
    node.height =
      1 + Math.max(this[_getHeight](node.left), this[_getHeight](node.right))

    // 更新平衡因子
    const balanceFactor = this[_getBalanceFactor](node)

    // if(Math.abs(balanceFactor) > 1) return '不是平衡二叉树'

    // 平衡性维护
    // LL
    if (balanceFactor > 1 && this[_getBalanceFactor](node.left) >= 0) {
      return this[_rightRotate](node)
    }

    // RR
    if (balanceFactor < -1 && this[_getBalanceFactor](node.right) <= 0) {
      return this[_leftRotate](node)
    }

    // LR
    if (balanceFactor > 1 && this[_getBalanceFactor](node.left) < 0) {
      node.left = this[_leftRotate](node.left)
      return this[_rightRotate](node)
    }

    // RL
    if (balanceFactor < -1 && this[_getBalanceFactor](node.right) > 0) {
      node.right = this[_rightRotate](node.right)
      return this[_leftRotate](node)
    }

    return node
  }

  // 获取节点的高度值
  [_getHeight](node) {
    if (node === null) return 0
    return node.height
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if (node === null) return null
    if (key === node.key) return node
    if (key < node.key) return this[_getNode](node.left, key)
    if (key > node.key) return this[_getNode](node.right, key)
  }

  // 计算每个节点的平衡因子的差
  [_getBalanceFactor](node) {
    if (node === null) return 0
    return this[_getHeight](node.left) - this[_getHeight](node.right)
  }

  // 右旋转
  // 插入的元素在左侧的左侧
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
   */
  [_rightRotate](node) {
    const x = node.left
    const T3 = x.right

    // 向右旋转
    x.right = node
    node.left = T3

    // 更新height
    node.height =
      Math.max(this[_getHeight](node.left), this[_getHeight](node.right)) + 1
    x.height = Math.max(this[_getHeight](x.left), this[_getHeight](x.right)) + 1

    return x
  }

  // 左旋转
  // 插入的元素在右侧的右侧
  /**
   *           y                          x
   *          / \                        /  \
   *         T4  x                      y    z
   *            / \      向左旋转（y）    / \   / \
   *           T3  z  - - - - - - - -> T4 T3 T1 T2
   *              / \
   *             T1 T2
   *
   *   T3 = x.left
   *   x.left = y
   *   y.right = T3
   */
  [_leftRotate](node) {
    const x = node.right
    const T3 = x.left

    // 向右旋转
    x.left = node
    node.right = T3

    // 更新height
    node.height =
      Math.max(this[_getHeight](node.left), this[_getHeight](node.right)) + 1
    x.height = Math.max(this[_getHeight](x.left), this[_getHeight](x.right)) + 1

    return x
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

  // 删除操作
  // 返回删除的元素
  remove(key, value) {
    const node = this[_getNode](this.root, key)
    if (node === null) return null
    this.root = this[_remove](this.root, key)
    return node.value
  }

  [_remove](node, key) {
    if (node === null) {
      return null
    }

    let retNode = ''

    if (key < node.key) {
      node.left = this[_remove](node.left, key)
      retNode = node
    } else if (key > node.key) {
      node.right = this[_remove](node.right, key)
      retNode = node
    } else {
      // key === node.key

      // 左子树为空
      if (node.left === null) {
        const nodeRight = node.right
        node.right = null
        this.size--
        retNode = nodeRight
      }
      // 右子树为空
      else if (node.right === null) {
        const nodeLeft = node.left
        node.left = null
        this.size--
        retNode = nodeLeft
      }
      // 左子树和右子树都不为空
      // 找到比待删除节点大的最小节点，即待删除元素节点右子树的最小节点
      // 用这个节点代替待删除节点
      else {
        const successor = this[_findMin](node.right)
        successor.right = this[_remove](node.right, successor.key)
        successor.left = node.left

        node.left = node.right = null
        retNode = successor
      }
    }

    if (retNode === null) return null

    // 更新height
    retNode.height =
      1 +
      Math.max(this[_getHeight](retNode.left), this[_getHeight](retNode.right))

    // 更新平衡因子
    const balanceFactor = this[_getBalanceFactor](retNode)

    // 平衡性维护
    // LL
    if (balanceFactor > 1 && this[_getBalanceFactor](retNode.left) >= 0) {
      return this[_rightRotate](retNode)
    }

    // RR
    if (balanceFactor < -1 && this[_getBalanceFactor](retNode.right) <= 0) {
      return this[_leftRotate](retNode)
    }

    // LR
    if (balanceFactor > 1 && this[_getBalanceFactor](retNode.left) < 0) {
      retNode.left = this[_leftRotate](retNode.left)
      return this[_rightRotate](retNode)
    }

    // RL
    if (balanceFactor < -1 && this[_getBalanceFactor](retNode.right) > 0) {
      retNode.right = this[_rightRotate](retNode.right)
      return this[_leftRotate](retNode)
    }

    return retNode
  }

  [_findMin](node) {
    if (node.left === null) return node
    return this[_findMin](node.left)
  }
}
module.exports = AVLTree
