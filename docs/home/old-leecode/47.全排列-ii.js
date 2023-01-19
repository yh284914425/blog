/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (62.92%)
 * Likes:    632
 * Dislikes: 0
 * Total Accepted:    146.9K
 * Total Submissions: 233.3K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {


    function backtracking(nums, used, path, res) {

        if (path.length == nums.length) {
            res.push(JSON.parse(JSON.stringify(path)))
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || i > 0 && nums[i] == nums[i - 1] && !used[i-1]) {
                continue
            }
            used[i] = true
            path.push(nums[i])
            backtracking(nums, used, path, res)
            used[i] = false
            path.pop()

        }
        return res
    }
    return backtracking(nums.sort((a, b) => a - b), new Array(nums.length), [], [])

};
permuteUnique([1, 1, 2])
// @lc code=end