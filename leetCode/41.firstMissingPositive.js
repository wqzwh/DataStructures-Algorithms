/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums = nums.filter(item => item > 0)
  if (!nums.length) return 1
  // nums.sort((a, b) => a - b)
  // if (nums[0] !== 1) return 1

  // len = nums.length
  // for (let i = 0; i < len - 1; i++) {
  //   if (nums[i + 1] - nums[i] > 1) {
  //     return nums[i] + 1
  //   }
  // }
  // return nums.pop() + 1

  len = nums.length
  for (let i = 0; i < len; i++) {
    let min = nums[i]
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < min) {
        const temp = min
        min = nums[j]
        nums[j] = temp
      }
    }
    nums[i] = min
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1
      }
    } else {
      if (min !== 1) return 1
    }
  }
  return nums.pop() + 1
}
