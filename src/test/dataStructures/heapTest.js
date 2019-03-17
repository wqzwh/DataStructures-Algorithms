const MaxHeap = require('../../dataStructures/Heap/maxHeap')
const IndexMaxHeap = require('../../dataStructures/Heap/indexMaxHeap')
const Helper = require('../../helper/index')
const n = 1000000

function testHeap(arr, flag) {
  const startTime = new Date()
  const mh = new MaxHeap()
  if (!flag) {
    for (let i = 0; i < n; i++) {
      mh.add(Helper.random(0, n))
    }
  } else {
    mh.heapify(arr)
  }
  const endTime = new Date()
  return (endTime - startTime) / 1000
}

const testArr = []
for (let i = 0; i < n; i++) {
  testArr[i] = Helper.random(0, n)
}

function testIndexHeap(arr, flag) {
  const startTime = new Date()
  const mh = new IndexMaxHeap()
  if (!flag) {
    for (let i = 0; i < n; i++) {
      mh.add(i, i)
    }
  } else {
    mh.heapify(arr)
  }
  const endTime = new Date()
  return (endTime - startTime) / 1000
}

console.log('数组整理成堆实现' + testHeap(testArr, true))
console.log('添加实现' + testHeap(testArr, false))

console.log('添加实现' + testIndexHeap(testArr, false))
