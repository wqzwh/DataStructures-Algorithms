/**
 *
 * enqueue() 添加元素
 * dequeue() 取出元素 时间复杂度均为O(n)
 * getFront() 查看对首的元素是啥
 * getSize() 查看队列元素大小
 * isEmpty() 判断队列是否为空
 * 时间复杂度均为O(1)
 *
 */
const CArray = require('../array/index')
class ArrayQueue {
  constructor(capacity) {
    this.array = new CArray(capacity)
  }

  enqueue(element) {
    this.array.addLast(element)
  }

  dequeue() {
    return this.array.removeFirst()
  }

  getFront() {
    return this.array.getFirst()
  }

  getSize() {
    return this.array.getSize()
  }

  isEmpty() {
    return this.array.isEmpty()
  }

  // 查看栈中容量
  getCapacity() {
    return this.array.getCapacity()
  }

  toString() {
    let str = ''
    for(let i = 0, l = this.array.getSize(); i < l; i++) {
      if(i === l - 1) {
        str += this.array.get(i) + ' tail'
      } else {
        str += this.array.get(i) + ','
      }
    }
    return str
  }
}

module.exports = ArrayQueue
