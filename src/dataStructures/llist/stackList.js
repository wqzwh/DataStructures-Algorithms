/**
 *
 * push
 * pop
 * peek
 * getSize
 * isEmpty
 *
 */
const LList = require('./llist')
class StackList {
  constructor() {
    this.list = new LList()
  }

  // 向栈定添加元素
  push(element) {
    this.list.addFirst(element)
  }

  // 从栈顶取出元素
  pop() {
    return this.list.removeFirst()
  }

  // 查看栈顶的元素
  peek() {
    return this.list.getFirst()
  }

  // 栈中的大小
  getSize() {
    return this.list.getSize()
  }

  // 栈是否为空
  isEmpty() {
    return this.list.isEmpty()
  }

}

module.exports = StackList
