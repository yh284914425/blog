/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (55.25%)
 * Likes:    897
 * Dislikes: 0
 * Total Accepted:    121.9K
 * Total Submissions: 220.6K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 *
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 *
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 *
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 *
 *
 * 示例 2：
 *
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 *
 *
 * 示例 3：
 *
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 *
 *
 * 示例 4：
 *
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString1 = function (s) {
  // while (s.indexOf("[") != -1) {
  //   s = s.replace(/(\d+)\[(.+?)\]/g, (a, b, c) => {
  //     console.log(a, b, c);
  //     return c.repeat(+b);
  //   });
  // }
  // return s;
  // return dfs(s, 0)[0];

  // function dfs(s, i) {
  //   let num = 0;
  //   let res = "";

  //   while (i < s.length) {
  //     if (s[i] > "0" && s[i] <= "9") {
  //       num = num * 10 + +s[i];
  //     } else if (s[i] == "[") {
  //       [temp, index] = dfs(s, i + 1);
  //       i = index;
  //       num = 0;
  //       res += temp.repeat(num);
  //     } else if (s[i] == "]") {
  //       return [res, i];
  //     } else {
  //       res += s[i];
  //     }
  //     i++;
  //   }

  //   return [res, i];
  // }
  const numStack = [];
  const strStack = [];
  let res = "";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + +s[i];
    } else if (s[i] == "[") {
      numStack.push(num);
      strStack.push(res);
      num = 0;
      res = "";
    } else if (s[i] == "]") {
      const popNum = numStack.pop();
      const popStr = strStack.pop();
      res = popStr + res.repeat(+popNum);
    } else {
      res += s[i];
    }
  }
  return res;
};
var decodeString = function (s) {
  // while (s.indexOf("[") != -1) {
  //   s = s.replace(/(\d+)\[(.+?)\]/g, (a, b, c) => {
  //     console.log(a, b, c);
  //     return c.repeat(+b);
  //   });
  // }
  // return s;
  return dfs(s, 0)[0];

  function dfs(s, i) {
    let num = 0;
    let res = "";

    while (i < s.length) {
      if (s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + +s[i];
      } else if (s[i] == "[") {
        [temp, index] = dfs(s, i + 1);
        i = index;
        res += temp.repeat(num);
        num = 0;
      } else if (s[i] == "]") {
        return [res, i];
      } else {
        res += s[i];
      }
      i++;
    }

    return [res, i];
  }
};

console.log(decodeString("3[a]2[bc]"));
// @lc code=end
