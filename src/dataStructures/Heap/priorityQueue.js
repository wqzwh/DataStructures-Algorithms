/**
 *
 * 优先队列
 *
 */

const MaxHeap = require('./maxHeap')

class PriorityQueue {
  constructor() {
    this.maxHeap = new MaxHeap()
  }

  getSize() {
    return this.maxHeap.getSize()
  }

  isEmpty() {
    return this.maxHeap.isEmpty()
  }

  getFront() {
    return this.maxHeap.findMax()
  }

  enqueue(element) {
    this.maxHeap.add(element)
  }

  dequeue() {
    return this.maxHeap.extractMax()
  }
}
