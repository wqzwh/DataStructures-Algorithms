const _resize = Symbol('_resize')
class CArray {
  // capacity 数组容量
  constructor(capacity = 10, arr = []) {
    this.data = arr.length ? new Array(arr.length) : new Array(capacity)
    this.size = arr.length ? arr.length : 0 // 数组元素个数

    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        this.data[i] = arr[i]
      }
    }
  }

  // 向数组第一个位置添加一个元素 时间复杂度为O(n)
  addFirst(element) {
    this.add(0, element)
  }

  // 末尾添加一个元素 时间复杂度为O(1) 复杂度震荡时，复杂度是O(n)
  addLast(element) {
    this.add(this.size, element)
  }

  // 向数组中插入一个元素 时间复杂度为O(n/2) = O(n)
  add(index, element) {
    if (index < 0 || index > this.size) throw 'index 不合法'
    if (this.size === this.data.length) this[_resize](2 * this.data.length) // 约定扩容两倍
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[index] = element
    this.size++
  }

  // 查找数组 时间复杂度为O(1)
  query(i) {
    return this.data[i]
  }

  // 清空数组
  empty() {
    this.data = []
    return this.data
  }

  // 判断是否为空
  isEmpty() {
    return this.size === 0
  }

  // 获取数组中元素的个数
  getSize() {
    return this.size
  }

  // 获取数组容量
  getCapacity() {
    return this.data.length
  }

  // 输出字符串
  toString() {
    let str = ''
    for (let i = 0, l = this.size; i < l; i++) {
      if (i === l - 1) {
        str += this.data[i]
      } else {
        str += this.data[i] + ','
      }
    }
    return str
  }

  // 取出索引index位置的元素 时间复杂度为O(1)
  get(index) {
    if (index < 0 || index > this.size) throw 'index 不合法'
    return this.data[index]
  }

  // 取出索引最后一个位置的元素
  getLast() {
    return this.get(this.size - 1)
  }

  // 取出索引为0的元素
  getFirst() {
    return this.get(0)
  }

  // 数组元素的更新 时间复杂度为O(1)
  set(index, element) {
    if (index < 0 || index > this.size) throw 'index 不合法'
    this.data[index] = element
  }

  // 是否包含元素 时间复杂度为O(n)
  contains(element) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === element) return true
    }
    return false
  }

  // 通过元素找索引，找不到则返回 -1 时间复杂度为O(n)
  find(element) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === element) return i
    }
    return -1
  }

  // 删除元素 返回删除数组的元素 时间复杂度为O(n)
  remove(index) {
    if (index < 0 || index > this.size) throw 'index 不合法'
    const ret = this.data[index]
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i]
    }
    this.size--
    this.data[this.size] = null // 回收访问不到的元素，释放空间

    // 约定当数组空间只有一半的时候缩容
    // 由于定义当size === 数组的一半进行所容会出现复杂度震荡的问题，所以加入延迟所容机制，也就是将size === 数组的4分之一的时候再开始所容，并且数组长度的一半不能等于0
    // if(this.size === this.data.length / 2) this[_resize](this.data.length / 2)
    // 优化后的代码如下
    if (this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
      this[_resize](this.data.length / 2)
    }
    return ret
  }

  // 时间复杂度为O(n)
  removeFirst() {
    return this.remove(0)
  }

  // 时间复杂度为O(1) 复杂度震荡时，复杂度是O(n)
  removeLast() {
    return this.remove(this.size - 1)
  }

  // 根据元素删除 时间复杂度为O(n)
  removeElement(element) {
    const index = this.find(element)
    if (index !== -1) this.remove(index)
  }

  // 定义扩容的方法 时间复杂度为O(n)
  [_resize](newCapacity) {
    const newData = Array(newCapacity)
    for (let i = 0, l = this.size; i < l; i++) {
      newData[i] = this.data[i]
    }
    this.data = newData
  }

  // 交换i，j两个索引的位置
  swap(i, j) {
    if (i < 0 || i >= this.size || j < 0 || j >= this.size) return '序号不存在'
    const t = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = t
  }
}

module.exports = CArray
