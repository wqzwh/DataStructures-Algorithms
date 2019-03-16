const Helper = require('../../helper/index')
// 插入排序
const insertSort = require('../../algorithm/basicSort/insertSort')

// 归并排序
const mergeSort1 = require('../../algorithm/mergeSort/mergeSort.js')
const mergeSortBU = require('../../algorithm/mergeSort/mergeSortBU.js')

// 快速排序
const quickSort = require('../../algorithm/quickSort/quickSort.js')
const quickSort2 = require('../../algorithm/quickSort/quickSort2.js')
const quickSort3 = require('../../algorithm/quickSort/quickSort3.js')
const quickSort4 = require('../../algorithm/quickSort/quickSort4.js')
const quickSort5 = require('../../algorithm/quickSort/quickSort5.js')

// 选择排序
const selectSort = require('../../algorithm/basicSort/selectSort')

// 希尔排序
const shellSort = require('../../algorithm/basicSort/shellSort')

// 冒泡排序
const bubbleSort = require('../../algorithm/basicSort/bubbleSort')

// 堆排序
const heapSort1 = require('../../algorithm/heapSort/heapSort1')
const heapSort2 = require('../../algorithm/heapSort/heapSort2')
const heapSort3 = require('../../algorithm/heapSort/heapSort3')

const n = 50000
const arr = Helper.radomArray(n, 0, n)
const arr2 = Helper.nearlyOrderArray(n, 3)

// Helper.testSort('插入排序', insertSort, arr, n)
// Helper.testSort('插入排序2', insertSort, arr2, n)

// Helper.testSort('归并排序', mergeSort1, arr, n)
// Helper.testSort('归并排序2', mergeSortBU, arr, n)

// Helper.testSort('快速排序', quickSort, arr, n)
// Helper.testSort('快速排序2', quickSort2, arr, n)
// Helper.testSort('快速排序3', quickSort3, arr, n)
// Helper.testSort('快速排序4', quickSort4, arr, n)
// Helper.testSort('快速排序5', quickSort5, arr, n)

// Helper.testSort('选择排序', selectSort, arr, n)

// Helper.testSort('希尔排序', shellSort, arr, n)

// Helper.testSort('冒泡排序', bubbleSort, arr, n)

Helper.testSort('堆排序1', heapSort1, arr, n)
Helper.testSort('堆排序1-几乎有序的数组', heapSort1, arr2, n)

Helper.testSort('堆排序2', heapSort2, arr, n)
Helper.testSort('堆排序2-几乎有序的数组', heapSort2, arr2, n)

Helper.testSort('原地堆排序', heapSort3, arr, n)
Helper.testSort('原地堆排序-几乎有序的数组', heapSort3, arr2, n)
