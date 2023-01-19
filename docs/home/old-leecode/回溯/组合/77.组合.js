/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.60%)
 * Likes:    522
 * Dislikes: 0
 * Total Accepted:    141.9K
 * Total Submissions: 185.2K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    function dfs(n, start, path, res) {
        if (path.length == k) {
            res.push(JSON.parse(JSON.stringify(path)))
            return res
        }

        for (let i = start; i <= n; i++) {
            if (n - i + 1 < k - path.length) {
                continue
            }
            path.push(i)
            dfs(n, i + 1, path, res)
            path.pop()

        }
        return res
    }
    return dfs(n, 1, [], [])

};
// @lc code=end