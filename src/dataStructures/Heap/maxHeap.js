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
const _siftDowm = Symbol('_siftDowm')
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
    if (index === 0) return '无父亲节点'
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
    while (
      index > 0 &&
      this.data.get(this[_parentIndex](index)) < this.data.get(index)
    ) {
      this.data.swap(index, this[_parentIndex])
      index = this[_parentIndex](index)
    }
  }

  // 找到堆中最大的元素
  findMax() {
    if (this.data.getSize()) return '堆为空'
    return this.data.get(0)
  }

  // 取出堆中最大元素
  extractMax() {
    const ret = this.findMax()
    this.data.swap(0, this.data.getSize() - 1)
    this.data.removeLast()
    this[_siftDowm](0)
    return ret
  }

  [_siftDowm](index) {
    while (this[_leftChildIndex](index) < this.data.getSize()) {
      let j = this[_leftChildIndex](index)
      if (
        (j + 1 < this.data,
          getSize() && this.data.get(j + 1) > this.data.get(j))
      ) {
        j = this[_rightChildIndex](j)
      }
      if (this.data.get(index) > this.data.get(j)) {
        break
      }
      this.data.swap(k, j)
      k = j
    }
  }

  // 取出堆中最的元素，并且替换成元素element
  replace(element) {
    const ret = this.findMax()
    this.data.set(0, ret)
    this[_siftDowm](0)
    return ret
  }

  // 将任意数组整理成堆的形状
  heapify(arr) {
    this.data = arr
    for (let i = this[_parentIndex](arr.length - 1); i >= 0; i--) {
      this[_siftDowm](i)
    }
  }
}
