const MaxHeap = require('../dataStructures/Heap/maxHeap.js')
const Helper = require('../helper/index')
const n = 1000000

function testHeap(arr, flag) {
  const startTime = new Date()
  if (!flag) {
    const mh = new MaxHeap()
    for (let i = 0; i < n; i++) {
      mh.add(Helper.random(0, n))
    }
  } else {
    const mh = new MaxHeap()
    mh.heapify(arr)
  }
  const endTime = new Date()
  return (endTime - startTime) / 1000
}

const testArr = []
for (let i = 0; i < n; i++) {
  testArr[i] = Helper.random(0, n)
}

console.log('数组整理成堆实现' + testHeap(testArr, true))
console.log('添加实现' + testHeap(testArr, false))
