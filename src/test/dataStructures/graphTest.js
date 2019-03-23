/**
 *
 * 图测试
 *
 */
const SparseGraph = require('../../dataStructures/Graph/SparseGraph')
const DenseGraph = require('../../dataStructures/Graph/DenseGraph')

const n = 20
const m = 100

const sg = new SparseGraph(n, false)
const dg = new DenseGraph(n, false)

for (let i = 0; i < m; i++) {
  const a = parseInt(Math.random() * n, 10)
  const b = parseInt(Math.random() * n, 10)
  sg.addEdge(a, b)
  dg.addEdge(a, b)
}

// 稀疏图测试
for (let i = 0; i < n; i++) {
  const adj = sg.adjIterator(sg, i)
  const str = i
  let ss = ''
  for (let w = adj.begin(); !adj.end(); w = adj.next()) {
    ss += `${w},`
  }
  console.log(`${str}:${ss}`)
}

// 稠密图测试
for (let i = 0; i < n; i++) {
  const adj = dg.adjIterator(dg, i)
  const str = i
  let ss = ''
  for (let w = adj.begin(); !adj.end(); w = adj.next()) {
    ss += `${w},`
  }
  console.log(`${str}:${ss}`)
}

console.log(dg)
