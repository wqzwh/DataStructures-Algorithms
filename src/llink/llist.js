/**
 *
 * node节点类
 */

class Node {
  constructor(element, next = null) {
    this.element = element
    this.next = next
  }

  toString() {
    return this.element.toString()
  }
}

const size = Symbol('size')
class LList {
  constructor() {
    this.head = null
    this[size] = 0
  }

  // 获取链表元素的个数
  getSize() {
    return this[size]
  }
}
