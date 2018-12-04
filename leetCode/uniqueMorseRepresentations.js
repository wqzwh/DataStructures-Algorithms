/**
 *
 * 804. 唯一摩尔斯密码词
 *
 */

/**
 * @param {string[]} words
 * @return {number}
 */

class Node {
  constructor(element, left = null, right = null) {
    this.element = element
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  // 查看树的元素个数
  getSize() {
    return this.size
  }

  // 添加元素
  add(element) {
    this.root = this[_add](this.root, element)
  }

  // 添加元素的递归函数
  // 返回插入新节点后二分搜索书的根
  [_add](node, element) {
    if(node === null) {
      this.size++
      return new Node(element)
    }

    if(element < node.element) {
      node.left = this[_add](node.left, element)
    } else if(element > node.element) {
      node.right = this[_add](node.right, element)
    }
    return node
  }
}


class BSTSet {
  constructor() {
    this.bst = new BST()
  }

  // 添加元素
  // 不能添加重复元素
  add(element) {
    this.bst.add(element)
  }

  // 获取集合的个数
  getSize() {
    return this.bst.getSize()
  }
}

const uniqueMorseRepresentations = (words) => {
  const codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let treeSet = new BSTSet()

  for(let v of words) {
    let str = ''
    for(let i = 0; i < v.length; i++) {
      str += codes[v.charCodeAt(i) - 'a'.charCodeAt()]
    }
    treeSet.add(str)
  }
  return treeSet.getSize()
}
