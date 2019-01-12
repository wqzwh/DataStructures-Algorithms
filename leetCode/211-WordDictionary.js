/**
 *
 * 211. 添加与搜索单词 - 数据结构设计
 *
 */

class BSTNode {
  constructor(key = null, value = null, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
}

const _add = Symbol('_add')
const _getNode = Symbol('_getNode')
class BSTMap {
  constructor() {
    this.root = null
    this.size = 0
  }

  add(key, value) {
    this.root = this[_add](this.root, key, value)
  }

  [_add](node, key, value) {
    if (node === null) {
      this.size++
      return new BSTNode(key, value)
    }

    if (key < node.key) {
      node.left = this[_add](node.left, key, value)
    } else if (key > node.key) {
      node.right = this[_add](node.right, key, value)
    } else {
      node.value = value
    }
    return node
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if (node === null) return null
    if (key === node.key) return node
    if (key < node.key) return this[_getNode](node.left, key)
    if (key > node.key) return this[_getNode](node.right, key)
  }

  get(key) {
    let node = this[_getNode](this.root, key)
    return node === null ? null : node.value
  }
}



class Node {
  constructor(isWord = false) {
    this.isWord = isWord
    this.next = new BSTMap()
  }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.size = 0
  this.root = new Node()
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let cur = this.root
  for (let i = 0; i < word.length; i++) {
    let c = word.charAt(i)
    if (cur.next.get(c) === null) cur.next.add(c, new Node())
    cur = cur.next.get(c)
  }
  if (!cur.isWord) {
    cur.isWord = true
    this.size++
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this._match(this.root, word, 0)
};

WordDictionary.prototype._match = function (node, word, index) {
  if (index === word.length) return node.isWord

  let c = word.charAt(index)
  if (c !== '.') {
    if (node.next.get(c) === null) {
      return false
    } else {
      return this._match(node.next.get(c), word, index + 1)
    }
  } else {
    let keyValue = node.next.root['key']
    if (this._match(node.next.get(keyValue), word, index + 1)) {
      return true
    }
    return false
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
