/**
 *
 * Trie 字典树
 *
 */

const TreeMap = require('../Map/BSTMap')

class Node {
  constructor(isWord = false) {
    this.isWord = isWord
    this.next = new TreeMap()
  }
}

class Trie {
  constructor() {
    this.size = 0
    this.root = new Node()
  }

  getSize() {
    return this.size
  }

  // 添加一个新的单词
  add(word) {
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
  }

  // 在字典树中查询单词是否包含
  contains(word) {
    let cur = this.root
    for(let i = 0; i < word.length; i++){
      let c = word.charAt(i)
      if(cur.next.get(c) === null) return false
      cur = cur.next.get(c)
    }
    return cur.isWord
  }

  // 在字典树中查询单词是否有以prefix为前缀的
  isPrefix(prefix) {
    let cur = this.root
    for(let i = 0; i < prefix.length; i++){
      let c = prefix.charAt(i)
      if(cur.next.get(c) === null) return false
      cur = cur.next.get(c)
    }
    return true
  }
}

