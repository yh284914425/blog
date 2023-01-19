/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (44.63%)
 * Likes:    866
 * Dislikes: 0
 * Total Accepted:    209.2K
 * Total Submissions: 465.9K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * intervals[i].length == 2
 * 0 i i 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {


    let sortIntervals = intervals.sort((a, b) => a[0] - b[0])
    let res = []
    for (let i = 0; i < sortIntervals.length; i++) {
        // || res[res.length-1][1]>sortIntervals[i][0]
        let current = sortIntervals[i]
        if (res.length == 0) {
            res.push(current)
        } else {
            if (res[res.length - 1][1] >= current[0]) {
                res[res.length - 1][1] = Math.max(current[1], res[res.length - 1][1])
            } else {
                res.push(current)

            }
        }


    }
    return res

};


console.log(merge([
    [8, 10],
    [1, 3],
    [2, 6],
    [15, 18]
]));
// @lc code=end