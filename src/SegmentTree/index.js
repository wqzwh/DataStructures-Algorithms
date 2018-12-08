/**
 *
 * 线段树
 *
 */

const _data = Symbol('_data')
const _tree = Symbol('_tree')
const _leftChildIndex = Symbol('_leftChildIndex')
const _rightChildIndex = Symbol('_rightChildIndex')
class SegmentTree {
  constructor(arr = []) {
    this[_data] = new Object(arr.length)
    for(let i = 0, l = arr.length; i++) {
      this[_data][i] = arr[i]
    }
    this[_tree] = new Object(4 * arr.length)
  }

  // 根据索引获取节点
  get(index) {
    if(index < 0 || index > this[_data].length) return '索引不合法'
    return this[_data][index]
  }

  // 多少个元素
  getSize() {
    return this[_data].length
  }

  // 根据索引值查找左孩子节点的索引值
  [_leftChildIndex](index) {
    return index * 2 + 1
  }

  // 根据索引值查找左孩子节点的索引值
  [_rightChildIndex](index) {
    return index * 2 + 2
  }
}
