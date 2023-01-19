/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        const num2 = target - nums[i];
        if(map.has(num2)){
            return [map.get(num2),i];
        }else{
            map.set(num1,i);
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end