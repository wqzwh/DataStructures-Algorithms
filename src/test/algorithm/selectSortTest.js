const Helper = require('../../helper/index')
const selectSort = require('../../algorithm/selectSort')

const n = 10000
const arr = Helper.radomArray(n, 0, n)

Helper.testSort('选择排序', selectSort, arr, n)