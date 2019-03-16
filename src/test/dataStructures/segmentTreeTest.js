const SegmentTree = require('../dataStructures/SegmentTree/index.js')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const merge = (a, b) => a + b

const segmentTree = new SegmentTree(arr, merge)

console.log(segmentTree)
console.log(segmentTree.query(0, 9))
