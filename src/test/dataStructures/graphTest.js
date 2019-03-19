/**
 *
 * 图测试
 *
 */
const SparseGraph = require('../../dataStructures/Graph/SparseGraph')

const n = 20
const m = 100

const sg = new SparseGraph(n, false)

for (let i = 0; i < m; i++) {
  const a = parseInt(Math.random() * n, 10)
  const b = parseInt(Math.random() * n, 10)
  sg.addEdge(a, b)
}

for (let i = 0; i < n; i++) {
  const adj = sg.adjIterator(sg, n)
  const str = i
  let ss = ''
  for (let w = adj.begin(); !adj.end(); w = adj.next()) {
    ss = `${w.join()}`
    console.log(`${str}:${ss}`)
  }
}
