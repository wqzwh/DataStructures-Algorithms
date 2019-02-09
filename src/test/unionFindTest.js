const UnionFind1 = require('../dataStructures/UnionFind/index.js')
const UnionFind2 = require('../dataStructures/UnionFind/index2.js')
const UnionFind3 = require('../dataStructures/UnionFind/index3.js')
const UnionFind4 = require('../dataStructures/UnionFind/index4.js')
const UnionFind5 = require('../dataStructures/UnionFind/index5.js')
const UnionFind6 = require('../dataStructures/UnionFind/index6.js')

// m  操作次数
// uf 并查集实例
const test = (uf, m) => {
  const size = uf.getSize()
  const startTime = new Date()

  for (let i = 0; i < m; i++) {
    const a = parseInt(Math.random() * (size + 1), 10)
    const b = parseInt(Math.random() * (size + 1), 10)
    uf.unionElement(a, b)
  }

  for (let i = 0; i < m; i++) {
    const a = parseInt(Math.random() * (size + 1), 10)
    const b = parseInt(Math.random() * (size + 1), 10)
    uf.isConnected(a, b)
  }

  const endTime = new Date()

  return (endTime - startTime) / 1000
}
const size = 100000
const m = 100000
// const uf1 = new UnionFind1(size)
// console.log(test(uf1, m))
// const uf2 = new UnionFind2(size)
// console.log(test(uf2, m))
const uf3 = new UnionFind3(size)
console.log(test(uf3, m))
const uf4 = new UnionFind4(size)
console.log(test(uf4, m))
const uf5 = new UnionFind5(size)
console.log(test(uf5, m))
const uf6 = new UnionFind6(size)
console.log(test(uf6, m))
