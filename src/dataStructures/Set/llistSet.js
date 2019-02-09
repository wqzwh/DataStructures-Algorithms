/**
 *
 * 通过链表实现集合
 *
 */
import LList from '../llist/llist'

class LListSet {
  constructor() {
    this.llist = new LList()
  }

  // 添加元素
  // 不能添加重复元素
  add(element) {
    if (!this.llist.contains(element)) this.llist.addFirst(element)
  }

  // 删除元素
  remove(element) {
    this.llist.removeElement(element)
  }

  // 是否包含元素
  contains(element) {
    return this.llist.contains(element)
  }

  // 获取集合的个数
  getSize() {
    return this.llist.getSize()
  }

  // 是否为空
  isEmpty() {
    return this.llist.isEmpty()
  }
}
module.exports = LListSet
