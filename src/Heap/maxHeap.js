/**
 *
 * 最大堆
 * 每个节点的值要大于当它的孩子节点的值
 */


const CArray = require('../array/index')

const _parentIndex = Symbol('_parentIndex')
const _leftChildIndex = Symbol('_leftChildIndex')
const _rightChildIndex = Symbol('_rightChildIndex')
const _siftUp = Symbol('_siftUp')
class MaxHeap {
  constructor(capacity) {
    this.data = new CArray(capacity)
  }

  getSize() {
    return this.data.getSize()
  }

  isEmpty() {
    return this.data.isEmpty()
  }

  // 根据index来查找父亲节点的索引
  [_parentIndex](index) {
    if(index === 0) return '无父亲节点'
    return Math.floor((index - 1) / 2)
  }

  // 根据索引值查找左孩子节点的索引值
  [_leftChildIndex](index) {
    return index * 2 + 1
  }

  // 根据索引值查找左孩子节点的索引值
  [_rightChildIndex](index) {
    return index * 2 + 2
  }

  // 添加元素
  add(element) {
    this.data.addLast(element)
    this[_siftUp](this.data.getSize() - 1)
  }

  [_siftUp](index) {
    while(index > 0 && this.data.get(this[_parentIndex](index)) < this.data.get(index)) {
      this.data.swap(index, this[_parentIndex])
      index = this[_parentIndex](index)
    }
  }
}


