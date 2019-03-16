const MaxHeap = require('../../dataStructures/Heap/maxHeap')

const heapSort = (arr, n) => {
  const maxHeap = new MaxHeap()

  maxHeap.heapify(arr)

  for (let i = n - 1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
  return arr
}

module.exports = heapSort
