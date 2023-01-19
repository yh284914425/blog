/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (68.23%)
 * Likes:    812
 * Dislikes: 0
 * Total Accepted:    188.5K
 * Total Submissions: 276.3K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {


    let m = grid.length - 1
    let n = grid[0].length - 1
    let arr = []
    for (let i = 0; i < m + 1; i++) {
        arr.push([])
    }
    return getMinPath(m, n, grid, arr)

};
console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));

function getMinPath(m, n, grid, arr) {
    if (arr[m][n] !== undefined) {
        return arr[m][n]
    }
    if (n == 0 && m == 0) {
        return grid[m][n]
    }
    if (m == 0) {
        return getMinPath(m, n - 1, grid, arr) + grid[m][n]
    }
    if (n == 0) {
        return getMinPath(m - 1, n, grid, arr) + grid[m][n]
    }
    let res = Math.min(getMinPath(m - 1, n, grid, arr), getMinPath(m, n - 1, grid, arr)) + grid[m][n]
    arr[m][n] = res
    return res
}
// @lc code=end