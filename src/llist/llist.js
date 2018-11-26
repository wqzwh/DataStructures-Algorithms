/**
 *
 * node节点类
 */

class Node {
  constructor(element, next = null) {
    this.element = element
    this.next = next
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
   * 时间复杂度均为O(n)
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
   * 时间复杂度均为O(1)
  */
  addFirst(element) {
    this.add(0, element)
  }

  // 向链表末尾添加元素
  // 时间复杂度均为O(n)
  addLast(element) {
    this.add(this[size], element)
  }

  // 通过索引来查找链表元素
  // 时间复杂度均为O(n)
  get(index) {
    if(index < 0 || index > this[size]) throw '不合法'
    let cur = this.dummyHead.next
    for(let i = 0; i < index; i++){
      cur = cur.next
    }
    return cur.element
  }

  // 获得链表第一个元素
  getFirst() {
    return this.get(0)
  }

  // 获取链表最后一个元素
  getLast() {
    return this.get(this[size] - 1)
  }

  // 修改链表index位置的元素
  // 时间复杂度均为O(n)
  set(index, element) {
    if(index < 0 || index > this[size]) throw '不合法'
    let cur = this.dummyHead.next
    for(let i = 0; i < index; i++){
      cur = cur.next
    }
    cur.element = element
  }

  // 查找链表中是否存在元素
  // 时间复杂度均为O(n)
  contains(element) {
    let cur = this.dummyHead.next
    while(cur.element !== null) {
      if(cur.element === element) return true
      cur = cur.next
    }
    return false
  }

  // 删除链表节点
  // 时间复杂度均为O(n)
  remove(index) {
    if(index < 0 || index > this[size]) throw '不合法'
    let prev = this.dummyHead
    for(let i = 0; i < index; i++){
      prev = prev.next
    }
    let retNode = prev.next
    prev.next = retNode.next
    retNode.next = null
    this[size]--
    return retNode
  }

  // 时间复杂度均为O(1)
  removeFirst() {
    return this.remove(0)
  }

  // 时间复杂度均为O(n)
  removeLast() {
    return this.remove(this[size] - 1)
  }

  toString() {
    let res = ''
    let cur = this.dummyHead.next
    while(cur !== null) {
      res += cur + '->'
      cur = cur.next
    }
    res += 'null'
    return res.toString()
  }
}

module.exports = LList