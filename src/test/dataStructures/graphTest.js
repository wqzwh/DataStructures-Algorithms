/**
 *
 * 图测试
 *
 */
const SparseGraph = require('../../dataStructures/Graph/SparseGraph')
const DenseGraph = require('../../dataStructures/Graph/DenseGraph')
const UnicomComponent = require('../../dataStructures/Graph/UnicomComponent')
const Path = require('../../dataStructures/Graph/Path')
const ShortPath = require('../../dataStructures/Graph/ShortPath')

const n = 13
const m = 20

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
  // console.log(`${str}:${ss}`)
}

// 稠密图测试
for (let i = 0; i < n; i++) {
  const adj = dg.adjIterator(dg, i)
  const str = i
  let ss = ''
  for (let w = adj.begin(); !adj.end(); w = adj.next()) {
    ss += `${w},`
  }
  // console.log(`${str}:${ss}`)
}

// 计算联通分量
const component = new UnicomComponent(sg)
console.log(component)
console.log(component.isConnected(2, 3))

const path = new Path(sg, 0)
path.showPath(2)

const shortPath = new ShortPath(sg, 0)
shortPath.showPath(2)
