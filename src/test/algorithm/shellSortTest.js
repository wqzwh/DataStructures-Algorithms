const Helper = require('../../helper/index')
const shellSort = require('../../algorithm/shellSort')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('希尔排序', shellSort, arr, n)
