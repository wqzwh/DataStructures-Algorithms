/**
 *
 * 循环队列
 * front === tail  队列空了
 * (tail + 1) % data.length === front 队列已经满了
 *
 */
const resize = Symbol('resize')
class LoopQueue {
  constructor(capacity = 10) {
    this.data = new Array(capacity + 1)
    this.front = 0 // 对首位置
    this.tail = 0 // 队尾位置
    this.size = 0 // 队列大小
  }

  // 入队方法
  enqueue(element) {
    if((this.tail + 1) % this.data.length === this.front) {
      this[resize](this.getCapacity() * 2)
    }

    this.data[this.tail] = element
    this.tail = ( this.tail + 1 ) % this.data.length
    this.size++
  }

  // 出队
  dequeue() {
    if(this.isEmpty()) throw('队列为空')
    const ret = this.data[this.front]

    this.data[this.front] = null
    this.front = (this.front + 1) % this.data.length
    this.size--

    if(this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !==0) {
      this[resize](this.getCapacity() / 2)
    }
    return ret
  }

  getFront() {
    if(this.isEmpty()) throw('队列为空')
    return this.data[this.front]
  }

  // 获取队列的大小
  getSize() {
    return this.size
  }

  // 判断队列是否为空
  isEmpty() {
    return this.front === this.tail
  }

  // 获取容积的大小
  getCapacity() {
    return this.data.length - 1
  }

  // 定义扩容的方法 时间复杂度为O(n)
  [resize](newCapacity) {
    let newData = new Array(newCapacity + 1)
    for(let i = 0, l = this.size; i < l; i++) {
      newData[i] = this.data[(i + this.front) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  toString() {
    let sf = 'front'
    let str = ''
    for(let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      if((i + 1) % this.data.length === this.tail) {
        str += this.array.get(i) + ' tail'
      } else {
        str += this.array.get(i) + ','
      }
    }
    return sf + str
  }
}
module.exports = LoopQueue

