const Helper = require('../../helper/index')
const mergeSort = require('../../algorithm/mergeSort.js')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('归并排序', mergeSort, arr, n)
