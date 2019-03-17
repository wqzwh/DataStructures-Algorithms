/**
 *
 * 索引最大堆
 * 每个节点的值要大于当它的孩子节点的值
 * 用indexes存放索引，data存放数据
 * 操作时比较数据，交换相应的索引，数据本身的位置不变
 * 规定索引从0开始计算
 */

const CArray = require('../array/index')
const Helper = require('../../helper/index')

const _parentIndex = Symbol('_parentIndex')
const _leftChildIndex = Symbol('_leftChildIndex')
const _rightChildIndex = Symbol('_rightChildIndex')
const _siftUp = Symbol('_siftUp')
const _siftDowm = Symbol('_siftDowm')
class IndexMaxHeap {
  constructor(capacity) {
    this.data = new CArray(capacity)
    this.indexes = new Array(capacity)
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

  // 添加元素 O(logn)
  // 指定索引来添加元素
  add(i, element) {
    this.data.add(i, element)
    this.indexes[this.data.getSize() - 1] = i
    this[_siftUp](this.indexes.length - 1)
  }

  [_siftUp](index) {
    while (
      index > 0 &&
      this.data.get(this.indexes[this[_parentIndex](index)]) <
        this.data.get(this.indexes[index])
    ) {
      Helper.swap(this.indexes, index, this[_parentIndex](index))
      index = this[_parentIndex](index)
    }
  }

  // 找到堆中最大的元素
  findMax() {
    if (!this.data.getSize()) return '堆为空'
    return this.data.get(this.indexes[0])
  }

  // 取出堆中最大元素 O(logn)
  extractMax() {
    const ret = this.findMax()
    Helper.swap(
      this.indexes,
      this.indexes[0],
      this.indexes[this.data.getSize() - 1]
    )
    this.data.remove(this.indexes[0])
    this[_siftDowm](0)
    return ret
  }

  // 最大堆中的indexes索引
  extractMaxIndex() {
    const ret = this.indexes[0]
    Helper.swap(
      this.indexes,
      this.indexes[0],
      this.indexes[this.data.getSize() - 1]
    )
    this.data.remove(this.indexes[0])
    this[_siftDowm](0)
    return ret
  }

  // 通过索引取出数据
  getItem(i) {
    return this.data.get(i)
  }

  // 指定索引改变数据
  change(i, newItem) {
    this.data.set(i, newItem)

    // 找到indexes[j] === i，j表示this.data.get(i)在堆中的位置
    for (let j = 0; j < this.data.getSize() - 1; j++) {
      if (this.indexes[j] === i) {
        this[_siftUp](j)
        this[_siftDowm](j)
        return
      }
    }
  }

  [_siftDowm](index) {
    while (this[_leftChildIndex](this.indexes[index]) < this.data.getSize()) {
      let j = this[_leftChildIndex](this.indexes[index])
      if (
        j + 1 < this.data.getSize() &&
        this.data.get(this.indexes[j + 1]) > this.data.get(this.indexes[j])
      ) {
        j = this[_rightChildIndex](this.indexes[index])
      }
      if (
        this.data.get(this.indexes[index]) >= this.data.get(this.indexes[j])
      ) {
        break
      }
      Helper.swap(this.indexes, this.indexes[index], this.indexes[j])
      index = j
    }
  }

  // 取出堆中最大的元素，并且替换成元素element
  replace(element) {
    const ret = this.findMax()
    this.data.set(0, element)
    this[_siftDowm](0)
    return ret
  }

  // 将任意数组整理成堆的形状 O(n)
  heapify(arr) {
    this.data = new CArray('', arr)
    for (let i = this[_parentIndex](arr.length - 1); i >= 0; i--) {
      this[_siftDowm](i)
    }
  }
}
module.exports = IndexMaxHeap
