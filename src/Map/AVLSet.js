/**
 *
 * 基于avl的集合
 *
 */

const AVLTree = require('../AVLTree/index')

class AVLSet {
  constructor() {
    this.avl = new AVLTree()
  }

  getSize() {
    return this.avl.getSize()
  }

  isEmpty() {
    return this.avl.isEmpty()
  }

  // 添加元素
  // 不能添加重复元素
  add(element) {
    this.avl.add(element, null)
  }

  // 删除元素
  remove(element) {
    this.avl.remove(element)
  }

  // 是否包含元素
  contains(element) {
    return this.avl.contains(element)
  }
}
