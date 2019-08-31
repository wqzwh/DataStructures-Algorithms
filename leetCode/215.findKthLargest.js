/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // nums.sort((a, b) => b - a)
  // return nums[k - 1]

  const len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      const temp = nums[j]
      if (temp > nums[j + 1]) {
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
  }
  return nums[len - (k - 1)]
}
