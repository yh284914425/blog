/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (42.86%)
 * Likes:    1380
 * Dislikes: 0
 * Total Accepted:    151.7K
 * Total Submissions: 353.2K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 
 * 
 * 
 * 
 * 
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 * 
 * 
 * 
 * 
 * 
 * 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 * 
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(0)
    const stack = []
    let max = Number.MIN_VALUE
    for (let i = 0; i < heights.length; i++) {

        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            let top = stack.pop()
            console.log(top, stack[stack.length - 1] + 1, i);
            max = Math.max(max, heights[top] * (stack.length ? (i - (stack[stack.length - 1] + 1)) : i))
        }
        stack.push(i)
    }
    return max

};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // @lc code=end