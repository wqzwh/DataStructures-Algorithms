/**
 *
 * 804. 唯一摩尔斯密码词
 *
 */

/**
 * @param {string[]} words
 * @return {number}
 */


/**
 *
 * 树结构
 *
 */
class Node {
  constructor(element, left = null, right = null) {
    this.element = element
    this.left = left
    this.right = right
  }
}

// const Stack = require('../stack/arrayStack')
// const QueueList = require('../llist/queueList')
const _add = Symbol('_add')
const _contains = Symbol('_contains')
const _preOrder = Symbol('_preOrder')
const _inOrder = Symbol('_inOrder')
const _postOrder = Symbol('_postOrder')
const _findMin = Symbol('_findMin')
const _findMax = Symbol('_findMax')
const _removeMin = Symbol('_removeMin')
const _removeMax = Symbol('_removeMax')
const _remove = Symbol('_remove')
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  // 查看树的元素个数
  getSize() {
    return this.size
  }

  // 判断树的大小
  isEmpty() {
    return this.size === 0
  }

  // 添加元素
  add(element) {
    // if(this.root === null) {
    //   this.root = new Node(element)
    //   this.size++
    // } else {
    //   this[_add](this.root, element)
    // }
    this.root = this[_add](this.root, element)
  }

  // 添加元素的递归函数
  // 返回插入新节点后二分搜索书的根
  [_add](node, element) {
    // if(element === curElement){
    //   return
    // } else if(element < curElement && left === null) {
    //   left = new Node(element)
    //   this.size++
    //   return
    // } else if(element > curElement && right === null) {
    //   right = new Node(element)
    //   this.size++
    //   return
    // }

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

  // 是否包含元素
  contains(element) {
    return this[_contains](this.root, element)
  }

  [_contains](node, element) {
    if(node === null) return false

    if(element === node.element) {
      return true
    } else if(element < node.element) {
      return this[_contains](node.left, element)
    } else {
      return this[_contains](node.right, element)
    }
  }

  // 前序遍历
  preOrder() {
    this[_preOrder](this.root)
  }

  [_preOrder](node) {
    if(node === null) return
    console.log('访问了当前节点', node)
    this[_preOrder](node.left)
    this[_preOrder](node.right)
  }

  // 非递归实现前序遍历
  preOrderNr() {
    let stack = new Stack()
    stack.push(this.root)
    while(!stack.isEmpty()) {
      let cur = stack.pop()
      console.log('访问了节点', cur.element)
      if(cur.right !== null) stack.push(cur.right)
      if(cur.left !== null) stack.push(cur.left)
    }
  }

  // 中序遍历
  inOrder() {
    this[_inOrder](this.root)
  }

  [_inOrder](node) {
    if(node === null) return
    this[_inOrder](node.left)
    console.log('访问了当前节点', node)
    this[_inOrder](node.right)
  }

  // 后序遍历
  postOrder() {
    this[_postOrder](this.root)
  }

  [_postOrder](node) {
    if(node === null) return
    this[_postOrder](node.left)
    this[_postOrder](node.right)
    console.log('访问了当前节点', node)
  }

  // 广度优先遍历
  levelOrder() {
    let q = new QueueList()
    q.enqueue(this.root)
    while(!q.isEmpty()) {
      let cur = q.dequeue()
      console.log('访问了当前节点', node)
      if(cur.left !== null) q.enqueue(cur.left)
      if(cur.right !== null) q.enqueue(cur.right)
    }
  }

  // 查找最小元素
  findMin() {
    if(this.size === 0 ) return '该树为空'
    this[_findMin](this.root).element
  }

  [_findMin](node) {
    if(node.left === null) return node
    return this[_findMin](node.left)
  }

  // 查找最大元素
  findMax() {
    if(this.size === 0 ) return '该树为空'
    this[_findMax](this.root).element
  }

  [_findMax](node) {
    if(node.right === null) return node
    return this[_findMax](node.right)
  }

  // 删除最小元素
  removeMin() {
    let ret = this.findMin()
    this.root = this[_removeMin](this.root)
    return ret
  }

  [_removeMin](node) {
    if(node.left === null) {
      let rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this[_removeMin](node.left)
    return node
  }

  // 删除最大元素
  removeMax() {
    let ret = this.findMin()
    this.root = this[_removeMax](this.root)
    return ret
  }

  [_removeMax](node) {
    if(node.right === null) {
      let leftNode = node.left
      node.left = null
      this.size--
      return leftNode
    }
    node.right = this[_removeMax](node.right)
    return node
  }

  // 删除指定节点
  remove(element) {
    this.root = this[_remove](this.root, element)
  }

  // 删除以node为根节点，元素为element的元素
  // 返回的是删除后返回的根
  [_remove](node, element) {
    if(node === null) {
      return null
    }

    if(element < node.element) {
      node.left = this[_remove](node.left, element)
      return node
    } else if(element > node.element) {
      node.right = this[_remove](node.right, element)
      return node
    } else {
      // element === node.element

      // 左子树为空
      if(node.left === null) {
        let nodeRight = node.right
        node.right = null
        this.size--
        return nodeRight
      }
      // 右子树为空
      if(node.right === null) {

        let nodeLeft = node.left
        node.left = null
        this.size--
        return nodeLeft
      }
      // 左子树和右子树都不为空
      // 找到比待删除节点大的最小节点，即待删除元素节点右子树的最小节点
      // 用这个节点代替待删除节点
      let successor = this[_findMin](node.right)
      successor.right = this[_removeMin](node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor
    }
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

  // 删除元素
  remove(element) {
    this.bst.remove(element)
  }

  // 是否包含元素
  contains(element) {
    return this.bst.contains(element)
  }

  // 获取集合的个数
  getSize() {
    return this.bst.getSize()
  }

  // 是否为空
  isEmpty() {
    return this.bst.isEmpty()
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
