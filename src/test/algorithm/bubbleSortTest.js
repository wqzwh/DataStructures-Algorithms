const Helper = require('../../helper/index')
const bubbleSort = require('../../algorithm/bubbleSort')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('冒泡排序', bubbleSort, arr, n)