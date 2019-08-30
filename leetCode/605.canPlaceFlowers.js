/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let num = 0 // 记录可以种的数
  flowerbed.push(0) // 防止末尾出现两个连续0的情况，例如[1,0,0,0,1,0,0]，末尾出现两个连续0是可以种植，所以进行补零操作，符合三个连续0可种植的逻辑
  for (let i = 0; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        num++
        i++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        num++
        i++
      }
    }
  }
  return num >= n
}
