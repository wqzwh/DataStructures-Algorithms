const BST = require('../dataStructures/BST/index')

const bst = new BST()
const arr = [8, 3, 14, 2, 7, 1, 16, 10]

for (let i = 0; i < arr.length; i++) {
  bst.add(arr[i])
}
console.log(bst)
// console.log('前序遍历：' + bst.preOrder())
// console.log('中序遍历：' + bst.inOrder())
// console.log('后序遍历：' + bst.postOrder())
// console.log('最小值：' + bst.findMin())
// console.log('最大值：' + bst.findMax())
console.log(bst.floor(0))
console.log(bst.ceil(100))
