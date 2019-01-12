/**
 *
 * push
 * pop
 * peek
 * getSize
 * isEmpty
 * 时间复杂度均为O(1)
 *
 */
const CArray = require('../array/index')
const Stack = require('./stack')
class ArrayStack extends Stack {

  constructor(capacity) {
    super()
    this.array = new CArray(capacity)
  }

  // 向栈添加元素
  push(element) {
    this.array.addLast(element)
  }

  // 从栈顶取出元素
  pop() {
    this.array.removeLast()
  }

  // 查看栈顶的元素
  peek() {
    return this.array.getLast()
  }

  // 栈中的大小
  getSize() {
    return this.array.getSize()
  }

  // 栈是否为空
  isEmpty() {
    return this.array.isEmpty()
  }

  // 查看栈中容量
  getCapacity() {
    return this.array.getCapacity()
  }

  toString() {
    let str = ''
    for (let i = 0, l = this.array.getSize(); i < l; i++) {
      if (i === l - 1) {
        str += this.array.get(i) + ' top'
      } else {
        str += this.array.get(i) + ','
      }
    }
    return str
  }

}

module.exports = ArrayStack
