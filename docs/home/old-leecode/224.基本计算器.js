/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 *
 * https://leetcode-cn.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (41.81%)
 * Likes:    642
 * Dislikes: 0
 * Total Accepted:    71.5K
 * Total Submissions: 171K
 * Testcase Example:  '"1 + 1"'
 *
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "1 + 1"
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = " 2-1 + 2 "
 * 输出：3
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "(1+(4+5+2)-3)+(6+8)"
 * 输出：23
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * s 表示一个有效的表达式
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  function calcu(list) {
    let stack = [];
    let sign = 1;
    let num = 0;

    while (list.length) {
      let c = list.shift();
      if (c >= "0" && c <= "9") {
        num = num * 10 + +c;
      }

      if (c == "(") {
        num = calcu(list);
      }
      if (((c < "0" || c > "9") && c != " ") || list.length == 0) {
        stack.push(sign * num);
        if (c == "+") {
          sign = 1;
        }
        if (c == "-") {
          sign = -1;
        }
        num = 0;
      }
      if (c == ")") {
        break;
      }
    }
    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
      sum += stack[i];
    }
    return sum;
  }
  return calcu([...s]);
};

// @lc code=end
