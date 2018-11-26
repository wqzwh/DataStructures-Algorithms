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

/** 
 * 
 * node.next = head
 * head = node
 * 
*/

const size = Symbol('size')
class LList {
  constructor() {
    // this.head = null
    // 通过增加假头，这样可以不用区分因添加元素位置不同逻辑不同
    this.dummyHead = new Node(null)
    this[size] = 0
  }

  // 获取链表元素的个数
  getSize() {
    return this[size]
  }

  // 链表是否为空
  isEmpty() {
    return this[size] === 0
  }

  /** 
   * 
   * 链表index位置添加元素
   * node.next = prev.next
   * prev.next = node
   * 
   * */ 
  add(index, element) {
    if(index < 0 || index > this[size]) throw '不合法'
    let prev = this.dummyHead
    for(let i = 0; i < index; i++) {
      prev = prev.next
    }
    prev.next = new Node(element, prev.next)
    this[size]++
  }

  /** 
   * 链表头增加元素
   * node.next = head
   * head = node
  */
  addFirst(element) {
    this.add(0, element)
  }

  // 向链表末尾添加元素
  addLast(element) {
    this.add(this[size], element)
  }

}

module.exports = LList