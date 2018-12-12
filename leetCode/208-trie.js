/**
 *
 * 208  实现 Trie (前缀树)
 *
 */

/**
 * Initialize your data structure here.
 */

/**
 *
 * 基于二分搜索树实现映射结构
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
    if(node === null) {
      this.size++
      return new BSTNode(key, value)
    }

    if(key < node.key) {
      node.left = this[_add](node.left, key, value)
    } else if(key > node.key) {
      node.right = this[_add](node.right, key, value)
    } else {
      node.value = value
    }
    return node
  }

  // 根据key获得节点
  [_getNode](node, key) {
    if(node === null) return null
    if(key === node.key) return node
    if(key < node.key) return this[_getNode](node.left, key)
    if(key > node.key) return this[_getNode](node.right, key)
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

var Trie = function() {
  this.size = 0
  this.root = new Node()
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let cur = this.root
  for(let i = 0; i < word.length; i++) {
    let c = word.charAt(i)
    if(cur.next.get(c) === null) cur.next.add(c, new Node())
    cur = cur.next.get(c)
  }
  if(!cur.isWord) {
    cur.isWord = true
    this.size++
  }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let cur = this.root
  for(let i = 0; i < word.length; i++){
    let c = word.charAt(i)
    if(cur.next.get(c) === null) return false
    cur = cur.next.get(c)
  }
  return cur.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root
  for(let i = 0; i < prefix.length; i++){
    let c = prefix.charAt(i)
    if(cur.next.get(c) === null) return false
    cur = cur.next.get(c)
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
