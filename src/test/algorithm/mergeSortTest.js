const Helper = require('../../helper/index')
const mergeSort = require('../../algorithm/mergeSort/mergeSort.js')
const mergeSort2 = require('../../algorithm/mergeSort/mergeSort2.js')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('归并排序', mergeSort2, arr, n)
