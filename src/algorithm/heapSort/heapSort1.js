const MaxHeap = require('../../dataStructures/Heap/maxHeap')

const heapSort = (arr, n) => {
  const maxHeap = new MaxHeap(n)

  for (let i = 0; i < n; i++) {
    maxHeap.add(arr[i])
  }

  for (let i = n - 1; i >= 0; i--) {
    arr[i] = maxHeap.extractMax()
  }
  return arr
}

module.exports = heapSort
