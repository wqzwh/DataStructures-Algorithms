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

const Stack = require('../stack/arrayStack')
const QueueList = require('../llist/queueList')
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
const _floor = Symbol('_floor')
const _ceil = Symbol('_ceil')
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  // 查看树的元素个数
  size() {
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

  /**
   * 添加元素的递归函数
   * 返回插入新节点后二分搜索书的根
   *
   * 1、如果element和node.element相等，则直接返回
   * 2、如果element小于node.element并且node.left是空，则node.left = element
   * 3、如果element大于node.element并且node.right是空，则node.right = element
   * 4、如果element小于node.element，传入node.left, element，返回1继续执行
   * 5、如果element大于于node.element，传入node.right, element，返回1继续执行
   *
   * @param {*} node  节点
   * @param {*} element 需要加入的元素
   * @returns
   * @memberof BST
   */
  [_add](node, element) {
    // if(element === node.element){
    //   return
    // } else if(element < node.element && node.left === null) {
    //   node.left = new Node(element)
    //   this.size++
    //   return
    // } else if(element > node.element && node.right === null) {
    //   node.right = new Node(element)
    //   this.size++
    //   return
    // }

    if (node === null) {
      this.size++
      return new Node(element)
    }

    if (element < node.element) {
      node.left = this[_add](node.left, element)
    } else if (element > node.element) {
      node.right = this[_add](node.right, element)
    }
    return node
  }

  // 是否包含元素
  contains(element) {
    return this[_contains](this.root, element)
  }

  [_contains](node, element) {
    if (node === null) return false

    if (element === node.element) {
      return true
    } else if (element < node.element) {
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
    if (node === null) return
    console.log('访问了当前节点', node)
    this[_preOrder](node.left)
    this[_preOrder](node.right)
  }

  // 非递归实现前序遍历
  preOrderNr() {
    const stack = new Stack()
    stack.push(this.root)
    while (!stack.isEmpty()) {
      const cur = stack.pop()
      console.log('访问了节点', cur.element)
      if (cur.right !== null) stack.push(cur.right)
      if (cur.left !== null) stack.push(cur.left)
    }
  }

  // 中序遍历
  inOrder() {
    this[_inOrder](this.root)
  }

  [_inOrder](node) {
    if (node === null) return
    this[_inOrder](node.left)
    console.log('访问了当前节点', node)
    this[_inOrder](node.right)
  }

  // 后序遍历
  postOrder() {
    this[_postOrder](this.root)
  }

  [_postOrder](node) {
    if (node === null) return
    this[_postOrder](node.left)
    this[_postOrder](node.right)
    console.log('访问了当前节点', node)
  }

  // 广度优先遍历
  levelOrder() {
    const q = new QueueList()
    q.enqueue(this.root)
    while (!q.isEmpty()) {
      const cur = q.dequeue()
      console.log('访问了当前节点', node)
      if (cur.left !== null) q.enqueue(cur.left)
      if (cur.right !== null) q.enqueue(cur.right)
    }
  }

  // 查找最小元素
  findMin() {
    if (this.size === 0) return '该树为空'
    return this[_findMin](this.root).element
  }

  [_findMin](node) {
    if (node.left === null) return node
    return this[_findMin](node.left)
  }

  // 查找最大元素
  findMax() {
    if (this.size === 0) return '该树为空'
    return this[_findMax](this.root).element
  }

  [_findMax](node) {
    if (node.right === null) return node
    return this[_findMax](node.right)
  }

  // 删除最小元素
  removeMin() {
    const ret = this.findMin()
    this.root = this[_removeMin](this.root)
    return ret
  }

  [_removeMin](node) {
    if (node.left === null) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this[_removeMin](node.left)
    return node
  }

  // 删除最大元素
  removeMax() {
    const ret = this.findMax()
    this.root = this[_removeMax](this.root)
    return ret
  }

  [_removeMax](node) {
    if (node.right === null) {
      const leftNode = node.left
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
    if (node === null) {
      return null
    }

    if (element < node.element) {
      node.left = this[_remove](node.left, element)
      return node
    } else if (element > node.element) {
      node.right = this[_remove](node.right, element)
      return node
    } else {
      // element === node.element

      // 左子树为空
      if (node.left === null) {
        const nodeRight = node.right
        node.right = null
        this.size--
        return nodeRight
      }
      // 右子树为空
      if (node.right === null) {
        const nodeLeft = node.left
        node.left = null
        this.size--
        return nodeLeft
      }
      // 第一种寻找后继元素作为根结点
      // 左子树和右子树都不为空
      // 找到比待删除节点大的最小节点，即待删除元素节点右子树的最小节点
      // 用这个节点代替待删除节点
      const successor = this[_findMin](node.right)
      successor.right = this[_removeMin](node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor

      // 第二种寻找前驱元素作为根结点
      // 寻找待删除节点的左子树上寻找最大值来替换
      // let predecessor = this[_findMax](node.left)
      // predecessor.left = this[_removeMax](node.left)
      // predecessor.right = node.right

      // node.left = node.right = null
      // return predecessor
    }
  }

  /**
   * 如果element存在
   *  那么floor , ceil就是element值自身
   *
   * 如果element不存在则
   *  floor：是最接近element且小于element的节点
   *  ceil：是最接近element且大于element的节点
   */
  floor(element) {
    const node = this[_floor](this.root, element)
    if (node) return this[_floor](this.root, element).element
    return '不存在floor'
  }

  [_floor](node, element) {
    if (node === null) return null

    if (node.element === element) return node

    if (node.element > element) {
      return this[_floor](node.left, element)
    }

    if (node.element < element) {
      const tempNode = this[_floor](node.right, element)
      if (tempNode !== null) return tempNode
      return node
    }
  }

  ceil(element) {
    const node = this[_ceil](this.root, element)
    if (node) return this[_ceil](this.root, element).element
    return '不存在ceil'
  }

  [_ceil](node, element) {
    if (node === null) return null

    if (node.element === element) return node

    if (node.element < element) {
      return this[_ceil](node.right, element)
    }

    if (node.element > element) {
      const tempNode = this[_ceil](node.left, element)
      if (tempNode !== null) return tempNode
      return node
    }
  }
}

module.exports = BST
