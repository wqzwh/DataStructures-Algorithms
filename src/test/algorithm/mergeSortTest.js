const Helper = require('../../helper/index')
const mergeSort1 = require('../../algorithm/mergeSort/mergeSort.js')
const mergeSortBU = require('../../algorithm/mergeSort/mergeSortBU.js')

const n = 50000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('归并排序', mergeSort1, arr, n)
Helper.testSort('归并排序2', mergeSortBU, arr, n)
