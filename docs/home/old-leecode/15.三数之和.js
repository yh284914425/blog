/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        // while (nums[i] == nums[i + 1])
        //     i++
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1
        let right = nums.length - 1
        let target = -nums[i]
        while (left < right) {
            if (nums[left] + nums[right] < target) {
                left++
            } else if (nums[left] + nums[right] > target) {
                right--
            } else {
                res.push([nums[i], nums[left], nums[right]])
                // left++;
                // while (nums[left] == nums[left+1])
                //     left++;
                // right--
                // while (nums[right] == nums[right - 1])
                //     right--
                while (nums[left] == nums[++left]);
                while (nums[right] == nums[--right]);
            }
        }
    }
    return res

};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// @lc code=end