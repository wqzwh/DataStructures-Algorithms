const Helper = require('../../helper/index')
const insertSort = require('../../algorithm/insertSort')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('插入排序', insertSort, arr, n)