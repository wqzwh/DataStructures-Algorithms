/**
 *
 * 线段树
 *
 */

const _data = Symbol('_data')
const _tree = Symbol('_tree')
const _leftChildIndex = Symbol('_leftChildIndex')
const _rightChildIndex = Symbol('_rightChildIndex')
const _buildSegmentTree = Symbol('_buildSegmentTree')
class SegmentTree {
  constructor(arr = [], merge) {
    this.merge = merge
    this[_data] = new Array(arr.length)
    for(let i = 0, l = arr.length; i++) {
      this[_data][i] = arr[i]
    }
    this[_tree] = new Array(4 * arr.length)
    this[_buildSegmentTree](0, 0, this[_data].length - 1)
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

  /**
   * 创建线段树函数
   * treeIndex 节点的索引
   * l 区间左节点
   * r 区间右节点
   * [l...r]
   */
  [_buildSegmentTree](treeIndex, l, r) {
    if(l === r) {
      this[_tree][treeIndex] = this[_data][l]
      return
    }

    let leftTreeIndex = this[_leftChildIndex](treeIndex)
    let rightTreeIndex = this[_rightChildIndex](treeIndex)

    let mid = l + (r - l) / 2
    this[_buildSegmentTree](leftTreeIndex, l, mid)
    this[_buildSegmentTree](rightTreeIndex, mid + 1, r)

    this[_tree][treeIndex] = this.merge.merge(this[_tree][leftTreeIndex], this[_tree][rightTreeIndex])
  }
}
