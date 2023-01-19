/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Hard (51.98%)
 * Likes:    492
 * Dislikes: 0
 * Total Accepted:    75.4K
 * Total Submissions: 145K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3, k = 3
 * 输出："213"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 4, k = 9
 * 输出："2314"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：n = 3, k = 1
 * 输出："123"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {

    let count = 0
    let res

    function backtracking(n, used, path) {

        if (path.length == n && ++count == k) {
            return path
        }

        for (let i = 1; i <= n; i++) {
            if (used[i]) {
                continue
            }
            used[i] = true
            res = backtracking(n, used, path + i)
            if (res) {
                break
            }
            used[i] = false
        }
        return res

    }
    return backtracking(n, new Array(n), "")
};
console.log(getPermutation(4, 9));
// @lc code=end