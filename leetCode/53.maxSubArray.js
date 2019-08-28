/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0 // 记录i项之前的数字之和
  let res = -Number.MAX_VALUE // 定义初始化最小的一个数字
  for (let i = 0, l = nums.length; i < l; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    res = Math.max(sum, res)
  }
  return res
}
