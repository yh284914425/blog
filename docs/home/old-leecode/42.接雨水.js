/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (58.09%)
 * Likes:    2738
 * Dislikes: 0
 * Total Accepted:    328.1K
 * Total Submissions: 564.6K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = [];
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1];
      res += (Math.min(height[i], height[left]) - height[top]) * (i - left - 1);
    }
    stack.push(i);
  }

  return res;
  //   let ans = 0;
  //   const stack = [];
  //   const n = height.length;
  //   for (let i = 0; i < n; ++i) {
  //     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
  //       const top = stack.pop();
  //       if (!stack.length) {
  //         break;
  //       }
  //       const left = stack[stack.length - 1];
  //       const currWidth = i - left - 1;
  //       const currHeight = Math.min(height[left], height[i]) - height[top];
  //       ans += currWidth * currHeight;
  //     }
  //     stack.push(i);
  //   }
  //   return ans;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // @lc code=end
