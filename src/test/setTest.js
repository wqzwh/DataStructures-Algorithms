const BSTSet = require('../dataStructures/Set/index.js')
const LListSet = require('../dataStructures/Set/llistSet.js')
const AVLSet = require('../dataStructures/Set/AVLSet.js')

// m 操作次数
// t 树实例
const test = (t, m) => {
  const startTime = new Date()
  const arr = []
  for (let i = 0; i < m; i++) {
    const a = parseInt(Math.random() * (m + 1), 10)
    arr.push(a)
  }
  arr.sort()

  for (let i = 0; i < arr.length; i++) {
    t.add(arr[i])
  }

  const endTime = new Date()

  return (endTime - startTime) / 1000
}

const m = 30000

const listMap = new BSTSet()
console.log('map:' + test(listMap, m))
const avlSet = new AVLSet()
console.log('AVLSet:' + test(avlSet, m))
const llistSet = new LListSet()
console.log('LListSet:' + test(llistSet, m))
