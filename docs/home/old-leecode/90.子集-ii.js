/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (61.90%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    71.4K
 * Total Submissions: 115.4K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 
 * 说明：解集不能包含重复的子集。
 * 
 * 示例:
 * 
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {


    function backtracking(nums, start, path, res) {
        res.push(JSON.parse(JSON.stringify(path)))
        if (start == nums.length) {

            return
        }

        for (let i = start; i < nums.length; i++) {
            if (nums[i] == nums[i - 1] && i > start) {
                continue
            }
            path.push(nums[i])
            backtracking(nums, i + 1, path, res)
            path.pop()
        }
        return res
    }
    return backtracking(nums.sort((a, b) => a - b), 0, [], [])
};
// @lc code=end