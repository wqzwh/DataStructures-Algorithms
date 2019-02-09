/**
 *
 * 通过树实现集合
 *
 */
import BST from '../BST/index'
class BSTSet {
  constructor() {
    this.bst = new BST()
  }

  // 添加元素
  // 不能添加重复元素
  add(element) {
    this.bst.add(element)
  }

  // 删除元素
  remove(element) {
    this.bst.remove(element)
  }

  // 是否包含元素
  contains(element) {
    return this.bst.contains(element)
  }

  // 获取集合的个数
  getSize() {
    return this.bst.size()
  }

  // 是否为空
  isEmpty() {
    return this.bst.isEmpty()
  }
}
module.exports = BSTSet
