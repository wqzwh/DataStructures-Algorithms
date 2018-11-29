/**
 *
 * 在原先的链表中定义一个尾部标记tail
 * tail端删除元素容易，所以作为队列的对首
 * head端添加元素容易，所以作为队列的队尾
 *
 * 队列是先进先出，从对首出，从对尾进
 *
 */
class Node {
  constructor(element, next = null) {
    this.element = element
    this.next = next
  }
}

const size = Symbol('size')
class QueueList {
  constructor() {
    this.dummyHead = new Node(null)
    this.tail = null
    this[size] = 0
  }

  getSize() {
    return this[size]
  }

  isEmpty() {
    return this[size] === 0
  }

  // 从队尾进入
  // O(1)复杂度
  enqueue(element) {
    let prev = this.dummyHead
    if(this.tail === null) {
      this.tail = new Node(element)
    } else {
      this.tail.next = new Node(element)
      this.tail = this.tail.next
    }

    let node = new Node(element)
    node.next = prev.next
    prev.next = node

    this[size]++
  }

  // 从对首出
  // O(1)复杂度
  dequeue() {
    if(this.isEmpty()) return '链表为空'
    let retNode = this.dummyHead.next
    this.dummyHead.next = retNode.next
    retNode.next = null
    if(this.dummyHead.next === null) this.tail = null
    this[size]--
    return retNode
  }

  getFront() {
    if(this.isEmpty()) return '链表为空'
      return this.dummyHead.next.element
  }
}
