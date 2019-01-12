/**
 *
 * 307 区域和检索 - 数组可修改
 *
 */

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
const _query = Symbol('_query')
const _set = Symbol('_set')
class SegmentTree {
  constructor(arr = [], merge) {
    this.merge = merge
    this[_data] = new Array(arr.length)
    for (let i = 0, l = arr.length; i < l; i++) {
      this[_data][i] = arr[i]
    }
    this[_tree] = new Array(4 * arr.length)
    this[_buildSegmentTree](0, 0, this[_data].length - 1)
  }

  // 根据索引获取节点
  get(index) {
    if (index < 0 || index > this[_data].length) return '索引不合法'
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
    if (l === r) {
      this[_tree][treeIndex] = this[_data][l]
      return
    }

    let leftTreeIndex = this[_leftChildIndex](treeIndex)
    let rightTreeIndex = this[_rightChildIndex](treeIndex)

    let mid = Math.floor(l + (r - l) / 2)
    this[_buildSegmentTree](leftTreeIndex, l, mid)
    this[_buildSegmentTree](rightTreeIndex, mid + 1, r)

    this[_tree][treeIndex] = this.merge(this[_tree][leftTreeIndex], this[_tree][rightTreeIndex])
  }

  /**
   *
   * 根据区间在线段树中查找
   * [ql, qr]
   *
   */
  query(ql, qr) {
    if (ql < 0 || ql > this[_data].length || qr < 0 || qr > this[_data].length || ql > qr) return '区间不合法'
    return this[_query](0, 0, this[_data].length - 1, ql, qr)
  }

  /**
   *
   * treeIndex 节点的索引
   * l 以treeIndex为节点的线段树的左区间
   * r 以treeIndex为节点的线段树的右区间
   * ql 待查询区间的左区间
   * qr 待查询区间的右区间
   *
   */
  [_query](treeIndex, l, r, ql, qr) {
    if (l === ql && r === qr) {
      return this[_tree][treeIndex]
    }

    const mid = Math.floor(l + (r - l) / 2)
    const leftTreeIndex = this[_leftChildIndex](treeIndex)
    const rightTreeIndex = this[_rightChildIndex](treeIndex)

    // 如果待查询的区间的右区间比mid还要小，说明该待查询区间只要在左子树上进行递归执行即可
    if (qr <= mid) {
      return this[_query](leftTreeIndex, l, mid, ql, qr)
    }

    if (ql >= mid + 1) {
      return this[_query](rightTreeIndex, mid + 1, r, ql, qr)
    }

    // 如果区间正在即在左边右在右边
    let leftRsult = this[_query](leftTreeIndex, l, mid, ql, mid)
    let rightRsult = this[_query](rightTreeIndex, mid + 1, r, mid + 1, qr)

    return this.merge(leftRsult, rightRsult)
  }

  // 更新操作
  set(index, element) {
    if (index < 0 || index > this[_data].length) return '索引不合法'
    this[_data][index] = element
    this[_set](0, 0, this[_data].length - 1, index, element)
  }

  [_set](treeIndex, l, r, index, element) {
    if (l === r) {
      this[_tree][treeIndex] = element
      return
    }

    const mid = Math.floor(l + (r - l) / 2)
    const leftTreeIndex = this[_leftChildIndex](treeIndex)
    const rightTreeIndex = this[_rightChildIndex](treeIndex)

    if (index >= mid + 1) {
      this[_set](rightTreeIndex, mid + 1, r, index, element)
    } else {
      this[_set](leftTreeIndex, l, mid, index, element)
    }

    this[_tree][treeIndex] = this.merge(this[_tree][leftTreeIndex], this[_tree][rightTreeIndex])
  }
}


/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let data = []
  if (nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      data[i] = nums[i]
    }
    this.segTree = new SegmentTree(data, (a, b) => a + b)
  }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  if (this.segTree === null) return '线段树是空'
  return this.segTree.set(i, val)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (this.segTree === null) return '线段树是空'
  return this.segTree.query(i, j)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
