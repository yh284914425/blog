/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 *
 * https://leetcode-cn.com/problems/increasing-subsequences/description/
 *
 * algorithms
 * Medium (55.77%)
 * Likes:    260
 * Dislikes: 0
 * Total Accepted:    34K
 * Total Submissions: 61.1K
 * Testcase Example:  '[4,6,7,7]'
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是 2 。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[4, 6, 7, 7]
 * 输出：[[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7],
 * [4,7,7]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定数组的长度不会超过15。
 * 数组中的整数范围是 [-100,100]。
 * 给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {


    function backtrace(nums, startIndex, path, res) {
        if (path.length > 1) {

            res.push(JSON.parse(JSON.stringify(path)))
            // return res
        }
        let set = new Set()
        for (let i = startIndex; i < nums.length; i++) {

            if (path.length > 0 && nums[i] < path[path.length - 1] || set.has(nums[i])) {
                continue
            }
            set.add(nums[i])
            path.push(nums[i])
            backtrace(nums, i + 1, path, res)
            path.pop()

        }
        return res


    }
    return backtrace(nums, 0, [], [])

};
// @lc code=end