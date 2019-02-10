const RBTree = require('../dataStructures/RedBlackTree/RBTree.js')
const BSTTree = require('../dataStructures/BST/index.js')
const AVLTree = require('../dataStructures/AVLTree/index.js')

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

const m = 1000000

// const bstTree = new BSTTree()
// console.log('bstTree:' + test(bstTree, m))
const avlTree = new AVLTree()
console.log('avlTree:' + test(avlTree, m))
const rbTree = new RBTree()
console.log('rbTree:' + test(rbTree, m))
