/**
 * 349 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

class Node {
  constructor(element, left = null, right = null) {
    this.element = element
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
const _contains = Symbol('_contains')
const _findMin = Symbol('_findMin')
const _removeMin = Symbol('_removeMin')
const _remove = Symbol('_remove')
class BST {
  constructor() {
    this.root = null
    this.size = 0
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

  [_findMin](node) {
    if(node.left === null) return node
    return this[_findMin](node.left)
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

  // 是否包含元素
  contains(element) {
    return this.bst.contains(element)
  }

  // 删除元素
  remove(element) {
    this.bst.remove(element)
  }
}



const intersection = (nums1, nums2) => {
  let bstSet = new BSTSet()
  for(let v of nums1) {
    bstSet.add(v)
  }
  let ret = []
  for(let v of nums2) {
    if(bstSet.contains(v)) {
      ret.push(v)
      bstSet.remove(v)
    }
  }
  return ret
}
