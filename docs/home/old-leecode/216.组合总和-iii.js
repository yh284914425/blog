/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 *
 * https://leetcode-cn.com/problems/combination-sum-iii/description/
 *
 * algorithms
 * Medium (73.87%)
 * Likes:    280
 * Dislikes: 0
 * Total Accepted:    69K
 * Total Submissions: 93.4K
 * Testcase Example:  '3\n7'
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 
 * 说明：
 * 
 * 
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 * 
 * 
 * 示例 2:
 * 
 * 输入: k = 3, n = 9
 * 输出: [[1,2,6], [1,3,5], [2,3,4]]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {

    function dfs(startIndex, path, res, n) {

        if (n == 0 && path.length == k) {
            res.push(JSON.parse(JSON.stringify(path)))
            return res
        }
        for (let i = startIndex; i < 10; i++) {
            path.push(i)
            dfs(i + 1, path, res, n - i)
            path.pop()

        }
        return res
    }

    return dfs(1, [], [], n)

};
// @lc code=end