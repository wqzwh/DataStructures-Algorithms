const LlistMap = require('../dataStructures/Map/index.js')
const AVLMap = require('../dataStructures/Map/AVLMap.js')
const BSTMap = require('../dataStructures/Map/BSTMap.js')

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

const listMap = new LlistMap()
console.log('map:' + test(listMap, m))
const bstMap = new BSTMap()
console.log('bstMap:' + test(bstMap, m))
const avlMap = new AVLMap()
console.log('avlMap:' + test(avlMap, m))
