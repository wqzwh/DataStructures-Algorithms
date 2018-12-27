const Helper = require('../../helper/index')
const quickSort = require('../../algorithm/quickSort/quickSort.js')
const quickSort2 = require('../../algorithm/quickSort/quickSort2.js')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('快速排序', quickSort, arr, n)
Helper.testSort('快速排序2', quickSort2, arr, n)
