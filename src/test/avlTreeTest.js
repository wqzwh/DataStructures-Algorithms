const AVLTree = require('../dataStructures/AVLTree/index.js')
const BSTTree = require('../dataStructures/BST/index.js')

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

const m = 10000

const bstTree = new BSTTree()
console.log('bst:' + test(bstTree, m))
const avlTree = new AVLTree()
console.log('avl:' + test(avlTree, m))
