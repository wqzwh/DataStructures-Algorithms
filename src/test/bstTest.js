const BST = require('../dataStructures/BST/index')

const bst = new BST()
const arr = [1, 3, 4, 2, 5, 8, 6, 0]

for (let i = 0; i < arr.length; i++) {
  bst.add(arr[i])
}
console.log(bst)
console.log('前序遍历：' + bst.preOrder())
console.log('中序遍历：' + bst.inOrder())
console.log('后序遍历：' + bst.postOrder())
console.log('最小值：' + bst.findMin())
console.log('最大值：' + bst.findMax())
