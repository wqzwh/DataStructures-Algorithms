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
}

