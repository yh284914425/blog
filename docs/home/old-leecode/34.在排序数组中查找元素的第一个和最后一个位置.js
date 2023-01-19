/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.30%)
 * Likes:    916
 * Dislikes: 0
 * Total Accepted:    227.6K
 * Total Submissions: 537.7K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^9 
 * nums 是一个非递减数组
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function findFirst(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2)
            let mid = nums[midIndex]
            if (mid < target) {
                left = midIndex + 1
            } else if (mid > target) {
                right = midIndex - 1
            } else {
                if (nums[midIndex - 1] < target || midIndex == 0) {
                    return midIndex
                } else {
                    right = midIndex - 1
                }
            }
        }
        return -1
    }

    function findLast(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2)
            let mid = nums[midIndex]
            if (mid < target) {
                left = midIndex + 1
            } else if (mid > target) {
                right = midIndex - 1
            } else {
                if (nums[midIndex + 1] > target || midIndex == nums.length - 1) {
                    return midIndex
                } else {
                    left = midIndex + 1
                }
            }
        }
        return -1
    }

    let first = findFirst(nums, target)
    if (first == -1) {
        return [-1, -1]
    }
    let last = findLast(nums, target)
    return [first, last]

};
searchRange([5, 7, 7, 8, 8, 10], 8)
// @lc code=end