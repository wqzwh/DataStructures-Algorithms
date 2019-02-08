const Trie = require('../dataStructures/Trie/index.js')

const trie = new Trie()

trie.add('cat', 1)
trie.add('dog', 2)
trie.add('deer', 3)
trie.add('panda', 4)
trie.add('pan', 5)

console.log(trie.contains('cat'))
// console.log(trie.del('cat'))
// console.log(trie.contains('deer'))
console.log(trie)
