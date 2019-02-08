/**
 *
 * Trie 字典树
 *
 */

const TreeMap = require('./BSTMap.js')

class Node {
  constructor(weights = null, isWord = false) {
    this.isWord = isWord
    this.weights = weights
    this.next = new TreeMap()
  }
}

const _root = Symbol('_root')
const _size = Symbol('_size')

class Trie {
  constructor() {
    this[_size] = 0
    this[_root] = new Node()
  }

  getSize() {
    return this[_size]
  }

  // 添加一个新的单词
  add(word, weights) {
    let cur = this[_root]
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i)
      if (cur.next.get(c) === null) cur.next.add(c, new Node(weights))
      cur = cur.next.get(c)
    }
    if (!cur.isWord) {
      cur.isWord = true
      this[_size]++
    }
    cur.weights = weights
  }

  // 在字典树中查询单词是否包含
  contains(word) {
    let cur = this[_root]
    for (let i = 0; i < word.length; i++) {
      const c = word.charAt(i)
      if (cur.next.get(c) === null) return false
      cur = cur.next.get(c)
    }
    return cur.isWord
  }

  // 在字典树中查询单词是否有以prefix为前缀的
  isPrefix(prefix) {
    let cur = this[_root]
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix.charAt(i)
      if (cur.next.get(c) === null) return false
      cur = cur.next.get(c)
    }
    return true
  }

  // 删除操作
  // del(word) {
  //   debugger
  //   // 判断单词是否存在
  //   if (!this.contains(word)) return `不存在${word}`

  //   let cur = this[_root]
  //   for (let i = 0; i < word.length; i++) {
  //     const c = word.charAt(i)
  //     if (cur.next.get(c) === null) return false
  //     cur = cur.next.get(c)
  //   }
  //   if (cur.next.root) {
  //     cur.isWord = false
  //   } else {
  //     // 两种情况
  //     // 只有一个单词，可能会有多个分支单词
  //     console.log(cur.next.remove('c'))
  //   }
  // }
}
module.exports = Trie
