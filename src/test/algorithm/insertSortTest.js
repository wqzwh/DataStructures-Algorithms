const Helper = require('../../helper/index')
const insertSort = require('../../algorithm/insertSort')

const n = 50000
const arr = Helper.radomArray(n, 0, n)
const arr2 = Helper.nearlyOrderArray(n, 3)
Helper.testSort('插入排序', insertSort, arr, n)
Helper.testSort('插入排序2', insertSort, arr2, n)
