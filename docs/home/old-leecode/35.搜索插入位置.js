/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (47.04%)
 * Likes:    863
 * Dislikes: 0
 * Total Accepted:    346K
 * Total Submissions: 735.5K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    function findFirst(nums, target) {
        let left = 0
        let right = nums.length - 1
        if (target > nums[nums.length - 1]) {
            return nums.length
        }
        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2)
            let mid = nums[midIndex]
            if (mid >= target) {
                if (nums[midIndex - 1] < target || midIndex == 0) {
                    return midIndex
                } else {
                    right = midIndex - 1
                }
            } else {
                left = midIndex + 1

            }
        }
        return -1
    }

    function findFirst1(nums, target) {
        let left = 0
        let right = nums.length - 1
        if (target > nums[nums.length - 1]) {
            return nums.length
        }
        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2)
            let mid = nums[midIndex]
            if (mid <= target) {
                if (nums[midIndex + 1] > target || midIndex == nums.length - 1) {
                    return midIndex
                } else {
                    left = midIndex + 1
                }
            } else {
                right = midIndex - 1

            }
        }
        return -1
    }
    return findFirst1(nums, target)

}

// @lc code=end