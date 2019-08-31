/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0

  // nums.sort((a, b) => a - b)
  // let max = 0

  // for (let i = 0, l = nums.length; i < l - 1; i++) {
  //   const temp = Math.abs(nums[i + 1] - nums[i])
  //   if (temp > max) {
  //     max = temp
  //   }
  // }
  // return max

  let max = 0
  let space // 记录最大差值
  const len = nums.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const temp = nums[j]
      if (temp > nums[j + 1]) {
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
      }
    }
    if (i > 0) {
      space = nums[i + 1] - nums[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, nums[1] - nums[0])
}
