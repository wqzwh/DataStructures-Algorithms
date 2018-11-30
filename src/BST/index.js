
/**
 *
 * 树结构
 *
 */
class Node {
  constructor(element, left = null, right = null) {
    this.element = element
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
const _contains = Symbol('_contains')
const _preOrder = Symbol('_preOrder')
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  // 查看树的元素个数
  size() {
    return this.size
  }

  // 判断树的大小
  isEmpty() {
    return this.size === 0
  }

  // 添加元素
  add(element) {
    // if(this.root === null) {
    //   this.root = new Node(element)
    //   this.size++
    // } else {
    //   this[_add](this.root, element)
    // }
    this.root = this[_add](this.root, element)
  }

  // 添加元素的递归函数
  // 返回插入新节点后二分搜索书的根
  [_add](node, element) {
    const curElement = node.element
    const left = node.left
    const right = node.right
    // if(element === curElement){
    //   return
    // } else if(element < curElement && left === null) {
    //   left = new Node(element)
    //   this.size++
    //   return
    // } else if(element > curElement && right === null) {
    //   right = new Node(element)
    //   this.size++
    //   return
    // }

    if(node === null) {
      this.size++
      return new Node(element)
    }

    if(element < curElement) {
      left = this[_add](left, element)
    } else if(element > curElement) {
      right = this[_add](right, element)
    }
    return node
  }

  // 是否包含元素
  contains(element) {
    return this[_contains](this.root, element)
  }

  [_contains](node, element) {
    const curElement = node.element
    const left = node.left
    const right = node.right
    if(node === null) return false

    if(element === curElement) {
      return true
    } else if(element < curElement) {
      return this[_contains](left, element)
    } else {
      return this[_contains](right, element)
    }
  }

  // 前序遍历
  preOrder() {
    this[_preOrder](this.root)
  }

  [_preOrder](node) {
    if(node === null) return
    console.log('访问了当前节点', node)
    this[_preOrder](node.left)
    this[_preOrder](node.right)
  }
}
